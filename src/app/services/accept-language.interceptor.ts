import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { LanguageService } from './language.service';

/** Sends the UI language so the backend answers errors and notifications in it. */
export const acceptLanguageInterceptor: HttpInterceptorFn = (request, next) => {
  if (!request.url.startsWith(environment.apiBaseUrl)) return next(request);
  const language = inject(LanguageService).current();
  return next(request.clone({ setHeaders: { 'Accept-Language': language } }));
};
