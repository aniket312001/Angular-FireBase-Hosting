import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  register(email:any,password:any){
    firebase.auth().createUserWithEmailAndPassword(email,password).then((user:any)=>{
      console.log(user)
      this.route.navigateByUrl("/home")
    }).catch((e:any)=>{
      console.log(e)
    })
  }

  login(email:any,password:any){
    firebase.auth().signInWithEmailAndPassword(email,password).then((user:any)=>{
      console.log(user)
      this.route.navigateByUrl("/home")
    }).catch((e:any)=>{
      console.log(e)
    })
  }

  Oauth() {
    const provider  = new firebase.auth.GoogleAuthProvider()
    console.log(provider)

    firebase.auth().signInWithPopup(provider).then(data=>{
      console.log(data)
      this.route.navigateByUrl("/home")
    }).catch(e=>{
      console.log(e)
    })

  }

}
