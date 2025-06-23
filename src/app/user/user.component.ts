import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // id:number=-1;
  // constructor(private route:ActivatedRoute){

  // }
  // ngOnInit(){
  //   this.route.params.subscribe((params)=>{
  //     this.id=params['id'];
  //   })
  // }

// @Input() user:String=''

@Output() getUsers=new EventEmitter();
users=['Ajay','Me','Hela','Brucwe']

ngOnInit(){
  this.getUsers.emit(this.users)
}

}
