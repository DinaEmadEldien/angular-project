import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { passwordMatchValidator } from 'src/app/CustomValidations/passwordMatch';
import { forbiddenNameValidator } from 'src/app/CustomValidations/UserNameValidator';
import { IUser } from 'src/app/Models/iuser';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userRegisterFormGroup: FormGroup;
  NewUser:IUser={'userName':'','password':'','email':''}


  constructor(private fb: FormBuilder,private router:Router,private httpClient:HttpClient,private authService:AuthServiceService) {

    this.userRegisterFormGroup = fb.group({
      // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      // mobileNo: fb.array([fb.control('')]),
      // address: fb.group({
      //   street: [''],
      //   postalCode: [''],
      // }),
      password: [''],
      // confirmPassword: [''],
      // reachedBy: [''],
      // reachedByOther: [''],
    }, { validators: passwordMatchValidator });
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.userRegisterFormGroup.controls['userName'];
  }

  // get mobileNoArr(): FormArray {
  //   return this.userRegisterFormGroup.controls['mobileNo'] as FormArray;
  // }

  // get reachedBy() {
  //   return this.userRegisterFormGroup.controls['reachedBy'];
  // }

  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }

  // get confirmPassword() {
  //   return this.userRegisterFormGroup.controls['confirmPassword'];
  // }

  // addMobile() {
  //   this.mobileNoArr.push(this.fb.control(''));
  // }

  // updateReachedOtherValidaiton() {
  //   if (this.reachedBy.value == "Other")
  //     this.userRegisterFormGroup.controls['reachedByOther'].setValidators([Validators.required]);
  //   else
  //     this.userRegisterFormGroup.controls['reachedByOther'].clearValidators();

  //   this.userRegisterFormGroup.controls['reachedByOther'].updateValueAndValidity();
  // }

  register() {
    // Call API, send this.userRegisterFormGroup.value;

    console.log(this.userRegisterFormGroup.value);

    this.NewUser.userName=this.userRegisterFormGroup.value.userName;
    this.NewUser.email=this.userRegisterFormGroup.value.email;
    this.NewUser.password=this.userRegisterFormGroup.value.password;

    this.authService.Register(this.NewUser)
    .subscribe(user=>{
      this.router.navigate(['/Login']);
    });


  }

}
