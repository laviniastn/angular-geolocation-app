import { Component, Inject, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  version = VERSION;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  openDialog(ip: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '70%',
      width: '30%',
      data: {
        message: 'IP: ' + ip,
        buttonText: {
          ok: 'Save',
          cancel: 'Cancel',
        },
      },
    });
    // const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        // snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        // snack.dismiss();
        this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }
}
