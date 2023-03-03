import { Component } from '@angular/core';
import {EventSingleService} from "../event-single.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css']
})
export class EventSingleComponent {
  events:any={};
  id:number=0;
  constructor(private event:EventSingleService,private route:ActivatedRoute, private http:HttpClient) {
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.event.getEventID(params['id']).subscribe(data=>{
        this.events=data;
        console.log(this.events)
      })
    })
  }
}
