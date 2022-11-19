import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tempale',
  templateUrl: './form-tempale.component.html',
  styleUrls: ['./form-tempale.component.css']
})
export class FormTempaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public login(form:any):void{
    console.log(form);
  }

}
