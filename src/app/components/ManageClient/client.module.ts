import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddClientComponent} from './add-client/add-client.component';
import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule} from 'primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManageClientComponent} from './manage-clients/manage-client.component';
import {ClientService} from './client.service';
import {ProfilesComponent} from './profiles/profiles.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule
  ],
  declarations: [
    AddClientComponent,
    ManageClientComponent,
    ProfilesComponent
  ],
  exports: [
    AddClientComponent
  ],
  providers:[ClientService]
})
export class ClientModule { }
