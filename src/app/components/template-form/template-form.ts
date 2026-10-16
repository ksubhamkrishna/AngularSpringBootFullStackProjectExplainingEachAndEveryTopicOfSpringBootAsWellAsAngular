import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,NgIf],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  userObj: any = {
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    agreeToTermsAndConditions: false
  }

  onSave() {

    const formValue = this.userObj;
  }

}
