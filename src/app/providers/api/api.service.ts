import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { throwError, from } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Toast } from '@ionic-native/toast/ngx';
import { LoadingController, NavController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { tap, map, catchError } from "rxjs/operators";
import { NetworkService, ConnectionStatus } from '../network/network.service';
import { DatePipe } from '@angular/common';
import { Sim } from '@ionic-native/sim/ngx';
// import { OfflineComponent } from 'src/app/offline/offline.component';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */

declare function require(path: string): any;
const CryptoJS = require("crypto-js");
const API_STORAGE_KEY = 'JoinDFoodie';

@Injectable({
  providedIn: 'root'
})
export class Api {

  // url: string = 'http://122.165.179.208:';
  url: string = '';
  noOfDays: number;
  public interval: any;
  remainingTime: string = '00:06';
  public urlinterval: any;
  public logoutinterval: any;

  constructor(public http: Http, public httpClient: HttpClient, private networkService: NetworkService,
    private toast: Toast, private loadingController: LoadingController,
    private storage: Storage,
    private navCtrl: NavController,
    public alertController: AlertController,
    private datePipe: DatePipe, private sim: Sim,
    private modalCtrl: ModalController) {
    this.noOfDays = this.daysInMonth(new Date().getMonth(), new Date().getFullYear());

    //localstorage ip
    // this.url = localStorage.getItem('ipUrl');

    //production ip
    // this.url = 'http://jointfamly.com';

    //testing ip
    // this.url = 'http://13.71.85.33:8000';

    //local ip
    this.url = 'http://192.168.1.10:8000';

    // Prodcution
    // Storage Account
    // jdfoodie01

    // Connection String
    // DefaultEndpointsProtocol=https;AccountName=jdfoodie01;AccountKey=XBfQXifgTmjxLrCYrZvE8D+qYW4LD3WQ3B3HpffxtZfws8aj+L2wVVOPYnPHymmNBIcXHj+b2oxjXDxT4ZJn5g==;EndpointSuffix=core.windows.net
  
    // Test
    // Storage Account
    // testjdfood

    // Connection String
    // DefaultEndpointsProtocol=https;AccountName=testjdfood;AccountKey=88TaUfv/rF5LTwRG/u4sbbaE2vCPKUDGrYfVAOWtlXTc/3KkwiRgNcncxuWFmSEIrUnSp9XNc0odgdRISwiqIg==;EndpointSuffix=core.windows.net
  }

  get(endpoint: string, params?: any, storageKey?: any, reqOpts?: any): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      if (storageKey != null && storageKey != undefined && storageKey != '') {
        // Return the cached data from Storage
        return from(this.getLocalData(storageKey));
      } else {
        // console.log('You are now Offline')
        // this.presentToast('You are now Offline');
        // this.openOflineComponent();
        // window.location.reload();
        return;
      }
    } else {
      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams()
        };
      }
      // Support easy query params for GET requests
      if (params) {
        reqOpts.params = new HttpParams();
        for (let k in params) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
      reqOpts.params = reqOpts.params.set("jwt", localStorage.getItem("jwttoken"));
      return this.httpClient.get(this.url + '/' + endpoint, reqOpts)
        // .pipe(
        //   // retry(1), // retry a failed request up to 3 times
        //   catchError(this.handleError)
        // );
        .pipe(
          // map(res => res['data']),
          tap(res => {
            if (res != null && storageKey != null && storageKey != undefined && storageKey != '')
              this.setLocalData(storageKey, res);
          }),
          catchError(this.handleError)
        );
    }
  }

  post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      // this.presentToast('You are now Offline');
      // this.openOflineComponent();
      // window.location.reload();
      return;
    } else {
      if (!reqOpts) {
        reqOpts = {
          params: new HttpParams()
        };
      }
      reqOpts.params = new HttpParams();
      reqOpts.params = reqOpts.params.set("jwt", localStorage.getItem("jwttoken"));
      return this.httpClient.post(this.url + "/" + endpoint, JSON.stringify(body), reqOpts)
        .pipe(
          // retry(1), // retry a failed request up to 3 times
          catchError(this.handleError)
        );
      // .map((res: Response) =>res.json())
      // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
  }

  postParams(endpoint: string, httpParams: HttpParams, reqOpts?: any): Observable<any> {
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {
      this.presentToast('You are now Offline');
      return;
    } else {
      return this.httpClient.post(this.url + endpoint, httpParams, reqOpts)
        .pipe(
          // retry(1), // retry a failed request up to 3 times
          catchError(this.handleError)
        );
      // .map((res: Response) =>res.json())
      // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.httpClient.put(this.url + '/' + endpoint, body, reqOpts)
      .pipe(
        // retry(1), // retry a failed request up to 3 times
        catchError(this.handleError)
      );
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.httpClient.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.httpClient.patch(this.url + '/' + endpoint, body, reqOpts);
  }

  private handleError(error: HttpErrorResponse) {
    document.getElementById('loading').style.display = "none";
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      console.log("Internal Server Error");
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      console.log("Server was down")
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  public presentToast(msg: any) {

    this.toast.show(msg, '2000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

  public presentLongToast(msg: any) {

    this.toast.show(msg, '6000000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }

  // Function To calculate time difference between two dates and return time difference as string
  public calculateTimeDifference(date: Date) {
    let currentDate = new Date();
    let diffinMillisec = currentDate.getTime() - date.getTime();
    let diffinMins = Math.round(Math.abs(diffinMillisec / (1000 * 60)));
    let diffinHrs: any;
    let diffindays: any;
    let diffinMonths: any;
    let diifInYears: any;
    let reutnString: string;
    if (diffinMins >= 60) {
      diffinHrs = Math.round(Math.abs(diffinMins / 60));
      if (diffinHrs >= 24) {
        diffindays = Math.round(Math.abs(diffinHrs / 24));
        if (diffindays >= this.noOfDays) {
          diffinMonths = Math.round(Math.abs(diffindays / this.noOfDays));
          if (diffinMonths >= 12) {
            let daysInFeb = this.daysInMonth(1, new Date().getFullYear())
            let daysOfYear: any
            if (daysInFeb == 29) {
              diifInYears = Math.round(Math.abs(diffindays / 366));
            } else {
              diifInYears = Math.round(Math.abs(diffindays / 365));
            }
            if (diifInYears > 1)
              reutnString = diifInYears + '' + ' Years Ago';
            else
              reutnString = diifInYears + '' + ' Year Ago';
          } else {
            if (diffinMonths > 1)
              reutnString = diffinMonths + '' + ' Months Ago';
            else
              reutnString = diffinMonths + '' + ' Month Ago';
          }
        } else if (diffindays < this.noOfDays) {
          if (diffindays > 1)
            reutnString = diffindays + '' + ' Days Ago';
          else
            reutnString = diffindays + '' + ' Day Ago';

        }
      } else if (diffinHrs < 24) {
        if (diffinHrs > 1)
          reutnString = diffinHrs + '' + ' Hrs Ago';
        else
          reutnString = diffinHrs + '' + ' Hr Ago';

      }
    } else if (diffinMins < 60) {
      if (diffinMins > 1)
        reutnString = diffinMins + '' + ' Mins Ago';
      else if (diffinMins < 1)
        reutnString = ' Just Now';
      else
        reutnString = diffinMins + '' + ' Min Ago';

    }
    return reutnString;
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }


  // dateToSavingStringFormatConvertion(date: Date) {
  //   let tempDate: any = date.getDate();
  //   let month: any = date.getMonth() + 1;
  //   let hours: any = date.getHours();
  //   let minutes: any = date.getMinutes();
  //   let seconds: any = date.getSeconds();
  //   if (tempDate <= 9) {
  //     tempDate = '0' + tempDate;
  //   }
  //   if (month <= 9) {
  //     month = '0' + month;
  //   }
  //   if (hours <= 9) {
  //     hours = '0' + hours;
  //   }
  //   if (minutes <= 9) {
  //     minutes = '0' + minutes;
  //   }
  //   if (seconds <= 9) {
  //     seconds = '0' + seconds;
  //   }
  //   return date.getFullYear() + '-' + month + '-' + tempDate + ' ' + hours + ':' + minutes + ':' + seconds;
  // }

  dateToSavingStringFormatConvertion(currentDate: Date) {
    let datewithouttimezone: Date = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate(), currentDate.getUTCHours(), currentDate.getUTCMinutes(), currentDate.getUTCSeconds());
    return this.datePipe.transform(datewithouttimezone, 'yyyy-MM-dd HH:mm:ss');
  }

  displayDate(value: any) {
    let localdate = new Date(value)
    var newDate = new Date(localdate.getTime() - localdate.getTimezoneOffset() * 60 * 1000);
    return newDate;
  }


  modifyStringDate(date: any, duration: number, field: string) {
    if (field == 'seconds') {
      let dateTime = date.split(' ');
      let time = dateTime[1].split(':');
      time[2] = (parseInt(time[2]) + duration);
      return dateTime[0] + ' ' + time[0] + ':' + time[1] + ':' + time[2];
    }
  }

  convertDateToString(date: Date) {
    let tempDate: any = date.getDate();
    let month: any = date.getMonth() + 1;
    if (tempDate <= 9) {
      tempDate = '0' + tempDate;
    }
    if (month <= 9) {
      month = '0' + month;
    }
    return date.getFullYear() + '-' + month + '-' + tempDate;
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
    });
    await loading.present();
  }


  async dismissLoading() {
    this.loadingController.dismiss();
  }

  private setLocalData(key, data) {
    this.storage.set(`${API_STORAGE_KEY}-${key}`, data);
  }

  // Get cached API result
  private getLocalData(key) {
    return this.storage.get(`${API_STORAGE_KEY}-${key}`);
  }


  async generateJwt(body, callback) {
    let header = {
      "alg": "HS256",
      "typ": "JWT"
    };

    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = this.base64url(stringifiedHeader);

    let crytoData = {
      "iss": body.mobileNumber + body.deviceId + body.appId,
    };

    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(crytoData));
    let encodedData = this.base64url(stringifiedData);

    let token = encodedHeader + "." + encodedData;

    var secret = body.otp + body.mobileNumber + body.deviceId;

    var signature = CryptoJS.HmacSHA256(token, secret);
    signature = this.base64url(signature);

    var signedToken = token + "." + signature;
    console.log("Tocken  :: " + signedToken);
    callback(signedToken);
  }

  base64url(source) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  }

  getDynamicUrls(callback) {
    this.get("6d2e110bf75236ec7cccd77a10cca204df47a46739657f95f1f449f81a20de3bbe2153f1d6e843ff02bc16143ac5b53d6028fe5c6d117c670d09a4384a7dd453").subscribe(resp => {
      let urls: any = resp;
      if (urls != null) {
        if (urls.length != 0) {
          urls.forEach(element => {
            let index = urls.indexOf(element);
            if (index == urls.length - 1) {
              localStorage.setItem("urlExpiry", element.expiry);
            }
            // console.log(element.key + " ->" + element.url)
            localStorage.setItem(element.key, element.url);
          });
          callback(resp);
        }
        else {
          this.presentAlertConfirm()
          console.log("server maintenance")
        }
      } else {
        console.log("Server is not responding")
        callback(null);
      }

    });

  }

  // getDynamicUrls(callback) {
  //   console.log('getDynamicUrls')
  //   this.get("6d2e110bf75236ec7cccd77a10cca204df47a46739657f95f1f449f81a20de3bbe2153f1d6e843ff02bc16143ac5b53d6028fe5c6d117c670d09a4384a7dd453").subscribe(resp => {
  //     let urls: any = resp;
  //     if(urls != null){
  //       if(urls.length !=0){
  //         callback(resp);
  //         urls.forEach(element => {
  //           let index = urls.indexOf(element);
  //           if (index == urls.length - 1) {
  //             localStorage.setItem("urlExpiry", element.expiry);
  //           }
  //           // console.log(element.key + " ->" + element.url)
  //           localStorage.setItem(element.key, element.url);
  //         });
  //       }else{
  //         // this.
  //         console.log("Server Maintanance")
  //       }
  //     }else {
  //       console.log("Server is not responding")
  //     }

  //   });

  // }

  // checkUrlExpiry(callback) {
  //   let urlExpiryTime: any = new Date(localStorage.getItem("urlExpiry"));
  //   // console.log(urlExpiryTime);
  //   // this.getDynamicUrls();

  //   if (urlExpiryTime == 'null' || urlExpiryTime == null || urlExpiryTime == undefined || urlExpiryTime == '' || urlExpiryTime == 'Invalid Date' || urlExpiryTime < new Date()) {
  //     clearInterval(this.urlinterval);
  //     this.urlinterval = setInterval(() => {
  //       this.checkUrlExpiry(result=>{

  //       })
  //     }, 1000);
  //     this.getDynamicUrls(result=>{
  //       callback();
  //     });
  //   }else{
  //     callback();
  //   }
  // }


  logOutCheck(profileRid: string) {
    if (localStorage.getItem('DeviceId') != 'null' && localStorage.getItem('DeviceId') != null && localStorage.getItem('DeviceId') != undefined && localStorage.getItem('DeviceId') != '') {
      let params: any = { profileRid: profileRid, deviceId: localStorage.getItem('DeviceId'), appName: 'JoinDFoodie', pageName: 'homePage' };
      let url = localStorage.getItem('14-254');
      this.get(url, params).subscribe(response => {
        // this.api.get("8095/api/notification/signinconfig", params).subscribe(response => {
        if (response != null) {
          if (response.length == 0) {
            clearInterval(this.logoutinterval);
            localStorage.removeItem('otp');
            localStorage.removeItem('profile');
            localStorage.removeItem('Local_Notifications');
            this.storage.remove('JOINDFAME-NEWSFEED');
            localStorage.removeItem('pin')
            localStorage.removeItem('isPin')
            localStorage.removeItem('pinModules')
            this.presentAlert();
          }
        }
      });
    }
  }

  async presentAlert() {
    const alertCtrl = await this.alertController.create({
      header: 'Logging Out in - ' + this.remainingTime,
      mode: 'ios',
      message: 'You have already logged in some other device..Kindly please check',
      backdropDismiss: false
    });
    let timeLeft: any = 5;
    this.interval = setInterval(() => {
      this.remainingTime = '00' + ':0' + timeLeft;
      alertCtrl.header = 'Logging Out in - ' + this.remainingTime;
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
    setTimeout(() => {
      alertCtrl.dismiss();
      this.navCtrl.navigateRoot("/login");
    }, 6000)
    await alertCtrl.present();
  }

  findCurrentCountry(callback) {
    this.sim.getSimInfo().then(

      (info) => this.getCountries(info.countryCode, result => {
        callback(result);
      }),
      (err) => console.log('Unable to get sim info: ', err)
    );

    this.sim.hasReadPermission().then(
      // (info) => alert(JSON.stringify(info))
    );

    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );
  }

  getCountries(alphaCode, callback) {
    let params = { scroll: "alphaCode", alphaCode: alphaCode };
    let url = localStorage.getItem('1-353');
    this.get(url, params).subscribe(response => {
      // this.api.get("8082/api/users/countries",params) .subscribe(response => {
      if (response != null) {
        if (response.length > 0) {
          callback(response[0])
          // this.selectedCountry = response[0];
          // this.login.patchValue({
          //   countryCode:this.selectedCountry.countryCodes
          // })
        }
      }
    });
  }

  // async openOflineComponent() {
  //   const modal: HTMLIonModalElement =
  //     await this.modalCtrl.create({
  //       component: OfflineComponent,
  //       backdropDismiss: false,
  //       cssClass: "offlineMode"
  //     });
  //   await modal.present();
  // }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Maintenance Break',
      message: 'Sorry, the server are under maintenance. Please try again later',
      mode: 'ios',
      buttons: [
        {
          text: 'Try Later',
          handler: () => {
            navigator["app"].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }
}
