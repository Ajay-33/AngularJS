import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  // Basic Reactive Forms, used when there are many fields, validations
  // name =new FormControl();
  // password= new FormControl()
  // visible=false;
  // handleClick(){
  //   this.visible=true
  // }

  // Form Grouping in Reactive Forms with validations
  // profileForm=new FormGroup({
  //   name:new FormControl('',[Validators.required]),
  //   email:new FormControl('abc@123.com',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
  //   password:new FormControl('',[Validators.minLength(5),Validators.required])
  // })
  // get name(){
  //   return this.profileForm.get('name')
  // }
  // get email(){
  //   return this.profileForm.get('email')
  // }
  // get password(){
  //   return this.profileForm.get('password')
  // }
  // visible=false;
  // onSubmit(){
  //   this.visible=true
  // }

  // Template Driven Forms
  userDetails:any
  addDetails(val:NgForm){
    this.userDetails=val
  }
  // Validations in template driven forms
  // i.e in template driven forms, validations nd all are in html form
  
}
