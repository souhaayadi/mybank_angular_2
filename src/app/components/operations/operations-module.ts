import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule, TableModule} from 'primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OperationsService} from './operations.service';
import {HistoryComponent} from './history/history.component';
import {PaymentComponent} from './payment/payment.component';
import {TransactionComponent} from './transaction/transaction.component';
import {TransferComponent} from './transfer/transfer.component';
import {AccountsService} from '../Accounts/accounts.service';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule,TableModule
  ],
  declarations: [
    HistoryComponent,
    PaymentComponent,TransactionComponent,TransferComponent

  ],
  exports: [
    HistoryComponent,
 TransactionComponent,TransferComponent
  ],
  providers:[OperationsService,AccountsService]
})
export class OperationsModule { }
