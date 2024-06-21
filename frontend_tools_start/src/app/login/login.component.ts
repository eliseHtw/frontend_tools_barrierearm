import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(12)]);

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  private formValid() {
    return this.username.valid && this.password.valid;
  }

  login(): void {
    if (this.formValid()) {
      let user = {
        id: '',
        username: this.username.value!,
        password: this.password.value!
      };
    } else {
      console.warn('form still invalid!');
    }
  }
}
