import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {  
  name: string;
  position: number;
  fecha: string;
  hora: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jeffersn Vinueza', fecha: "15/03/2020", hora: '10:00'},
  {position: 2, name: 'Juan Armendia', fecha: "15/03/2020", hora: '10:00'},
  {position: 3, name: 'LiLi Arco',  fecha: "15/03/2020", hora: '10:00'},
  {position: 4, name: 'Betty Carson',fecha: "15/03/2020", hora: '10:00'},
  {position: 5, name: 'Alex Sintex',fecha: "15/03/2020", hora: '10:00'},
  {position: 6, name: 'Juan Pedro',fecha: "15/03/2020", hora: '10:00'},
];


@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css']
})
export class PermisoComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }
  username: string;
  fecha: string;
  cedula: string;
  numero: string;
  displayedColumns: string[] = ['position', 'name', 'fecha', 'hora'];
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
