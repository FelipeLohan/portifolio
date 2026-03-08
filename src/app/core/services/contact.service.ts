import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { ContactDto } from '../models/contact.model';
import { environment } from '../../../environments/environment';

export type ContactStatus = 'idle' | 'loading' | 'success' | 'error';

const API_URL = `${environment.apiUrl}/customers`;

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  readonly status = signal<ContactStatus>('idle');
  readonly errorMessage = signal<string | null>(null);

  send(dto: ContactDto) {
    this.status.set('loading');
    this.errorMessage.set(null);

    return this.http.post(API_URL, dto).pipe(
      tap(() => this.status.set('success')),
      catchError((err: HttpErrorResponse) => {
        const message =
          err.status === 0
            ? 'Sem conexão com o servidor. Tente novamente mais tarde.'
            : err.error?.message ?? 'Ocorreu um erro inesperado. Tente novamente.';
        this.status.set('error');
        this.errorMessage.set(message);
        return throwError(() => err);
      }),
    );
  }

  reset(): void {
    this.status.set('idle');
    this.errorMessage.set(null);
  }
}
