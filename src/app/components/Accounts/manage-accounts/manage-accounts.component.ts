
import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.scss']
})
export class ManageAccountsComponent implements OnInit {

  constructor(public clientService: AccountsService) {
  }



  ngOnInit() {

  }

}
