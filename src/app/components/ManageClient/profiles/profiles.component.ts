
import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  constructor(public clientService: ClientService,private router: Router) {
  }
  listClients:any[]=["ss","aa","bb","dd"]
  public focus;

  ngOnInit() {

  }
  viewProfile(){
    this.router.navigate(['/user-profile']);
  }
}
