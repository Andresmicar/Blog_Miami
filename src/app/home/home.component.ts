import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _user:PostService) { }

  ngOnInit() {
  }

}
