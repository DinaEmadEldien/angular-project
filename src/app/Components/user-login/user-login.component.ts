import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  // isUserLogged:boolean=false;

  invalidLogin:boolean=false;
  credentials: any = {UserNAme:'', PAssword:''};

  constructor(private authService:AuthServiceService,
              private httpClient:HttpClient,
              private router:Router
    ) { }

  ngOnInit(): void {
    // this.isUserLogged=this.authService.isUserLogged;
  }

  // login()
  // {
  //   this.authService.login('userName','password');  //should recieve this from form
  //   this.isUserLogged=this.authService.isUserLogged;
  // }

  // logout()
  // {
  //   this.authService.logout();
  //   this.isUserLogged=this.authService.isUserLogged;
  // }

  login(form:NgForm){
    const credentials={
      'UserNAme':form.value.UserNAme,
      'PAssword':form.value.PAssword
    }

    this.httpClient.post("http://localhost:9964/api/Account/Login", this.credentials).subscribe(response=>
    {
      const token=(<any>response).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin=false;
      this.router.navigate(['/Home']);
    },err=>{
      this.invalidLogin=true;
    })
  }

}
