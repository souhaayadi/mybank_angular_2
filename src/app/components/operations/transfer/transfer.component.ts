import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../../Accounts/accounts.service';
import {Router} from '@angular/router';
import {Compte} from '../../Accounts/accounts-model';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(public accountsService: AccountsService, private router: Router,private toastr: ToastrService) {
    this.buildForm()

  }
  amount:any;
  code1:any;
  code2:any;
  account:Compte={
  } as Compte;
  showAccountDetails:boolean=false;
  paymentformGroup: FormGroup;
  accountList:Compte[]=[];
  ngOnInit(): void {

  }
  submitTransfer(event:any){


    this.accountsService.Virement(this.code1,this.code2,this.amount).subscribe(response=>{
      if(response){
        this.toastr.success('operation success', '');
        this.accountList=response
        this.showAccountDetails=true;

    }}, error => {
  this.toastr.error('operation failed', '');
  console.log(error);
});
  }
  private buildForm() {
    this.paymentformGroup  = new FormGroup({
      code: new FormControl(),
      amount: new FormControl()
    });
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
