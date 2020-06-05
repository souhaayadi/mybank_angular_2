import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    typeRoute?: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '',typeRoute: 'parent' },
    { path: '/manageClients', title: 'Clients',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'manageClients'} ,
    { path: '/accounts', title: 'Accounts',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'accounts'} ,
    { path: '/operations', title: 'Operations',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'operations'} ,
    { path: '/profiles', title: 'Profiles',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'profiles'} ,
   /* { path: '/icons', title: 'Icons',  icon: 'ni-planet text-blue', class: '',typeRoute: 'parent' },*/
    { path: '/maps', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
   /* { path: '/login', title: 'Login',  icon: 'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon: 'ni-circle-08 text-pink', class: '' },*/



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  openClientsSubMenu:boolean=false;
  openOperationsSubMenu:boolean=false;
  openAccountsSubMenu:boolean=false;
  private countClt: any=0;
  private countAcc: any=0;
  private countOp: any=0;


  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
  clickManage(event:any,typeMenu:string){
    if(typeMenu=='clients'){
      if((this.countClt%2) ==0){
        this.openClientsSubMenu=true;
        this.countClt++;
      }
      else{
        this.openClientsSubMenu=false;
        this.countClt=this.countClt+1;
      }
    }
    else{
      if(typeMenu=='operations'){
        if((this.countOp %2) ==0){
          this.openOperationsSubMenu=true;
          this.countOp++;
        }
        else{
          this.openOperationsSubMenu=false;
          this.countOp=this.countAcc+1;
        }
      }
      else{
        if(typeMenu=='accounts'){
          if((this.countAcc %2) ==0){
            this.openAccountsSubMenu=true;
            this.countAcc++;
          }
          else{
            this.openAccountsSubMenu=false;
            this.countAcc=this.countAcc+1;
          }
        }
      }
    }
  }


}
