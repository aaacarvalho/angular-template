import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'widget-producer-form',
  templateUrl: './producer-form.template.html',
  styleUrls: ['./producer-form.style.scss'],
})
export class ProducerFormWidget {
  producerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    cpf: new FormControl(),
    rg: new FormControl(),
    orgao: new FormControl(),
    emissao: new FormControl(),
    nascimento: new FormControl(),
    ocupacao: new FormControl(),
    estadoCivil: new FormControl(),
    gender: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    city: new FormControl(),
    neighborhood: new FormControl(),
    comunity: new FormControl(),
    zipcode: new FormControl(),
    uf: new FormControl(),
  });

  onSubmit() {
    console.log(this.producerForm.value);
  }
}
