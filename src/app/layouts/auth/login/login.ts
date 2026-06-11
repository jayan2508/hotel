import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  loading = signal(false);
  showPassword = signal(false);
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOninit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      console.log(this.loginForm.value);
    }, 2000);
  }
}
