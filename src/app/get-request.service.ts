import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetRequestService {
  constructor() {}

  getEmploeers() {
    return [
      { id: 1, name: 'Vasia', age: 30 },
      { id: 2, name: 'Svetic', age: 23 },
      { id: 3, name: 'Kolia', age: 14 },
    ];
  }
}
