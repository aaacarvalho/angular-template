import { Component } from '@angular/core';
import { ApexOptions } from 'apexcharts';

enum PaymentType {
  Income = 'INCOME',
  Outcome = 'OUTCOME',
}

type ReportType = 'SAF' | 'TOTAL' | 'FPE' | 'REC';

@Component({
  selector: 'view-accounting',
  templateUrl: './accounting-view.template.html',
  styleUrls: ['./accounting-view.style.scss'],
})
export class AccountingView {
  selectedOption: ReportType = 'TOTAL';
  selectOptions = [
    { label: 'Total', value: 'TOTAL' },
    { label: 'REC', value: 'REC' },
    { label: 'SAF', value: 'SAF' },
    { label: 'FPE', value: 'FPE' },
  ];

  selectOption(option: ReportType): void {
    this.selectedOption = option;
    this.calculateInstallments();
    this.calculateIncomesAndOutcomes();
    this.updateChart();
  }

  numberFormatter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  });

  confirmationId = '';

  totalIncomesPaid = 0;
  totalIncomes = 0;

  installments = [
    {
      id: '1',
      description: 'Contrato',
      shouldBePaidAt: new Date('2024-05-20'),
      amount: 2500,
      paidAt: new Date('2021-05-20'),
      type: PaymentType.Income,
    },
    {
      id: '2',
      description: '1º Monitoramento',
      shouldBePaidAt: new Date('2025-05-20'),
      amount: 2500,
      paidAt: new Date('2022-07-04'),
      type: PaymentType.Income,
    },
    {
      id: '3',
      description: '2º Monitoramento',
      shouldBePaidAt: new Date('2026-05-20'),
      amount: 2500,
      paidAt: new Date('2023-04-13'),
      type: PaymentType.Income,
    },
    {
      id: '4',
      description: '3º Monitoramento',
      shouldBePaidAt: new Date('2027-05-20'),
      amount: 2500,
      paidAt: null,
      type: PaymentType.Income,
    },
    {
      id: '5',
      description: '4º Monitoramento',
      shouldBePaidAt: new Date('2028-05-20'),
      amount: 2500,
      paidAt: null,
      type: PaymentType.Income,
    },
  ];

  chartOptions: ApexOptions = {
    series: [
      {
        name: 'Curto Prazo',
        data: [10000, 6400, 3600, 0, 0],
      },
      {
        name: 'Longo Prazo',
        data: [3500, 3500, 3500, 3500, 3500],
      },
    ],
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      categories: ['2024', '2025', '2026', '2027', '2028'],
    },
    yaxis: {
      labels: {
        formatter: (value: number) => this.numberFormatter.format(value),
      },
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  updateChart(): void {
    const series = {
      TOTAL: [
        {
          name: 'Curto Prazo',
          data: [10000, 6400, 3600, 0, 0],
        },
        {
          name: 'Longo Prazo',
          data: [3500, 3500, 3500, 3500, 3500],
        },
      ],
      SAF: [
        {
          name: 'Curto Prazo',
          data: [6000, 4000, 2000, 0, 0],
        },
        {
          name: 'Longo Prazo',
          data: [0, 0, 0, 0, 0],
        },
      ],
      REC: [
        {
          name: 'Curto Prazo',
          data: [4000, 2400, 1600, 1000, 1000],
        },
        {
          name: 'Longo Prazo',
          data: [1000, 1000, 1000, 0, 0],
        },
      ],
      FPE: [
        {
          name: 'Curto Prazo',
          data: [0, 0, 0, 0, 0],
        },
        {
          name: 'Longo Prazo',
          data: [2500, 2500, 2500, 2500, 2500],
        },
      ],
    };

    this.chartOptions.series = series[this.selectedOption];
  }

  toMoney(amount: number): string {
    return this.numberFormatter.format(amount);
  }

  ngOnInit(): void {
    this.calculateInstallments();
    this.calculateIncomesAndOutcomes();
  }

  calculateInstallments(): void {
    const installments = {
      TOTAL: [13500, 9900, 7100, 3500, 3500],
      SAF: [6000, 4000, 2000, 0, 0],
      REC: [5000, 3400, 2600, 1000, 1000],
      FPE: [2500, 2500, 2500, 2500, 2500],
    };

    this.installments = this.installments.map((i, n) => ({
      ...i,
      id: `${n + 1}`,
      type: PaymentType.Income,
      amount: installments[this.selectedOption][n],
    }));
  }

  calculateIncomesAndOutcomes(): void {
    const paidAt = this.installments.filter((i) => i.paidAt);

    this.totalIncomesPaid = paidAt.reduce((c, a) => (c += a.amount), 0);
    this.totalIncomes = this.installments.reduce((c, a) => (c += a.amount), 0);
  }

  getConfirmationText(id: string, type: PaymentType): string {
    const installment = this.installments.find((i) => i.id === id);

    if (installment) {
      return `Deseja confirmar o pagamento no valor de ${this.numberFormatter.format(
        installment.amount
      )}?`;
    }

    return '';
  }

  confirm(id: string, type: PaymentType): void {
    const installment = this.installments.find((i) => i.id === id);

    if (installment) {
      installment.paidAt = new Date();
      this.confirmationId = '';

      if (type === PaymentType.Income)
        this.totalIncomesPaid += installment.amount;
    }
  }
}
