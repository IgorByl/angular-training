import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../get-request.service';

@Component({
  selector: 'app-my-new',
  templateUrl: './my-new.component.html',
  styleUrls: ['./my-new.component.less'],
})
export class MyNewComponent implements OnInit {
  public employees: Array<object>;
  time: string;
  items: string[];
  loggedIn: boolean = true;
  text: string = 'Hello!';
  isVisible: boolean = false;
  constructor(private employeeService: GetRequestService) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
    this.items = ['Angular', 'React', 'Node.js', 'Vue'];
    this.employees = this.employeeService.getEmploeers();
  }

  toggleCollapse() {
    this.loggedIn = !this.loggedIn;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  addLib(value) {
    this.items.push(value);
  }
}
