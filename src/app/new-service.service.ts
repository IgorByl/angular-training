import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class NewServiceService {
  userName: string = '';
  responce: any;

  constructor(private http: HttpClient) {}

  consoleText(arg) {
    console.log(arg);
  }

  search() {
    return this.http
      .get<IEmployee[]>('https://api.github.com/users/' + this.userName)
      .subscribe(res => {
        this.responce = res;
        console.log(this.responce);
      });
  }
}
