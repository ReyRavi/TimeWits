(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addems-addems-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addems/addems.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addems/addems.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Joinee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form #loginForm=ngForm (ngSubmit)=\"register()\">\n    <ion-list *ngIf=!Isform1>\n      <ion-list-header>Basic Info</ion-list-header>\n      <ion-item>\n        <ion-label position=\"floating\" required>Full Name<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required type=\"name\" name=\"empName\" [(ngModel)]=\"form.empName\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Father Name<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.fatherName\" name=\"fatherName\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Mobile Number<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.mobNumber\" name=\"mobNumber\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\" required>Date of Birth<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" pickerFormat=\"DD/MM/YYYY\" mode=\"ios\" [(ngModel)]=\"form.empDob\" required\n          name=\"empDob\">\n        </ion-datetime>\n        <ion-icon style=\"zoom: 1.3;\" slot=\"end\" name=\"md-calendar\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Gender<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-select mode=\"ios\" interface=\"popover\" [(ngModel)]=\"form.gender\" required name=\"gender\" required>\n          <ion-select-option selected value='Female'>Female</ion-select-option>\n          <ion-select-option value='Male'>Male</ion-select-option>\n          <ion-select-option value='Others'>Others</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Marital Status<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-select mode=\"ios\" interface=\"popover\" [(ngModel)]=\"form.martialStatus\" required name=\"martialStatus\"\n          required>\n          <ion-select-option selected value='Married'>Married</ion-select-option>\n          <ion-select-option value='Single'>Single</ion-select-option>\n          <ion-select-option value='Others'>Others</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-list-header>Location Info</ion-list-header>\n\n      <ion-item>\n        <ion-label position=\"floating\">Full Address<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-textarea required [(ngModel)]=\"form.address\" name=\"address\" required></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">District/City<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.location\" name=\"location\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Pincode<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.pincode\" name=\"pincode\" required></ion-input>\n      </ion-item>\n\n      <ion-list-header>Nominee Info</ion-list-header>\n      <ion-item>\n        <ion-label position=\"floating\">Nominee Name<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.nomineeName\" name=\"nomineeName\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Nominee Relation<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.nomineeRelationType\" name=\"nomineeRelationType\" required></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf=Isform1>\n      <ion-list-header>Employement Info</ion-list-header>\n      <ion-item>\n        <ion-label position=\"floating\">Employee Type<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-select mode=\"ios\" interface=\"popover\" [(ngModel)]=\"form.empType\" required name=\"empType\" required>\n          <ion-select-option selected value='roll'>On Roll</ion-select-option>\n          <ion-select-option value='contract'>Contract</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"loginForm?.value?.empType =='contract'\">\n        <ion-label position=\"floating\">Employee Contractor Name<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.empContractorName\" name=\"empContractorName\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Reporting Manager<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.reportingNumber\" name=\"reportingNumber\" required></ion-input>\n      </ion-item>\n\n      <ion-list-header>Employement Proofs</ion-list-header>\n      <ion-item>\n        <ion-label position=\"floating\">PAN<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.panNumber\" name=\"panNumber\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Aadhar Number<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.aadharNumber\" name=\"aadharNumber\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">UID / PF Number<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.uidPfNumber\" name=\"uidPfNumber\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">ESI number<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.esiNumber\" name=\"esiNumber\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Address Proof Image<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.addressProcessImage\" name=\"addressProcessImage\" required></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label position=\"floating\">Pan Image<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.Pan_image\" name=\"Pan_image\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Aadhar Image<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.aadhar_image\" name=\"aadhar_image\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Pf card image<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.pf_card_image\" name=\"pf_card_image\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Esi Card Image<ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required [(ngModel)]=\"form.esi_card_image\" name=\"esi_card_image\" required></ion-input>\n      </ion-item> -->\n\n\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <div style=\"text-align: center;\">\n            <img src=\"assets/imgs/face_recog_102.JPG\" *ngIf=\"!form.empImage\">\n            <img [src]=\"base64Image\" *ngIf=\"form.empImage\">\n            <ion-button (click)=\"capture()\" style=\"width: 50%;\" [disabled]=\"!loginForm.valid\">\n              Upload An Image\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n\n    <ion-footer padding style=\"text-align: center;border: 0px;\" no-border>\n      <ion-button *ngIf=!Isform1 style=\"width: 75%;\" shape=\"round\" (click)=\"next()\">\n        Next</ion-button>\n      <ion-button *ngIf=Isform1 style=\"width: 75%;\" shape=\"round\" color=\"primary\" style=\"margin-top:20px;\" type=\"submit\">\n        Register &nbsp;<ion-icon name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-footer>\n\n\n  </form>\n\n  <!-- <div class=\"image_holder\" #registerImage style=\"display:none\">\n    <img src=\"{{form.empImage}}\" id=\"user_image\" alt=\"\" style=\"width:50px;height:50px;\" srcset=\"\">\n  </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/addems/addems.module.ts":
/*!*****************************************!*\
  !*** ./src/app/addems/addems.module.ts ***!
  \*****************************************/
/*! exports provided: AddemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddemsPageModule", function() { return AddemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addems_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addems.page */ "./src/app/addems/addems.page.ts");







const routes = [
    {
        path: '',
        component: _addems_page__WEBPACK_IMPORTED_MODULE_6__["AddemsPage"]
    }
];
let AddemsPageModule = class AddemsPageModule {
};
AddemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_addems_page__WEBPACK_IMPORTED_MODULE_6__["AddemsPage"]]
    })
], AddemsPageModule);



/***/ }),

/***/ "./src/app/addems/addems.page.scss":
/*!*****************************************!*\
  !*** ./src/app/addems/addems.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  font-weight: bold;\n}\n\nimg {\n  height: 150px;\n  width: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkZi9Eb2N1bWVudHMvb3RoZXJhcHBzL1RpbWV3aXRzL3NyYy9hcHAvYWRkZW1zL2FkZGVtcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGVtcy9hZGRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRlbXMvYWRkZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuaW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSIsImlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addems/addems.page.ts":
/*!***************************************!*\
  !*** ./src/app/addems/addems.page.ts ***!
  \***************************************/
/*! exports provided: AddemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddemsPage", function() { return AddemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert/alert.service */ "./src/app/services/alert/alert.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _err_popup_err_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../err-popup/err-popup.component */ "./src/app/err-popup/err-popup.component.ts");











let AddemsPage = class AddemsPage {
    constructor(actionSheetController, camera, filechooser, loadingController, alert, authService, router, httpClient, toastController, modalController) {
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.filechooser = filechooser;
        this.loadingController = loadingController;
        this.alert = alert;
        this.authService = authService;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.modalController = modalController;
        this.Isform1 = false;
        this.Isform2 = false;
        this.form = {
            empName: '',
            fatherName: '',
            mobNumber: '',
            empDob: '',
            gender: '',
            martialStatus: '',
            address: '',
            location: '',
            pincode: '',
            nomineeName: '',
            nomineeRelationType: '',
            empType: '',
            empContractorName: '',
            reportingNumber: '',
            panNumber: '',
            aadharNumber: '',
            uidPfNumber: '',
            esiNumber: '',
            addressProcessImage: '',
            empImage: '',
        };
        this.RegisterList = [];
    }
    ngOnInit() {
    }
    next() {
        this.Isform1 = true;
    }
    loadActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let buttons = [{
                    text: 'Camera',
                    role: 'destructive',
                    icon: 'camera',
                    handler: () => {
                        this.capture();
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }];
        });
    }
    capture() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 20,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true
                // allowEdit: true
            };
            const imageData = yield this.camera.getPicture(options);
            this.form.empImage = imageData;
            this.base64Image = `data:image/jpeg;base64,${imageData}`;
            return this.form.empImage;
        });
    }
    register() {
        let body = {};
        body = this.form;
        this.httpClient.post('http://15.207.71.113:3000/login/register', body).subscribe(data => {
            if (data != null) {
                console.log("Registered Successfully");
                // this.presentToast();
                this.goToConfirmComponent();
            }
            else {
                console.log("Something Went Wrong");
                this.goToNonConfirmcomponent('Something Went Wrong', 'cancel');
                this.presentToast1();
            }
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Registered Successfully',
                duration: 2000,
            });
            toast.present();
        });
    }
    goToConfirmComponent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"],
                cssClass: 'ConfirmComponent',
                componentProps: {
                    message: 'Registered Successfully',
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data != null) {
                }
            });
            return yield modal.present();
        });
    }
    presentToast1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Something Went Wrong',
                duration: 2000,
            });
            toast.present();
        });
    }
    goToNonConfirmcomponent(data, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _err_popup_err_popup_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                cssClass: 'ConfirmComponent',
                componentProps: {
                    message: data,
                    type: type
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data != null) {
                }
            });
            return yield modal.present();
        });
    }
};
AddemsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerImage', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AddemsPage.prototype, "registerImage", void 0);
AddemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addems',
        template: __webpack_require__(/*! raw-loader!./addems.page.html */ "./node_modules/raw-loader/index.js!./src/app/addems/addems.page.html"),
        styles: [__webpack_require__(/*! ./addems.page.scss */ "./src/app/addems/addems.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], AddemsPage);



/***/ }),

/***/ "./src/app/services/alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlert(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                subHeader: subheader,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



/***/ })

}]);
//# sourceMappingURL=addems-addems-module-es2015.js.map