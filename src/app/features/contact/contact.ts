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
    telephoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
    message:         ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
  });

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
