import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Route } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { AuthService } from '../auth.service';

export interface CountryGroup{
  letter: string;
  names: string[];
}

export const _filter=(opt:string[],value:string):string[]=>{ 
  const filterValue=value.toLowerCase();
  return opt.filter(item => item.toLowerCase().includes(filterValue));  
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  alignVar="end";
  maxDate;
  signupForm :FormGroup;
 countryName = new FormControl()
  
  countries: string[]=['France', 'India', 'USA', 'Germany', 'Japan','Ireland','UK','Australia', 'Canada'];
  
  countryGroupOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.signupForm = new FormGroup ({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'birthday': new FormControl('Birthday'),
      'chkbox'  : new FormControl('Agreed'),
      

    })
    this.maxDate= new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.countryGroupOptions = this.countryName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
  }
  constructor(public dialog: MatDialogModule, private formBuilder:FormBuilder, private authService: AuthService){}
  onSubmit(){
    console.log(this.signupForm.value);
    console.log(this.countryName.value);
    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    });
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => 
       country.toLowerCase().includes(filterValue));
  }
 
}





