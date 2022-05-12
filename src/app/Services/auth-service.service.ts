import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedSubject:BehaviorSubject<boolean>
  newUser:IUser={'userName':'','password':'','email':''};

  private httpOptions;


  constructor(private httpClient:HttpClient,private router:Router) {
    this.isLoggedSubject=new BehaviorSubject<boolean>(this.isUserLogged);

    this.httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"application/json"   //Headers data
        ,"Authorization":"token"
      }

      )
    }
  }

  login(userName:string,password:string)
  {
    //call login api ,and get access token
    let userToken="12345";
    localStorage.setItem("token",userToken);
    this.isLoggedSubject.next(true);

  }

  logout()
  {
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);


  }

  get isUserLogged():boolean
  {
    return (localStorage.getItem('token'))?true:false;
  }

  getLoggedStatus()
  {
    return this.isLoggedSubject.asObservable();
  }
///////////////////////////////////////////////////////////////////////////////////////////////
  Register(newUser:IUser): Observable<IUser>
  {
    return this.httpClient.post<IUser>(`${environment.ApiBaseUrl}/api/Account/Register`, JSON.stringify(newUser),this.httpOptions);
  }
}
