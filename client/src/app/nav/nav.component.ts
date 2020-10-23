import { Component, OnInit } from '@angular/core';
// ngForm 報錯要記得匯入
// import { NgForm } from "@angular/forms";
// *ngIf 報錯要記得匯入
// import { NgModule } from '@angular/core';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {AccountService} from '../_services/account.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>{
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }
  
  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    })
  }
}
