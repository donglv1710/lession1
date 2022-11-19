import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
 
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({//long form
      city: new FormControl(''),
      district: new FormControl('')
    })
  })
  //cach 2 la khai bao FormBuilder
  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(16)]],
      property: this.fb.group({
          year: '',
          stars: '',
      })
  })
  }
  public bookForm:any;

  //dung FormBuilder taoj form
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(16)]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  //demo formArray
  //lay formArray 
  get aliases():FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }
  public addAlias():void {
    this.aliases.push(this.fb.control(''));
  }

  ngOnInit(): void {
  }
  
  login():any{
    console.log(this.loginForm.value);
    console.log(this.profileForm.value);
  }

}
