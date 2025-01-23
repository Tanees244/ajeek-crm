import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIResponseCodes } from '../constants/api-response-codes';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) { }

  showNotification(responseCode: number): void {
    let message = 'An error occurred. Please try again.';
    let panelClass = 'error-snackbar';

    switch (responseCode) {
      case APIResponseCodes.SUCCESS.code:
        message = APIResponseCodes.SUCCESS.message;
        panelClass = 'success-snackbar';  
        break;
      case APIResponseCodes.CREATED.code:
        message = APIResponseCodes.CREATED.message;
        panelClass = 'success-snackbar';  
        break;
      case APIResponseCodes.BAD_REQUEST.code:
        message = APIResponseCodes.BAD_REQUEST.message;
        panelClass = 'error-snackbar';  
        break;
      case APIResponseCodes.FORBIDDEN.code:
        message = APIResponseCodes.FORBIDDEN.message;
        panelClass = 'error-snackbar';  
        break;
      case APIResponseCodes.NOT_FOUND.code:
        message = APIResponseCodes.NOT_FOUND.message;
        panelClass = 'error-snackbar';  
        break;
      case APIResponseCodes.UNPROCESSABLE_ENTITY.code:
        message = APIResponseCodes.UNPROCESSABLE_ENTITY.message;
        panelClass = 'error-snackbar';  
        break;
      case APIResponseCodes.INVALID_CREDENTIALS.code:
        message = APIResponseCodes.INVALID_CREDENTIALS.message;
        panelClass = 'error-snackbar';  
        break;
      case APIResponseCodes.INTERNAL_SERVER_ERROR.code:
        message = APIResponseCodes.INTERNAL_SERVER_ERROR.message;
        panelClass = 'error-snackbar';  
        break;
      case APIResponseCodes.UNEXPECTED_ERROR.code:
        message = APIResponseCodes.UNEXPECTED_ERROR.message;
        panelClass = 'error-snackbar';  
        break;
    }
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: [panelClass],
    });
  }
}
