import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alignVar="end";
  loginForm!:FormGroup;
  constructor(private authService:AuthService){

  }

  ngOnInit(){
    this.loginForm= new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onSubmit(form : NgForm){
    
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })

  }

}
