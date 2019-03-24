import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  // templateUrl: './not-found.component.html',
  template: `<h3>Error 404: Page do not found!</h3>`,
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
