import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title: string = 'My First Angular App!';

  // navList: object = {
  //   '': 'Main',
  //   '/news': 'News',
  //   '/prise': 'Prise',
  //   '/about': 'About',
  // };
  userName: string = '';
  responce: any;
  constructor(svc: NewServiceService, private http: HttpClient) {
    svc.consoleText('Awesome Angular!');
  }
  search() {
    this.http
      .get('https://api.github.com/users/' + this.userName)
      .subscribe((res) => {
        this.responce = res;
        console.log(this.responce);
      });
  }
}
