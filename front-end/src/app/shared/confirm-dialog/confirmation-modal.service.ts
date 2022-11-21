import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class ConfirmationDialogService {
   
    constructor(public dialog: MatDialog) { }

    // confirm(enterAnimationDuration: string, exitAnimationDuration: string): Promise<boolean> {
    //     const modal = this.dialog.open(ConfirmDialog, {
    //         width: '350px',
    //         enterAnimationDuration,
    //         exitAnimationDuration,
    //       });

    //     return new Promise<boolean>((resolve, reject) => modal.subscribe((result) => resolve(result)));
    // }
}
