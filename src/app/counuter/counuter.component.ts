import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counuter',
  imports: [],
  templateUrl: './counuter.component.html',
  styleUrl: './counuter.component.css'
})
export class CounuterComponent {
  userName:string|null="";
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    // let name=this.route.snapshot.paramMap.get('name')
    // this.userName=name;
    // this.route.queryParams.subscribe(params=>{
    //   this.userName=params['name']
    // }
    // )
    this.route.data.subscribe(data=>{
      this.userName=data['name']
    })
  }

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
