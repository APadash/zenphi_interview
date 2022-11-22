import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserService } from "src/app/core/service/user.service";
import { ApiResponse } from "src/app/data/models/Helper/apiResponse.interface";
import { UserModel } from "src/app/data/models/Users/user.model";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { SideNavService } from "src/app/core/service/side-nav.service";
import { UserInfoComponent } from "../user-info/user-info.component";
import { Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  userModel:UserModel[] = [];
  dataSource = new MatTableDataSource(this.userModel);

  selectedUser: UserModel = {} as UserModel;

  tableDataUpdate!: Subscription;

  constructor(
    private service: UserService,
    public dialog: MatDialog,
    private SideNavService: SideNavService,
    private _snackBar: MatSnackBar
  ) {
    this.tableDataUpdate = this.service.userTableUpdate.subscribe((data: any) => {
      if (data) {
        this.GetUserList();
      }
    });
  }

  ngOnInit() {
    this.GetUserList();
  }

  GetUserList() {
    this.service.GetUsers().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.result);
    });
  }


  async OpenConfirm(userId: number, enterAnimationDuration: string, exitAnimationDuration: string) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.DeleteItem(userId);
      }
    });
  }

  DeleteItem(userId: number) {
    this.service.DeleteUser(userId).subscribe((res: any) => {
      this.GetUserList();
      this._snackBar.open(res.message, 'Ok', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    });
  }

  EditItem(userid: number) {
    this.service.GetUserById(userid).subscribe((res: any) => {
      this.selectedUser = res.result;
      const status = true;
      this.SideNavService.open(UserInfoComponent, { userData: this.selectedUser, status });
    });
  }

  AddUser() {
    const status = false;
    this.SideNavService.open(UserInfoComponent, { userData: this.selectedUser, status });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

  ngOnDestroy(): void {
    this.tableDataUpdate?.unsubscribe();
  }
}