import { Component } from '@angular/core';

enum PaymentType {
  Income = 'INCOME',
  Outcome = 'OUTCOME',
}

type ReportType = 'SAF' | 'REG' | 'TOTAL';

@Component({
  selector: 'view-accounting',
  templateUrl: './accounting-view.template.html',
  styleUrls: ['./accounting-view.style.scss'],
})
export class AccountingView {
  selectedOption: ReportType = 'TOTAL';
  selectOptions = [
    { label: 'Total', value: 'TOTAL' },
    { label: 'REG', value: 'REG' },
    { label: 'SAF', value: 'SAF' },
  ];

  selectOption(option: ReportType): void {
    this.selectedOption = option;
    this.calculateInstallments();
    this.calculateIncomesAndOutcomes();
  }

  numberFormatter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  });

  incomes: any[] = [];
  outcomes: any[] = [];
  confirmationId = '';

  totalIncomesPaid = 7500;
  totalIncomes = 12500;

  totalOutcomesPaid = 7500;
  totalOutcomes = 12500;

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

  chartOptions = {
    series: [
      {
        name: 'Curto Prazo',
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: 'Longo Prazo',
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    chart: {
      type: 'bar',
      height: 750,
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
      type: 'datetime',
      categories: ['2021', '2022', '2023', '2024', '2025'],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  };

  toMoney(amount: number): string {
    return this.numberFormatter.format(amount);
  }

  ngOnInit(): void {
    this.calculateInstallments();
    this.calculateIncomesAndOutcomes();
  }

  calculateInstallments(): void {
    const installments = {
      TOTAL: 6000,
      SAF: 3500,
      REG: 2500,
    };

    this.incomes = this.installments.map((i, n) => ({
      ...i,
      id: n + 1,
      type: PaymentType.Income,
      amount: installments[this.selectedOption],
    }));

    this.outcomes = this.installments.map((i, n) => ({
      ...i,
      id: n + 11,
      type: PaymentType.Outcome,
      amount: installments[this.selectedOption],
    }));
  }

  calculateIncomesAndOutcomes(): void {
    const total = {
      TOTAL: 30000,
      SAF: 10500,
      REG: 7500,
    };

    const paid = {
      TOTAL: 18000,
      SAF: 7000,
      REG: 5000,
    };

    this.totalIncomesPaid = paid[this.selectedOption];
    this.totalIncomes = total[this.selectedOption];

    this.totalOutcomesPaid = paid[this.selectedOption];
    this.totalOutcomes = total[this.selectedOption];
  }

  getConfirmationText(id: string, type: PaymentType): string {
    const installments =
      type === PaymentType.Income ? this.incomes : this.outcomes;

    const installment = installments.find((i) => i.id === id);

    if (installment) {
      const paymentType =
        installment.type === PaymentType.Income ? 'recebimento' : 'pagamento';

      return `Deseja confirmar o ${paymentType} no valor de ${this.numberFormatter.format(
        installment.amount
      )}?`;
    }

    return '';
  }

  confirm(id: string, type: PaymentType): void {
    const installments =
      type === PaymentType.Income ? this.incomes : this.outcomes;

    const installment = installments.find((i) => i.id === id);

    if (installment) {
      installment.paidAt = new Date();
      this.confirmationId = '';

      if (type === PaymentType.Income)
        this.totalIncomesPaid += installment.amount;
      else this.totalOutcomesPaid += installment.amount;
    }
  }
}
