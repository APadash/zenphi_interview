import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { UserListComponent } from "./user-list.component";
import { UserListRoutingModule } from "./user-list.routing";
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';

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
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ]
})
export class UserListModule { }