import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MatDialog} from '@angular/material/dialog';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'Amparo' && this.password == 'Amparo'){
     this.router.navigate(["/person"]);
    }else {
      alert("Credencilaes invalidas");
    }
  }
  }