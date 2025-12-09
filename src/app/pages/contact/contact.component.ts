import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  success = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      reason: ['partnership', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.success = false;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    // Simulazione invio demo
    setTimeout(() => {
      this.loading = false;
      this.success = true;

      // Qui potresti integrare un vero servizio HTTP/email in futuro
      console.log('Contact demo payload:', this.form.value);
    }, 800);
  }
}
