import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionTitle],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  readonly contactService = inject(ContactService);

  readonly form = this.fb.nonNullable.group({
    name:            ['', [Validators.required, Validators.minLength(2)]],
    email:           ['', [Validators.required, Validators.email]],
    telephoneNumber: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    message:         ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
  });

  formatPhone(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 11);

    // display: (81) 90000-0000
    let display = digits;
    if (digits.length > 7) {
      display = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 2) {
      display = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    this.form.controls.telephoneNumber.setValue(digits, { emitEvent: false, emitModelToViewChange: false });
    input.value = display;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, telephoneNumber, message } = this.form.getRawValue();
    this.contactService.send({ name, email, telephoneNumber, message }).subscribe({
      error: () => { /* tratado no service */ },
    });
  }

  onReset(): void {
    this.form.reset();
    this.contactService.reset();
  }

  isInvalid(field: keyof typeof this.form.controls): boolean {
    const ctrl = this.form.controls[field];
    return ctrl.invalid && ctrl.touched;
  }
}
