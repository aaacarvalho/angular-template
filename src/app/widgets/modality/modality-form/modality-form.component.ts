import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'widget-modality-form',
  templateUrl: './modality-form.template.html',
  styleUrls: ['./modality-form.style.scss'],
})
export class ModalityFormWidget {
  modalityForm = new FormGroup({
    areaPlanejada: new FormControl(),
  });

  modalityOptions = [
    {
      label: 'REC',
      value: 'rec',
    },
    {
      label: 'REG',
      value: 'reg',
    },
    {
      label: 'SAF',
      value: 'saf',
    },
  ];

  arrangementOptions = [
    {
      label: 'CAN',
      value: 'can',
    },
    {
      label: 'BCN',
      value: 'bcn',
    },
  ];

  hydroOptions = [
    {
      label: 'NA',
      value: 'na',
    },
    {
      label: 'Perene',
      value: 'perene',
    },
    {
      label: 'Intermediário(a)',
      value: 'intermediario',
    },
    {
      label: 'Efêmero(a)',
      value: 'efemero',
    },
  ];
}
