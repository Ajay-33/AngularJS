import { afterRender, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // constructor(){
  //   // runs while initializing or creation of this class only
  // }
  // ngOnInit runs when component initialized finally, after constructor
  // ngOnDestroy runs when components goes out of viewspace or come out of that componet via some condition
  // ngOnChanges like useEffect with dependancies
  @Input() counter:number=0;
  // To get from parent and change using ngOnChanges
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.data.subscribe(data=>{
      this.counter=data['count']
    })
    console.log(this.counter)
  }
  ngOnChanges(){
    // runs when @input() gets changed
  }
  // afterRender((runs every time all components been rendered to DOM)) and afterNextRender((runs once the next time all components been rendered to DOM))
  // detecting changes in child in parent using @ViewChild('child-name') SignUpComponent: any 
  // <app-signup #child-name></app-signup>
  // Have all these in Parent Component
  // constructor(){
  //   // always inside constructor
  // Runs on every render of child component
  //   afterRender(()=>{
  //     console.log("Re rendered",this.SignupComponent.counter);
      // afterNextREnder(()=>{
      //   console.log("Will be logged only once ");
        
      // })
      
  //   })
  // }

}
