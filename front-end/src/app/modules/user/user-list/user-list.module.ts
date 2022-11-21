import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { UserListComponent } from "./user-list.component";
import { UserListRoutingModule } from "./user-list.routing";
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationModalModule } from "src/app/shared/confirm-dialog/confirm-dialog.component.module";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations: [UserListComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        UserListRoutingModule,
        ConfirmationModalModule,
        MatSidenavModule
    ]
})
export class UserListModule { }