import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private formbuilder: FormBuilder, private _login: LoginService, private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.loginForm = this.formbuilder.group({
      email: [null, Validators.email],
      password: [null, Validators.minLength(6)]
    });
  }

}
