import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,MatMenuModule,MatDialogModule,MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreatenotesComponent } from './component/createnotes/createnotes.component';
import { DisplaynotesComponent } from './component/displaynotes/displaynotes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
//import {MatDialogModule, MatDialog } from '@angular/material/dialog';

import { PinnednotesComponent } from './component/pinnednotes/pinnednotes.component';
import { SinglenoteComponent } from './component/singlenote/singlenote.component';
import { DisplayemptyComponent } from './component/displayempty/displayempty.component';
import { UpdatenotesComponent } from './component/updatenotes/updatenotes.component';
import { NoteiconComponent } from './component/noteicon/noteicon.component';
import { SearchnotePipe } from './pipe/searchnote.pipe';
import { LabelComponent } from './component/label/label.component';
import { EditlabelComponent } from './component/editlabel/editlabel.component';
import { SearchlabelPipe } from './pipe/searchlabel.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    DisplaynotesComponent,

    PinnednotesComponent,

    SinglenoteComponent,

    DisplayemptyComponent,

    UpdatenotesComponent,

    NoteiconComponent,

    SearchnotePipe,

    LabelComponent,

    EditlabelComponent,

    SearchlabelPipe,
  

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule ,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,  
 ],
 exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
