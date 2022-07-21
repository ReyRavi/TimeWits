(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-attendance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/attendance/attendance.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attendance/attendance.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Attendance</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div padding>\n      <div style=\"text-align: center\">\n        <ion-button shape=\"round\" color=\"success\"(click)=\"capture(true)\" style=\"    width: 80%;\n        height: 165px;\n        margin-top: 30px;\n        font-size: 35px;\" >In-Time</ion-button>\n      </div>\n    </div>\n    <div padding>\n      <div style=\"text-align: center\">\n        <ion-button shape=\"round\" color=\"danger\" (click)=\"capture(false)\" style=\"    width: 80%;\n        height: 165px;\n        margin-top: 55px;font-size: 35px;\" >Out-Time</ion-button>\n      </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/attendance/attendance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.module.ts ***!
  \*************************************************/
/*! exports provided: AttendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePageModule", function() { return AttendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendance.page */ "./src/app/attendance/attendance.page.ts");







const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]
    }
];
let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_6__["AttendancePage"]],
        entryComponents: [],
    })
], AttendancePageModule);



/***/ }),

/***/ "./src/app/attendance/attendance.page.scss":
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n  margin-top: 50px;\n}\n\n.register_link {\n  margin-left: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkZi9Eb2N1bWVudHMvb3RoZXJhcHBzL1RpbWV3aXRzL3NyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmltZ2NvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOjI0cHggMCAxMnB4IDA7XG59XG5cblxuaW1nLmF2YXRhcntcbiAgICB3aWR0aDo0MCU7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xufVxuLnJlZ2lzdGVyX2xpbmt7XG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xufSIsIi5pbWdjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcbn1cblxuaW1nLmF2YXRhciB7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnJlZ2lzdGVyX2xpbmsge1xuICBtYXJnaW4tbGVmdDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/attendance/attendance.page.ts":
/*!***********************************************!*\
  !*** ./src/app/attendance/attendance.page.ts ***!
  \***********************************************/
/*! exports provided: AttendancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendancePage", function() { return AttendancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _err_popup_err_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../err-popup/err-popup.component */ "./src/app/err-popup/err-popup.component.ts");









let AttendancePage = class AttendancePage {
    constructor(loadingController, camera, router, modalCtrl, httpClient, actionSheetController, formBuilder, modalController, toastController) {
        this.loadingController = loadingController;
        this.camera = camera;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.actionSheetController = actionSheetController;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    capture(isEntry) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 10,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true
                // allowEdit: true
            };
            const imageData = yield this.camera.getPicture(options);
            let body = { photo: imageData, isEntry };
            this.httpClient.post('http://15.207.71.113:3000/login/search_face', body).subscribe(data => {
                // if (data != null) {
                this.attendanceList = data;
                if (this.attendanceList.code == 200) {
                    this.httpClient.post('http://15.207.71.113:3000/users/attendance', body).subscribe(data => {
                        // if (data != null) {
                        this.attendanceList1 = data;
                        // alert(JSON.stringify(this.attendanceList1))
                        if (this.attendanceList1.code == 200) {
                            this.goToConfirmcomponent();
                        }
                        else if ((this.attendanceList1.code == 404)) {
                            this.goToNonConfirmcomponent('Error Network Connection', 'error');
                        }
                        // }else {
                        // }
                    });
                }
                else if (this.attendanceList.code == 404) {
                    this.goToNonConfirmcomponent('Face Not Match', 'cancel');
                }
                else {
                    this.goToNonConfirmcomponent('No Face Found', 'error');
                }
            });
            return imageData;
        });
    }
    goToConfirmcomponent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"],
                cssClass: 'ConfirmComponent',
                componentProps: {
                    message: this.attendanceList1.message,
                    code: this.attendanceList1.code,
                }
            });
            modal.onDidDismiss().then(data => {
                if (data.data != null) {
                }
            });
            return yield modal.present();
        });
    }
    goToNonConfirmcomponent(data, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _err_popup_err_popup_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
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
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No Face Found',
                duration: 2000,
            });
            toast.present();
        });
    }
};
AttendancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AttendancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-attendance',
        template: __webpack_require__(/*! raw-loader!./attendance.page.html */ "./node_modules/raw-loader/index.js!./src/app/attendance/attendance.page.html"),
        styles: [__webpack_require__(/*! ./attendance.page.scss */ "./src/app/attendance/attendance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], AttendancePage);



/***/ })

}]);
//# sourceMappingURL=attendance-attendance-module-es2015.js.map