import {Injectable} from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class LoaderService {
  // A BehaviorSubject is an Observable with a default value
  public isLoading = new BehaviorSubject(false);

  constructor() {
  }
}


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.isLoading.next(true);

    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({headers: request.headers.set('x-access-token', token)});
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loaderService.isLoading.next(false);
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.loaderService.isLoading.next(false);
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        console.log(data);
        return throwError(error);
      })
    );
  }
}


