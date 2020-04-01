import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  note(){
    this.router.navigateByUrl('dashboard');
  }
  // onArchive(){
  //   this.router.navigateByUrl('archive');
  // }
  onArchive(){
    this.router.navigate(['displaynotes','archive']);
  }
  ontrash(){
    this.router.navigate(['/displaynotes','trash']);
  }

}
