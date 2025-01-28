import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../core/services/notifications.service';
import { APIResponseCodes } from '../../core/constants/api-response-codes';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe]
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordFieldType: string = 'password';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      if (rememberMe) {
        localStorage.setItem('email', email);   
      }
      this.authService.login(email, password).subscribe({
        next: (response) => {
          localStorage.setItem('accessToken', response.data.token); 
          localStorage.setItem('refreshToken', response.data.refreshToken);
          this.router.navigate(['dashboard/partner']);
          this.notificationService.showNotification(APIResponseCodes.SUCCESS.code);  
        },
        error: (error: HttpErrorResponse) => {
          switch (error.status) {
            case 401:
              this.notificationService.showNotification(APIResponseCodes.INVALID_CREDENTIALS.code); // Invalid credentials
              break;
            case 400:
              this.notificationService.showNotification(APIResponseCodes.BAD_REQUEST.code); // Bad request
              break;
            case 403:
              this.notificationService.showNotification(APIResponseCodes.FORBIDDEN.code); // Forbidden
              break;
            case 404:
              this.notificationService.showNotification(APIResponseCodes.NOT_FOUND.code); // Not found
              break;
            case 422:
              this.notificationService.showNotification(APIResponseCodes.UNPROCESSABLE_ENTITY.code); // Unprocessable entity
              break;
            case 500:
              this.notificationService.showNotification(APIResponseCodes.INTERNAL_SERVER_ERROR.code); // Internal server error
              break;
            default:
              this.notificationService.showNotification(APIResponseCodes.UNEXPECTED_ERROR.code); // Unexpected error
              break;
          }
        },
      });
    } else {
      this.notificationService.showNotification(APIResponseCodes.UNEXPECTED_ERROR.code); // Invalid form
    }
  }
}
