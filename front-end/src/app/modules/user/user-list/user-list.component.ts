import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/service/user.service";
import { ApiResponse } from "src/app/data/models/Helper/apiResponse.interface";
import { UserModel } from "src/app/data/models/Users/user.model";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { SideNavService } from "src/app/core/service/side-nav.service";
import { UserInfoComponent } from "../user-info/user-info.component";

@Component({
  selector: 'app-userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource: UserModel[] = [];
  selectedUser: UserModel = {} as UserModel;

  constructor(
    private service: UserService,
    public dialog: MatDialog,
    private SideNavService: SideNavService
  ) {

  }

  ngOnInit() {
    this.GetUserList();
  }

  GetUserList() {
    this.service.GetUsers().subscribe((res: any) => {
      this.dataSource = res.result;
    });
  }


  DeleteItem(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  EditItem(userid: number) { 
    this.service.GetUserById(userid).subscribe((res: any) => {
      this.selectedUser = res.result;
      const status = true;
      this.SideNavService.open(UserInfoComponent,{userData: this.selectedUser, status});
    });
  }

  AddUser () {
    const status = false;
    this.SideNavService.open(UserInfoComponent,{userData: this.selectedUser, status});
  }
}