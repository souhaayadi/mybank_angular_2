
import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../client-model';
import {Router} from '@angular/router';
import {AddClientComponent} from '../add-client/add-client.component';
import {AccountsService} from '../../Accounts/accounts.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  constructor(private toastr: ToastrService,public clientService: ClientService,private router: Router,public accountsService: AccountsService) {
  }
  clientsList:Client[]=[];
  @ViewChild(AddClientComponent) addClientComponent:AddClientComponent ;
  sexelist:any[]=[]
  ngOnInit() {

    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});
    this.getClients();
  }
  getClients(){
    this.clientService.getClients().subscribe(response=>{
      this.clientsList=response;
    })
  }

  searchIconClick(client:Client){
    this.router.navigate(['/user-profile/ '+ client.code]);
  }
  editIconClick(client:Client){

    this.router.navigate(['/addClient/ '+ client.code]);
  }

  deleteIconClick(client:Client){
   this.clientService.deleteClient(client.code).subscribe(response=>{
  if(response){
  client.comptes.forEach(compte=>{
    this.accountsService.deleteAccount(compte.codeCompte).subscribe(resp=>{

    })
  })
  this.getClients();
    this.toastr.success('operation success', '');
  }
  }, error => {
  this.toastr.error('operation failed', '');
  console.log(error);
});
  }
}
