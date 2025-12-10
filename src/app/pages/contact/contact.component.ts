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

    const { name, email, reason, message } = this.form.value;

    // Oggetto e corpo della mail (semplice, ma efficace)
    const subject = encodeURIComponent(`HSM – Richiesta di contatto (${reason})`);
    const body = encodeURIComponent(
      `Nome: ${name}\n` +
        `Email: ${email}\n` +
        `Motivo: ${reason}\n\n` +
        `Messaggio:\n${message}\n`
    );

    // Apre il client email dell'utente
    window.location.href = `mailto:irondaryl@proton.me?subject=${subject}&body=${body}`;

    // Finto stato "ok" lato UI
    setTimeout(() => {
      this.loading = false;
      this.success = true;
    }, 400);
  }
}
