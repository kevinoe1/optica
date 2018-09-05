import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
 
export interface IMessage {
  name?: string,
  email?: string,
  message?: string,
  telefono?: string,
  direccion?: string
}
 
@Injectable()
export class AppService {
  private emailUrl = 'http://localhost:8888/optica/mail.php';
 
  constructor(private http: Http) {
 
  }
 
  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message).pipe(
      map(response => {
      console.log('Sending email was successfull', response);
      return response;
    }),
    catchError(error => {
      console.log('Sending email got error', error);
      return Observable.throw(error)
    }))
  }
}