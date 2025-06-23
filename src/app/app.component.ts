import { ProductService } from './services/product.service';
import { UserComponent } from './user/user.component';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { CounuterComponent } from './counuter/counuter.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConverterPipe } from './pipes/converter.pipe';
import { Product, ProductResponse } from './interfaces/Product';

@Component({
  selector: 'app-root',
  imports: [ConverterPipe,CommonModule,UserComponent,RouterOutlet,HeaderComponent,FormsModule,LoginComponent, SignupComponent, ProfileComponent,CounuterComponent,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // these are class properties not variables
  title = 'Ajay Dornaala';
  // userName="Ajay Ajju"
  // onUserChange(user:any){
  //   this.userName=user
  // }
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

  // users=["Ajay","bunny","me"]

  // count=signal(10);
  // x=20;
  // constructor(){
  //   effect(()=>{
  //     console.log(this.x);
  //     console.log(this.count())
  //     // We can track this.count, but not this.x i.e we cannot track regular properties/variables effect but can track signals

  //   })
  // }
  // updateValue(){
  //   this.x++;
  //   this.count.set(this.count()+1)
  // }
  // data=signal(10);
  // updateSignal(){
  //   // this will give error
  //   this.data.set("Hello")
  // }
  // defining data type of signal's value
  // data=signal<number|string>(10);
  // updateSignal(){
  //   // this will not give error
  //   this.data.set("Hello")
  // }
  // defining signals data type and signal's value data type
  // temp:WritableSignal<number|string>=signal(10);

  // // Read only, cannot be changed/updated
  // count:Signal<number>=computed(()=>10)
  // updateVal(){
  //   // Used only when one type of data type in signal
  //   this.data.update((val)=>val+1)
  // }

  // Computed Signals i.e. we cannot change the values forecefully, but their dependancies change then they might get change

  // x=10;
  // y=20;
  // z=this.x+this.y;  
  // showValue(){
  //   console.log(this.z);
  //   this.x=50;
  //   // Need updated value, but willl get old value of z only..so need of signals
  //   console.log(this.z);
  // }

  // x=signal(10);
  // y=signal(20);
  // z=computed(()=>this.x()+this.y());

  // showValue(){
  //   console.log(this.z());
  //   this.x.set(this.x()+20);
  //   console.log(this.z());
  // }
  // this z is read only, cannot be changed directly using set or updated as regualr signals
  // i.e using dependancies we are able to update z

  // Effect in Anygular

  // Function inside constructor, which gets indication whenevr signal gets updated
  // x=signal("Ajay")
  // display=false
  // // Called while initialization
  // constructor(){
  //   effect(()=>{
  //     console.log(this.x());
  //     if(this.x()=="Bunny"){
  //       this.display=true;
  //       setTimeout(() => {
  //         this.display=false;
  //       }, 2000);
  //     }
  //     else{
  //       this.display=false;
  //     }
  //   })
  // }

  // Contextual variables: variables avaiilbale inside a for loop
  // users=["Ajay","bunny","me","Hella","Thor"]

  // Two-Way Binding: Binnding ts and html together so that they remain in sync
  // name="Ajay"
  // Manual way of 2-way binding
  // changeName(event:any){
  //   const val=(event.target as HTMLInputElement).value
  //   this.name=val;
  // }
  
  // Dynamic Styling in Angular is in Profile Componet
  // Directive also in Profile Component
  // Routing in Angular in hEader component most and counter+login component
  // Dynamic Routing: different data in same url like getting profile info with /profile but diff profiles
  // like /user/id or /user/name
  // implemented in profile section

  // Forms in Angular: Reactive and Template Driven
  // Reactive are more scalable,reuable and testable - used for complex forms
  // Reactive is synchronous,structured,immutable Template driven is async,unstructured,mutable

  // Present in Forms Component

  // Pass child to parent data
  // users:undefined|String[];
  // handleUsers(users:String[]){
  //   console.log(users);
  //   this.users=users;
  // }

  // Pipes in Angular, to streamline many functions with specific template
  // heading="learning data scirence"
  // date=new Date()
  // amount=10

  // Custom pipes ng g pipe pipes/converter
  amount=10

  // Life-Cycle Methods in Angular
  // constructor->life-cycle methods
  // constructor (Creation Phase)
  // ngOnInit,ngOnChanges (Change Detection)
  // afterRender (Rendering)
  // ngOnDestroy (Destroying)
  // Inside Signup Component


  // Services provide a way to see app data and dfunctions that can be used in multiple components in your app
  // productData:any
  // constructor(private productService:ProductService ){

  // }
  // getProductData(){
  //   this.productData=this.productService.getData()
  // }
  constructor(private productService:ProductService){

  }
  productData:Product[]=[]
  ngOnInit(){
    // subscribe- to handle async daata
    this.productService.getProductList().subscribe((res: ProductResponse)=>{
      this.productData=res.products
    })
  }
  // Interfaces are feature of .ts that allow us to define the structure or data type
}
