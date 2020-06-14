import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule, TableModule} from 'primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManageAccountsComponent} from './manage-accounts/manage-accounts.component';
import {AccountsService} from './accounts.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule,TableModule
  ],
  declarations: [
    ManageAccountsComponent

  ],
  exports: [
    ManageAccountsComponent
  ],
  providers:[AccountsService]
})
export class AccountsModule { }
