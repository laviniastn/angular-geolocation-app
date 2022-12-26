import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
      width: '35%',
      data: {
        currentIp: ip,
        buttonText: {
          cancel: 'Cancel',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const a = document.createElement('a');
        a.click();
        a.remove();
        this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }
}
