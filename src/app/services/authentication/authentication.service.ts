import { Injectable } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  RegisterList: any = [];
  constructor(public http: HttpServiceService) {

  }

  Register(RegisterData): any {
    // return this.http.postData(RegisterData, "/user/register").toPromise();
    this.RegisterList = JSON.parse(localStorage.getItem("RegisterList"));
    if (this.RegisterList == null || this.RegisterList == '' || this.RegisterList == undefined) {
      this.RegisterList = [];
    }
    this.RegisterList.push(RegisterData);
    localStorage.setItem("RegisterList", JSON.stringify(this.RegisterList))
    let respose = { success: true, message: 'Registered successfully' }
    return respose;
  }

  Login(LoginData): any {
    // return this.http.postData(LoginData, "/user/login").toPromise();
    this.RegisterList = JSON.parse(localStorage.getItem("RegisterList"));
    if (this.RegisterList) {
      for (let i in this.RegisterList) {
        if (this.RegisterList[i].mob_number == LoginData.mob_number) {
          this.RegisterList[i].success = true;
          return this.RegisterList[i];
        }
      }
      return { success: true, message: 'Bad Credentials' }
    } else {
      return { success: true, message: 'Yet you have not registered' }
    }

  }

}
