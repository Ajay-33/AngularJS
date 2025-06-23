import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { CounuterComponent } from './counuter/counuter.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'forms',component:FormsComponent},
    {path:'profile',component:ProfileComponent},
    {path:'user/:id',component:UserComponent},
    {path:'counter',component:CounuterComponent, data:{name:'Guest'}},
    {path:'todo',component:TodoComponent},
    {path:'signup',component:SignupComponent, data:{count:10}},
    {path:'**',component:PageNotFoundComponent}
];
