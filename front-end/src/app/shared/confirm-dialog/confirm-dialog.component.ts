import { Component, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Subject } from "rxjs";

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
    public onClose!: Subject<boolean>;
    result: Subject<boolean> = new Subject<boolean>();
    
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

    public ngOnInit(): void {
        this.onClose = new Subject();
    }

    public onConfirm(): void {
        this.result.next(true);
        this.onClose.next(true);
        this.dialogRef.close();
    }

    public onCancel(): void {
        this.result.next(false);
        this.onClose.next(false);
        this.dialogRef.close();
    }


}
