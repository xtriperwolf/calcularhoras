import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';

import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showFiller = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() : void {
     this.router.navigate(["/login"]);
     
     alert("Esta seguro");
  }
  person() : void {
    this.router.navigate(["/person"]);
    
 }
 permiso() : void {
  this.router.navigate(["/permiso"]);
  
}
ubicacion() : void {
  this.router.navigate(["/ubicacion"]);
  
}
reporte() : void {
  this.router.navigate(["/reporte"]);
  
}
}
