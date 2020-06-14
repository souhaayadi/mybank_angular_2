import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountsService} from '../../Accounts/accounts.service';
import {Router} from '@angular/router';
import {Client} from '../../ManageClient/client-model';
import {AddClientComponent} from '../../ManageClient/add-client/add-client.component';
import {OperationsService} from '../operations.service';
import {Operation} from '../operations-model';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public operationsService: OperationsService, private router: Router) {
  }
  code:any;
  historyList:any[]=[];
  @ViewChild(AddClientComponent) addClientComponent:AddClientComponent ;
  sexelist:any[]=[]
  showAccountDetails:boolean=false;
  ngOnInit() {
    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});

  }


  submitHistory(event:any){
    this.operationsService.getOperations(this.code,0,5).subscribe(response=>{
      if(response){
        this.historyList=response
        this.showAccountDetails=true;
      }

    })
  }
  getTypeOperation(operation:any){
    if(operation=="R"){
      return "Transaction"
    }

    if(operation=="V"){
      return "Payment"
    }
  }
}
