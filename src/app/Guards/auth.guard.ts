import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(//private AuthService:AuthServiceService,
              private router:Router,
              private jwtHelper:JwtHelperService

    ){

  }
  canActivate()
  {
    // if(this.AuthService.isUserLogged)
    // {
    //   return true;
    // }
    // else
    // {
    //   alert("You must login first...");
    //   this.router.navigate(['/Login']);
    //   return false;
    // }

    const token=localStorage.getItem("jwt");
    if(token&& !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else
    {
      this.router.navigate(["/Login"]);
      alert("You must login first...");
    }
    return false;


  }

}
