
import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';

@Component({
  selector: 'manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  constructor(public clientService: ClientService) {
  }



  ngOnInit() {

  }

}
