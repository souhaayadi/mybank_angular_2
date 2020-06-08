import { Component, OnInit } from '@angular/core';

import {Adress, Client} from '../client-model';
import {ClientService} from '../client.service';
import {AccountsService} from '../../Accounts/accounts.service';
import {Compte} from '../../Accounts/accounts-model';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(public clientService: ClientService, public accountsService:AccountsService) { }
  sexelist:any[]=[]
  cptTypeList:any[]=[]
  sexe:string;
  ngOnInit() {
    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});
    this.cptTypeList.push({label: "Current account", value: "CptCourant"});
    this.cptTypeList.push({label: "Savings account", value: "CptEpargne"});

  }
  account:Compte={} as Compte;
  client: Client ={
    address:{} as Adress,
  } as Client;
  mode = 1;




  saveClient(event:any) {
    this.client.sexe=this.sexe;
    let accounts :Compte []=[]
    accounts.push(this.account);
    this.client.comptes=accounts;
    //this.client.address="123";
    this.clientService.saveClient(this.client).subscribe(data => {

      this.client = data;

      this.mode = 2;
    }, error => {
      console.log(error);
    });
  }
  changeSexe(event:any){
   this.sexe=event.value;
  }
}
