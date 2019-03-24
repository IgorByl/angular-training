import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title: string = 'My First Angular App!';
  navList: Navigation;

  constructor(svc: NewServiceService) {
    svc.consoleText('Awesome Angular!');
    this.navList = {
      '': 'Main',
      '/news': 'News',
      '/prise': 'Prise',
      '/about': 'About',
    };
  }
}

interface Navigation {
  '': string;
  '/news': string;
  '/prise': string;
  '/about': string;
}
