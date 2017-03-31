import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {

  name: string;
  id: string;

  constructor(private route: ActivatedRoute) {
    this.name = "Juan Topo";
    route.params.subscribe(
        params => {
            this.id = params['id'];
        }
    );
   }

  ngOnInit() {
  }

}
