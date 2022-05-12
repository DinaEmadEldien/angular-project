import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLogged:boolean=false;

  constructor(//private authService:AuthServiceService,
                private router:Router,
                private jwtHelper:JwtHelperService
  ) {
    //this.isUserLogged=this.authService.isUserLogged;

  }

  ngOnInit(): void {
    // this.isUserLogged=this.authService.isUserLogged;
    // this.authService.getLoggedStatus().subscribe(status=>{
    //   this.isUserLogged=status;
    // })
  }

  isUserAuthanticated(){
    const token:string|null=localStorage.getItem("jwt");
    if(token&& !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else{
      return false;
    }
  }

  logout()
  {
    localStorage.removeItem("jwt");
    this.router.navigate(["/Login"]);
    alert("successfully Logout...");
  }

}
