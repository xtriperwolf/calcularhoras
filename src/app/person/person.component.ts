import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {  
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jeffersn Vinueza', weight: "jvinueza@gmail.com", symbol: '0987654321'},
  {position: 2, name: 'Juan Armendia', weight: "jarmendi@gmail.com", symbol: '10192738193'},
  {position: 3, name: 'LiLi Arco',  weight: "larco@gmail.com", symbol: '09212837189'},
  {position: 4, name: 'Betty Carson',weight: "bcarson@gmail.com", symbol: '09187912834'},
  {position: 5, name: 'Alex Sintex',weight: "asintex@gmail.com", symbol: '0923489283'},
  {position: 6, name: 'Juan Pedro',weight: "jpedro@gmail.com", symbol: '09281739283'},
];


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  username: string;
  
  cedula: string;
  numero: string;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() { }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';  
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}