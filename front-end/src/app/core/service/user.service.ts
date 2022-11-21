import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/data/models/Users/user.model';
import { AppConstants } from 'src/app/constants/app.constant';
import { ApiResponse } from 'src/app/data/models/Helper/apiResponse.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    endPoint = AppConstants.Api_EndPoint + 'User/';

    constructor(private http: HttpClient) { }

    GetUsers(): Observable<ApiResponse<UserModel>> {
        return this.http.get<ApiResponse<UserModel>>(this.endPoint);
    }

    GetUserById(userId: number): Observable<ApiResponse<UserModel>> {
        return this.http.get<ApiResponse<UserModel>>(this.endPoint + userId);
    }

    AddUser(user: UserModel): Observable<ApiResponse<any>> {
        return this.http.post<ApiResponse<any>>(this.endPoint, user);
    }

    EditUser(user: UserModel): Observable<ApiResponse<any>> {
        return this.http.put<ApiResponse<any>>(this.endPoint, user);
    }

    DeleteUser(userId: number): Observable<ApiResponse<any>> {
        return this.http.delete<ApiResponse<any>>(this.endPoint + '?userId=' + userId);
    }
}