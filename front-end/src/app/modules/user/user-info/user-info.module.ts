import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SharedModule } from "src/app/shared/shared.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoComponent } from "./user-info.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [UserInfoComponent],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class UserInfoModule { }