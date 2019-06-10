import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    id: number;
    sub: any;

  constructor(public _route: ActivatedRoute, public _posts:PostService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((params) => {
      this.id = params['id']
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
}
}
