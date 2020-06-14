
import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountsService} from '../accounts.service';
import {Client} from '../../ManageClient/client-model';
import {AddClientComponent} from '../../ManageClient/add-client/add-client.component';
import {ClientService} from '../../ManageClient/client.service';
import {Router} from '@angular/router';
import {Compte} from '../accounts-model';

@Component({
  selector: 'manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.scss']
})
export class ManageAccountsComponent implements OnInit {

  constructor(public accountsService: AccountsService,private router: Router) {
  }
  accountList:Compte[]=[];

  ngOnInit() {

    this.getAccounts();
  }
  getAccounts(){
    this.accountsService.getAllAccounts().subscribe(response=>{
      this.accountList=response;
    })
  }

  searchIconClick(client:Client){
    this.router.navigate(['/user-profile']);
  }
  editIconClick(client:Client){

    this.router.navigate(['/addClient/ '+ client.code]);
  }
  deleteIconClick(client:Client){
    this.accountsService.deleteAccount(client.code).subscribe(response=>{
      if(response){
        this.getAccounts();
      }
    })
  }
  getTypecpt(typeCpt){
    if(typeCpt=="CptCourant"){
      return "Current account";
    }
    else{
      return "Savings account";
    }
  }
}
