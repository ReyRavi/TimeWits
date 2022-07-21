(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n  <div class=\"primary\">\n    <div padding style=\"text-align: center;margin-bottom: 25px;\">\n      <div class=\"logo\">\n        <img src=\"assets/imgs/logo.jpeg\" />\n      </div>\n    </div>\n  </div>\n  <form class=\"form\" [formGroup]=\"login\" style=\"margin-top: 35px;\">\n      <ion-item>\n        <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n        <ion-input formControlName=\"employeeNumber\" placeholder=\"Employee Number\" required>\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\n        <ion-input [type]=\"passwordType\" formControlName=\"password\" placeholder=\"Password\" required maxlength=\"20\">\n        </ion-input>\n        <ion-buttons slot=\"end\">\n          <ion-button *ngIf=\"!showPass\" (click)=\"showPassword()\">\n            <ion-icon name=\"eye-off\" style=\"color:darkgray\"></ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"showPass\" (click)=\"showPassword()\">\n            <ion-icon name=\"eye\" style=\"color:darkgray\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n  </form>\n\n    <ion-grid class=\"animate-bottom\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"onLogin()\" [disabled]=\"!login.valid\">\n            <ion-icon slot=\"start\" name=\"log-in\" expand=\"block\"></ion-icon>&nbsp;\n            Login\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-input {\n  border: solid lavender 1px;\n  border-radius: 2px;\n}\n\n.forget_text {\n  margin-top: 10px;\n}\n\n.primary {\n  background: brown;\n  height: 250px;\n  border-bottom-right-radius: 24%;\n  margin: -25px;\n  border-bottom-left-radius: 24%;\n}\n\n.primary ion-icon {\n  zoom: 5;\n  color: white;\n  margin-top: 5px;\n}\n\n.logo img {\n  margin-top: 80px;\n  height: 70px;\n}\n\n.toast {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkZi9Eb2N1bWVudHMvb3RoZXJhcHBzL1RpbWV3aXRzL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBRFNFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNOSjs7QURPSTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xOOztBRGdCSTtFQUtFLGdCQUFBO0VBQ0EsWUFBQTtBQ2pCTjs7QURzQkU7RUFDRSx5QkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi5pdGVtLWlucHV0e1xuICAgIGJvcmRlcjogc29saWQgbGF2ZW5kZXIgMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmZvcmdldF90ZXh0e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4vLyAucHJpbWFyeSB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiBicm93bjsgO1xuLy8gICAgIGhlaWdodDogMjAwcHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI0JTtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNCU7XG4gICAgXG4vLyAgIH1cbiAgLnByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IGJyb3duOyA7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjQlO1xuICAgIG1hcmdpbjogLTI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjQlO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHpvb206IDU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgLmxvZ28ge1xuICAgIC8vIGhlaWdodDogMTIwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogODVweDtcbiAgICAvLyB3aWR0aDogMzAlO1xuICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA2MHB4O1xuICAgIGltZyB7XG4gICAgICAvLyBoZWlnaHQ6IDkwcHg7XG4gICAgICAvLyB3aWR0aDogOTBweDtcbiAgICAgIC8vIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAvLyBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuXG5cbiAgICB9XG4gIH1cbiAgLnRvYXN0e1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgfVxuIiwiaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCBsYXZlbmRlciAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmZvcmdldF90ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBicm93bjtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI0JTtcbiAgbWFyZ2luOiAtMjVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjQlO1xufVxuLnByaW1hcnkgaW9uLWljb24ge1xuICB6b29tOiA1O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmxvZ28gaW1nIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4udG9hc3Qge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






// import { Api } from '../providers/api/api.service';
let LoginPage = class LoginPage {
    constructor(router, fb, httpClient, toastController) {
        this.router = router;
        this.fb = fb;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.showPass = false;
        this.passwordType = 'password';
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            employeeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    onLogin() {
        let body = { employeeNumber: this.login.value.employeeNumber, password: this.login.value.password };
        this.httpClient.post('http://15.207.71.113:3000/login/', body).subscribe(data => {
            if (data != null) {
                this.loginList = data;
                // this.login.reset();
                if (this.loginList.code == 200) {
                    this.presentToast();
                    console.log("Login Successful");
                    this.router.navigate(['/home']);
                }
                else if (this.loginList.code == 404) {
                    this.presentToast1();
                    console.log("Invalid credentials");
                }
            }
        });
    }
    showPassword() {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Login Successful',
                duration: 2000,
            });
            toast.present();
        });
    }
    presentToast1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid credentials',
                duration: 2000,
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map