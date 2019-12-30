import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validator, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private shared:SharedModule) {  
    
  }

  

  ngOnInit() {
  }

}
