import { Component } from '@angular/core';
import {AbstractControl, NonNullableFormBuilder, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from './services/authentication.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  };
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel App';

  signUpForm = this.fb.group({
    name: ['', Validators.required],
    secondname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, { validators: passwordsMatchValidator() });


  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder,
  ) {}

  ngOnInit(): void {
    
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get secondname() {
    return this.signUpForm.get('secondname');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {

    const {name, secondname, email, password} = this.signUpForm.value;
    
    if (!this.signUpForm.valid || !name || !secondname || !email || !password) {
      return;
    }

    
    this.authService.signUp(name, secondname, email, password).pipe(
      this.toast.observe({
        success: 'Cadastro realizado com sucesso!',
        loading: 'Realizando cadastro...',
        error: ({ message }) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/cadastroefetuado']);
  });
  }
}

