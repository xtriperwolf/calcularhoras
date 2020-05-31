import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {  
  name: string;
  position: number;
  weight: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jeffersn Vinueza', weight: 1.0079},
  {position: 2, name: 'Juan Armendia', weight: 4.0026},
  {position: 3, name: 'LiLi Arco', weight: 6.941},
  {position: 4, name: 'Betty Carson', weight: 9.0122},
  {position: 5, name: 'Alex Sintex', weight: 10.811},
  {position: 6, name: 'Juan Pedro', weight: 12.0107},
 
];

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  username: string;
  
  cedula: string;
  numero: string;
  displayedColumns: string[] = ['position', 'name', 'weight'];
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