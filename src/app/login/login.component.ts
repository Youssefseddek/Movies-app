import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup =new FormGroup({

    
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][A-Za-z0-9]{8,16}$/)]),

 
 
   })
   errorMessage:string=''
   isLoading:boolean=false

 
   constructor(private _AuthService:AuthService ,private _Router:Router) { }
 
   ngOnInit(): void {
   }
 
 
   submitLoginFormForm(loginForm:FormGroup){
 
     this.isLoading=true
 
 
     console.log(loginForm.value)
     this._AuthService.signin(loginForm.value).subscribe((response)=>{
       console.log(response)
       if (response.message == 'success') {
 
         // navigate to login Home
         this.isLoading=false
         localStorage.setItem('userToken',response.token)
         this._AuthService.saveUserData()
         this._Router.navigate(['/home'])
       }
       else{
         this.errorMessage = response.message
         this.isLoading=false
         // 'email already exist'
       }
     })
     }
   

}
