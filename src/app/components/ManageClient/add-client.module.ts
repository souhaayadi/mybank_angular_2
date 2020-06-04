import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddClientComponent} from './add-client/add-client.component';
import {AddClientService} from './add-client.service';
import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule} from 'primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule
  ],
  declarations: [
    AddClientComponent
  ],
  exports: [
    AddClientComponent
  ],
  providers:[AddClientService]
})
export class AddClientModule { }
