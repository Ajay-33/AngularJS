import { Component } from '@angular/core';

@Component({
  selector: 'app-counuter',
  imports: [],
  templateUrl: './counuter.component.html',
  styleUrl: './counuter.component.css'
})
export class CounuterComponent {
  
  z:number=0;
  increment(){
    this.z++;
  }
  decrement(){
    if(this.z>0)this.z--;
    else return
  }
  reset(){
    this.z=0;
  }
}
