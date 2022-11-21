import { Component, OnInit } from '@angular/core';
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

  constructor(private service: UserService, private SideNavService: SideNavService) {

  }

  ngOnInit(): void {
    console.log(this.userData);
  }

  Save() {
    if (!this.status) {
      this.service.AddUser(this.userData).subscribe(() => {
        this.cancel();
      });
    } else {
      this.service.EditUser(this.userData).subscribe(() => {
        this.cancel();
      });
    }
  }

  cancel() {
    this.SideNavService.close();
  }

}
