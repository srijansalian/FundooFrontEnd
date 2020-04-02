import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreatenotesComponent } from './component/createnotes/createnotes.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { PinnednotesComponent } from './component/pinnednotes/pinnednotes.component';
import { SinglenoteComponent } from './component/singlenote/singlenote.component';
import { ArchiveComponent } from './component/archive/archive.component';





const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'createnotes',component:CreatenotesComponent},
    //{path:'',component:CreatenotesComponent},
    {path:'',component:DisplaynotesComponent},
   // {path:'displaynotes',component:DisplaynotesComponent},
    {path:'displaynotes/:note',component:DisplaynotesComponent},
  ]},
    {path :'singlenote',component:SinglenoteComponent},
    {path:'displaynotes',component:DisplaynotesComponent},
    {path:'pinnednotes',component:PinnednotesComponent},
    {path:'archive',component:ArchiveComponent},
    // {path:'displaynotes/:note',component:DisplaynotesComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
