import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],

})
export class FormUserComponent {

  tipoDeDocumento = ["Documento Nacional de Identidad (DNI)","Carnet de Extranjeria"];

  stepListTitte = [{tittle:"Datos Personales",percentage:10},
  {tittle:"Datos Personales Complementarios",percentage:20},
  {tittle:"Datos Familiares",percentage:30},
  {tittle:"Datos De Formación",percentage:40},
  {tittle:"Documentos Demograficos",percentage:50} ]

  firstFormGroup = this._formBuilder.group({
    doc_type: ['', Validators.required],
    doc_num: ['', Validators.required],
    doc_country: ['', Validators.required],
    first_name: ['', Validators.required],
    second_name: ['', Validators.required],
    third_name: ['', Validators.required],
    fourth_name: ['', Validators.required],
    last_name1: ['', Validators.required],
    last_name2: ['', Validators.required],
    civil_status: ['', Validators.required],
    gender: ['', Validators.required],
    nationality: ['', Validators.required],
    email: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

    @ViewChild('form_stepper')stepper!: MatStepper;
    @ViewChild('form_lateral')stepperL!: MatStepper;

    /*PreviousStep(stepper: MatStepper) {
      const previousStepIndex = this.stepper.selectedIndex - 1;
      if (previousStepIndex >= 0) {
        this.stepper.selectedIndex = previousStepIndex;
      }
    }

    GoBack(){
      this.PreviousStep(this.stepper);
      this.PreviousStep(this.stepperL);
    }*/
    
    goToPreviousStep() {
      const previousStepIndex = this.stepper.selectedIndex - 1;
      if (previousStepIndex >= 0) {
        this.stepper.selectedIndex = previousStepIndex;
      }
      this.goToPreviousStep2();
    }

    goToPreviousStep2() {
      const previousStepIndex = this.stepperL.selectedIndex - 1;
      if (previousStepIndex >= 0) {
        this.stepperL.selectedIndex = previousStepIndex;
      }
    }

    goToNextStep() {
      const nextStepIndex = this.stepper.selectedIndex + 1;
      if (nextStepIndex < this.stepper.steps.length) {
        this.stepper.selectedIndex = nextStepIndex;
      }
      this.goToNextStep2();
    }

    goToNextStep2() {
      const nextStepIndex = this.stepperL.selectedIndex + 1;
      if (nextStepIndex < this.stepperL.steps.length) {
        this.stepperL.selectedIndex = nextStepIndex;
      }
    }

  get name() { return this._formBuilder.control('first_name');}
}
