import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup =new FormGroup({

   first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
   last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
   email:new FormControl(null,[Validators.required,Validators.email]),
   password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z0-9]{8,16}$/)]),
   age:new FormControl(null,[ Validators.required,Validators.min(16),Validators.max(66)])


  })
  errorMessage:string=''
  isLoading:boolean=false

  constructor(private _AuthService:AuthService ,private _Router:Router) { }

  ngOnInit(): void {
  }


  submitRegisterForm(registerForm:FormGroup){

    this.isLoading=true


    console.log(registerForm.value)
    this._AuthService.signup(registerForm.value).subscribe((response)=>{
      console.log(response)
      if (response.message == 'success') {

        // navigate to login Home
        this.isLoading=false
        this._Router.navigate(['/login'])
      }
      else{
        this.errorMessage = response.message
        this.isLoading=false
        // 'email already exist'
      }
    })
    }
  

}
