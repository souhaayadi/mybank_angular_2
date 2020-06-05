import {AddClientService} from '../add-client.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'add-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

  constructor(public clientService: AddClientService) {
  }



  ngOnInit() {

  }

}
