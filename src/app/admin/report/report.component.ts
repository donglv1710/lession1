import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  
  constructor(private fb: FormBuilder){ }
  ngOnInit() {
  }
  fg = this.fb.group({
    Name: ['']
  });
  public dong(): any {
    console.log(this.fg.value);
  }
}
