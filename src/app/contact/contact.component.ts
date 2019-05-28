import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  private formInputUnderlines: HTMLCollectionOf<HTMLDivElement>;
  private formInputLabels: HTMLCollectionOf<HTMLLabelElement>;
  private formFieldRipples: HTMLCollectionOf<HTMLSpanElement>;

  contactForm: FormGroup = this.fb.group({
    name: '',
    email: '',
    mobile: '',
    message: '',
    terms: true
  });

  sendMessage() {}

  changeFormUnderlineColor() {
    this.formInputUnderlines = document.getElementsByClassName(
      'mat-form-field-underline'
    ) as HTMLCollectionOf<HTMLDivElement>;
    for (const input of Array.from(this.formInputUnderlines)) {
      input.style.backgroundColor = '#bfbfbf';
    }
  }

  changeFormLabelColor() {
    this.formInputLabels = document.getElementsByClassName(
      'mat-form-field-label'
    ) as HTMLCollectionOf<HTMLLabelElement>;
    for (const input of Array.from(this.formInputLabels)) {
      input.style.color = '#bfbfbf';
    }
  }

  changeRippleColor() {
    this.formFieldRipples = document.getElementsByClassName(
      'mat-form-field-ripple'
    ) as HTMLCollectionOf<HTMLSpanElement>;
    for (const input of Array.from(this.formFieldRipples)) {
      input.style.backgroundColor = 'orange';
    }
  }

  constructor(private fb: FormBuilder) {}

  ngAfterViewInit() {
    this.changeFormUnderlineColor();
    this.changeFormLabelColor();
    this.changeRippleColor();
  }
}
