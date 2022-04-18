<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router } from '@angular/router';
||||||| 0fcdbe12
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeServiceService } from '../company-representative-service/company-representative-service.service';
=======
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { observable } from 'rxjs';
import { CompanyRepresentativeService } from '../company-representative-service/company-representative-service.service';
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121

@Component({
  selector: 'graduates-company-representative-mock-login-page',
  templateUrl: './company-representative-mock-login-page.component.html',
  styleUrls: ['./company-representative-mock-login-page.component.scss']
})
<<<<<<< HEAD
export class CompanyRepresentativeMockLoginPageComponent {
  constructor(private _router: Router) { }
||||||| 0fcdbe12
export class CompanyRepresentativeMockLoginPageComponent implements OnInit{
  formdata!: FormGroup;
  result = <any>observable;
  constructor(private _router: Router, private API : CompanyRepresentativeServiceService) {
  }

  ngOnInit() {
    this.formdata = new FormGroup({
       email: new FormControl(""),
       password: new FormControl("")
    });
  }
=======
export class CompanyRepresentativeMockLoginPageComponent {
  formdata!: FormGroup;
  result = <unknown> observable;

  constructor(private _router: Router, private API : CompanyRepresentativeService) {
    this.formdata = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,}$") ])
    });
  }
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121

<<<<<<< HEAD
  navigateToFirst() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }
||||||| 0fcdbe12
  navigateToFirst() {
    this._router.navigate(['CompanyRepresentativeHome'])
  }

  alertBox(){
    alert("Incorrect Details, Try Again!");
  }

  submit(formdata: { email: string; password: string; }){
    this.result = this.API.login(formdata.email, formdata.password).subscribe({
      next: (item) => {
        if (item.data != null){
          console.log(item);
          this.navigateToFirst();
        }else{
          this.alertBox();
        }
      },
     error: (err) => { console.log(err); }
    });
  }
=======
  submit(formdata: { email: string; password: string; }){
    if(this.formdata.valid) {
      this.result = this.API.login(formdata.email, formdata.password).subscribe({
        next: (item) => {
          if (item.data != null){
            localStorage.setItem("id", item.data.login.id);
            this._router.navigate(['CompanyRepresentativeHome'], {state: {id: item.data.login.id}, queryParamsHandling: "preserve"});
          }else{
            alert("Incorrect Details, Try Again!");
          }
        },
      error: (err) => { console.log(err); }
      });
    }
  }
>>>>>>> 47d81b5cd23036d60776e518bea209416d577121
}
