import { Component, OnInit } from '@angular/core';
import {NonNullableFormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private fb: NonNullableFormBuilder,
    private toast: HotToastService
  ){}


  ngOnInit(): void {
    this.loginForm.value.email
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }
    
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logado com sucesso!',
        loading: 'Logando...',
        error: 'Aconteceu um erro!'
      })
    ).subscribe(() => {
      this.router.navigate(['../poslogin']);
  });
  }
}
