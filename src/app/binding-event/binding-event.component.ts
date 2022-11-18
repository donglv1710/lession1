import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.css']
})
export class BindingEventComponent implements OnInit {

  username="le vand dong";
  constructor() { }

  ngOnInit(): void {
  }
  callEvent() {
    alert('call event click');
  }
  
}
