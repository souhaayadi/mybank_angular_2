import { Component, OnInit } from '@angular/core';
import {AddClientService} from '../add-client.service';
import {Adress, Client} from '../client-model';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(public clientService: AddClientService) { }
  sexelist:any[]=[]
  sexe:string;
  ngOnInit() {
    this.sexelist.push({label: "Homme", value: "Homme"});
    this.sexelist.push({label: "Femme", value: "Femme"});
  }

  client: Client ={
    adress:{} as Adress
  } as Client;
  mode = 1;




  saveClient(event:any) {
    this.client.sexe=this.sexe;

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
