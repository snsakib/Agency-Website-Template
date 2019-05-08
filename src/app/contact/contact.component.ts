import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup = this.fb.group({
    name: '',
    email: '',
    mobile: '',
    message: '',
    terms: true
  });

  sendMessage() {}

  constructor(private fb: FormBuilder) {}
}
