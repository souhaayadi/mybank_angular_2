import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AddClientComponent} from '../../components/ManageClient/add-client/add-client.component';
import {ManageClientComponent} from '../../components/ManageClient/manage-clients/manage-client.component';
import {ManageAccountsComponent} from '../../components/Accounts/manage-accounts/manage-accounts.component';
import {ProfilesComponent} from '../../components/ManageClient/profiles/profiles.component';
import {PaymentComponent} from '../../components/operations/payment/payment.component';
import {TransactionComponent} from '../../components/operations/transaction/transaction.component';
import {TransferComponent} from '../../components/operations/transfer/transfer.component';
import {HistoryComponent} from '../../components/operations/history/history.component';
import {AuthGuard} from '../../authGuard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent,canActivate: [AuthGuard] },
  { path: 'user-profile/:id',   component: UserProfileComponent,canActivate: [AuthGuard] },
    { path: 'tables',         component: TablesComponent,canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent ,canActivate: [AuthGuard]},
    { path: 'maps',           component: MapsComponent ,canActivate: [AuthGuard]},
    { path: 'addClient',           component:AddClientComponent ,canActivate: [AuthGuard] },
    { path: 'addClient/:id',           component:AddClientComponent,canActivate: [AuthGuard]  },
    { path: 'manageClients',           component:ManageClientComponent ,canActivate: [AuthGuard] },
  { path: 'manageAccounts',           component:ManageAccountsComponent ,canActivate: [AuthGuard] },
  { path: 'profiles',           component:ProfilesComponent,canActivate: [AuthGuard]  },
  { path: 'versement',           component:PaymentComponent,canActivate: [AuthGuard]  },
  { path: 'transaction',           component:TransactionComponent ,canActivate: [AuthGuard] },
  { path: 'transfer',           component:TransferComponent ,canActivate: [AuthGuard] },
  { path: 'history',           component:HistoryComponent  ,canActivate: [AuthGuard]},






];
