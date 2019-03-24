import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';

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
  constructor(svc: NewServiceService) {
    svc.consoleText('Awesome Angular!');
  }
}
