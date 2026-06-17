import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../../../services/login.service';
import { LocalStorage } from '../../../../services/local-storage.service';

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

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private localStorage: LocalStorage,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    this.loginService.loginUser(this.loginForm.value).subscribe({
      next: (res) => {
        console.log('res', res);
        this.localStorage.setLcoalStorag('user',res)
        this.loading.set(false);
      },
      error: (error) => {
        this.errorMessage(error);
      },
    });
  }

  errorMessage(error: any): void {
    this.loading.set(false);
    console.log(error);
  }
}
