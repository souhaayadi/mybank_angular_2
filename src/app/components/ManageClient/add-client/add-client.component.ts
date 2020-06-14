import { Component, OnInit } from '@angular/core';

import {Adress, Client} from '../client-model';
import {ClientService} from '../client.service';
import {AccountsService} from '../../Accounts/accounts.service';
import {Compte} from '../../Accounts/accounts-model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  private subscription: Subscription;

  constructor(private toastr: ToastrService,public clientService: ClientService, public accountsService:AccountsService ,private activatedRoute:ActivatedRoute ) { }
  sexelist:any[]=[]
  cptTypeList:any[]=[]
  sexe:string;
  account:Compte={} as Compte;
  client: Client ={
    address:{} as Adress,
  } as Client;
  mode = 1;
  clientId:any;




  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: any) => {
      this.clientId = params['id'];
      if(this.clientId) {
        this.clientService.getClient(this.clientId).subscribe(response => {
          this.client = response
          this.client.comptes.forEach(cpt => {
            this.account = cpt;

          })
        })
      }
    });

    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});
    this.cptTypeList.push({label: "Current account", value: "CptCourant"});
    this.cptTypeList.push({label: "Savings account", value: "CptEpargne"});
    //this.client.sexe="Men"


  }
  saveClient(event:any) {

    let accounts :Compte []=[]
    accounts.push(this.account);
    this.client.comptes=accounts;
    this.clientService.saveClient(this.client).subscribe(data => {
       if(data) {
         this.toastr.success('operation success', '');

       }
    }, error => {
      this.toastr.error('operation failed', '');
      console.log(error);
    });
  }
  changeSexe(event:any){
   this.sexe=event.value;
  }
  editClient(){

 let accounts :Compte []=[]
    accounts.push(this.account);
    this.client.comptes=accounts;
    this.clientService.updateClient(this.client).subscribe(data => {
      if(data) {
        this.toastr.success('operation success', '');

        this.client = data;
      }
    }, error => {
      this.toastr.error('operation failed', '');
      console.log(error);
    });

  }

}
