import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../components/ManageClient/client.service';
import {AccountsService} from '../../components/Accounts/accounts.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Adress, Client} from '../../components/ManageClient/client-model';
import {Compte} from '../../components/Accounts/accounts-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private subscription: Subscription;


  constructor(public clientService: ClientService, public accountsService:AccountsService ,private activatedRoute:ActivatedRoute) { }

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
      if(this.clientId){
        this.clientService.getClient(this.clientId).subscribe(response=>{


          this.client=response

        })
      }

    });
    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});
    this.cptTypeList.push({label: "Current account", value: "CptCourant"});
    this.cptTypeList.push({label: "Savings account", value: "CptEpargne"});
    //this.client.sexe="Men"


  }
}
