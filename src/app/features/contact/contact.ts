import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';
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
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
  });

  readonly messageLength = toSignal(
    this.form.controls.message.valueChanges.pipe(map(v => v.length)),
    { initialValue: 0 },
  );

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, phone, message } = this.form.getRawValue();
    const dto = phone?.trim()
      ? { name, email, phone: phone.trim(), message }
      : { name, email, message };

    this.contactService.send(dto).subscribe({
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
