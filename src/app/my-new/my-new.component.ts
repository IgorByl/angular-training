import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new',
  templateUrl: './my-new.component.html',
  styleUrls: ['./my-new.component.less'],
})
export class MyNewComponent implements OnInit {
  time: string;
  items: string[] = ['Angular', 'React', 'Node.js', 'Vue'];
  loggedIn: boolean = true;
  text: string = 'Hello!';
  isVisible: boolean = false;
  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  toggleCollapse() {
    this.loggedIn = !this.loggedIn;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {}
}
