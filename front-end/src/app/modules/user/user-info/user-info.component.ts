import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideNavService } from 'src/app/core/service/side-nav.service';
import { UserService } from 'src/app/core/service/user.service';
import { UserModel } from 'src/app/data/models/Users/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userData: UserModel =  {} as UserModel;
  status: boolean = false

  constructor(private service: UserService,
    private SideNavService: SideNavService,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  Save(form: any) {
    if (!this.status) {
      this.service.AddUser(this.userData).subscribe((res) => {
        this._snackBar.open(res.message, 'Ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.service.UserDataPass(this.userData);
        this.cancel(form);
      });
    } else {
      this.service.EditUser(this.userData).subscribe((res) => {
        this._snackBar.open(res.message, 'Ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        this.service.UserDataPass(this.userData);
        this.cancel(form);
      });
    }
    form.resetForm();
  }

  cancel(form: any) {
    form.resetForm();
    this.SideNavService.close();
  }

}
