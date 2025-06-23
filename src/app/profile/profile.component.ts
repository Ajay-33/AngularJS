import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// @comp is also a directive, compoent directive
@Component({
    selector:'app-profile',
    imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,RouterLink],
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css'
    // template:`<h1>Profile Component</h1>`,
    // styles:'h1{color:green}'
})

export class ProfileComponent{
    color="purple"
    fontSize="80"
    lessSize="10"
    zoom=false
    users=[
        {
            id:'1',
            name:'Ajay',
            age:20
        },
        {
            id:'2',
            name:'Bunny',
            age:20
        },
        {
            id:'3',
            name:'Hella',
            age:19
        },
        {
            id:'4',
            name:'Emo',
            age:25
        }
    ]
    // Yu can also toggle this to make it toggling in html

    // Directives
    // is a class that adds additional behaviour to elements in your application
    // A feature in angular that help you to provide more power to DOM elements
    // If-else conditions, For loop, add style, ngIf, ngFor, ngClass, ngSwitch, etc.
    // Component Directives, Structural, Attribute
    // Comp: used in comp template file
    // Structural: Chnage struct of DOm by adding or removing elems like ngIf
    // Attri: momdify appearance of behaviour of an existing elem like ngStyle, etc.

    // show=false;
    // ngFor Directive
    // data=[10,10,20,50,80,90,100]
    // ngIf Directive
    // login=false
    // block=0
    // ngSwitch Directive like switch statement 

    // color="yelw"

}