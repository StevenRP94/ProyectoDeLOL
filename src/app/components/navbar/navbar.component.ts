import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre:FormGroup;

  constructor(private shared:SharedModule) {  
    this.nombre = new FormGroup( {
      'nombre': new FormControl()
    })
  }

  ver(){
    console.log(this.nombre.value)
  }

  ngOnInit() {
  }

}
