import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ErrorDisplayComponent} from './ui/error-display/error-display.component';
import {ConfirmDialogComponent} from './ui/confirm-dialog/confirm-dialog.component';
@NgModule({
  imports:[CommonModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatProgressBarModule],
  declarations:[ErrorDisplayComponent, ConfirmDialogComponent],
  exports:[ErrorDisplayComponent, ConfirmDialogComponent, MatButtonModule, MatIconModule, MatSnackBarModule, MatDialogModule, MatProgressBarModule]
})
export class SharedModule{}
