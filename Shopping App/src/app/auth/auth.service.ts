import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { loginForm, registerForm } from '../Interface/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean=false;
  isLoading:boolean=false;
  passwordMatched:boolean=true;

  constructor(private router:Router) { }

  login(form:loginForm){
    if(this.isLoading) return;
    this.isLoading=true;
    const auth=getAuth();
    signInWithEmailAndPassword(auth,form.email,form.password)
    .then((userCredentails)=>{
      // const user=userCredentails.user;
      console.log(userCredentails);
      this.isAuthenticated=true;
      this.router.navigate([''])
    })
    .catch((error)=>{
      const errorCode=error.Code;
      const errorMessage=error.message;
      this.isAuthenticated=false
    })
    .finally(()=>(this.isLoading=false));
  }


  register(form:registerForm){
    if(this.isLoading) return;
    this.isLoading=true;
    
    if(form.password != form.confirmedPassword)
    {
      this.passwordMatched=false;
      return;
    }

    const auth=getAuth();
    createUserWithEmailAndPassword(auth,form.email,form.password)
    .then((userCredentails)=>{
      // const user=userCredentails.user;
      console.log(userCredentails);
      this.isAuthenticated=true;
    })
    .catch((error)=>{
      this.isAuthenticated=true;
      const errorCode=error.Code;
      const errorMessage=error.message;
    })
    .finally(()=>(this.isLoading=false));

  }
  logout(){
    const auth=getAuth();
    signOut(auth).then(()=>{
        this.router.navigate(['login'])
        this.isAuthenticated=false;
    })
    .catch((error)=>{

    });
  }
}
