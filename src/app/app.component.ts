import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { CounuterComponent } from './counuter/counuter.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent, ProfileComponent,CounuterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // these are class properties not variables
  title = 'Ajay Dornaala';
  // name = "Emo"
  // x=20
  // // Generally we dont take variables but can initialize varibles inside a function like:
  // // hello(){
  // //   let x=20;
  // // }
  // handleClickSomething(){
  //   this.otherFunction();
  //   console.log("HIe"); 
  // }
  // otherFunction(){
  //   console.log("Bye");
  // }

  // naam:string="Ajay"
  // // let naame="Ajay" willgive error coz we cant use let, var or const 

  // nume="Hello My naam"
  // data:string|number="Emo"
  // other:any = 99
  // // You can literally use any data type like js if used any
  // updateName(){
  //   // this.nume=10;
  //   // // still will give error coz this nume is automatically taking string var type in ts,its smart
  //   this.data=10
  //   // No error here
  //   // this.sum(5,"Anil") will give error
  // }

  // sum(a:number,b:number){
  //   alert(a+b)
  // }

  // handleClick(event:Event){
  //   console.log(event);
  //   console.log("value",(event.target as HTMLInputElement).value);
    
  // }
  // name=""
  // displayname=""
  // getName(event:any){
  //   this.name=event.target.value
  //   // console.log(this.name);
  // }
  // nameDisplay(){
  //   this.displayname=this.name
  // }
  // EmailDisplay(email:string){
  //   console.log(email);
    
  // }

  // display=true
  // x=10
  // color='red'

  users=["Ajay","bunny","me"]


}
