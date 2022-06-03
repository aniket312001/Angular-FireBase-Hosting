import { AuthService } from './../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fromValue!:FormGroup
  constructor(private fb:FormBuilder,private route: Router,private authService:AuthService) { }

  ngOnInit(): void {

      this.fromValue = this.fb.group({
          email : new FormControl("",[Validators.email,Validators.required]),
          password : new FormControl("",[Validators.required])
      })
  }

  onSubmit() {
    console.log(this.fromValue.value)
    this.authService.login(this.fromValue.value.email,this.fromValue.value.password)
    // this.route.navigateByUrl("/home")
  }

  oauth(){
    this.authService.Oauth()
  }
}
