import { AuthService } from './../Service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formValue!:FormGroup
  constructor(private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {

      this.formValue = this.fb.group({
          first_name : new FormControl("",[Validators.required]),
          last_name : new FormControl("",[Validators.required]),
          email : new FormControl("",[Validators.email,Validators.required]),
          password : new FormControl("",[Validators.required])

      })
  }

  onSubmit() {
    console.log(this.formValue.value)
    this.authService.register(this.formValue.value.email,this.formValue.value.password)


  }
}
