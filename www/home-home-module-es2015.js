(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"mail\" style=\"zoom:1.3\"></ion-icon>\n        <!-- <ion-icon  name=\"mail-unread-outline\" style=\"zoom:1.3\"></ion-icon> -->\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-content>\n    <div class=\"coverpic_background\" [ngStyle]=\"{'background-image': 'url(' + background + ')'}\"\n      style=\"border-radius: 0px 0px 40px 40px;\">\n      <div id=\"overlay1\" style=\"color:white;text-align: center;\">\n        <!-- <h3 style=\"font-weight: bold;color: linear-gradient(to left, #348285, #54588b);padding: 15px;font-style: italic;\">Welcome to Logicwits</h3> -->\n      </div>\n    </div>\n    <div style=\"text-align: center;\">\n      <ion-grid class=\"home-menu\">\n        <ion-row>\n          <ion-col size=\"6\" text-center *ngFor=\"let mg of managements\" (click)=\"goToPage(mg.url)\">\n            <ion-card mode=\"ios\">\n              <img [src]=\"mg.icon\">\n              <ion-label>\n                <h2 style=\"color: darkslategrey;\n                font-size: 22px;\" text-wrap> {{mg.name}}</h2>\n              </ion-label>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#overlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer;\n  /* Add a pointer on hover */\n  color: white;\n}\n#overlay h4 {\n  font-weight: bold;\n}\np {\n  margin-bottom: 0px;\n  padding: 0;\n}\n.button {\n  width: 100%;\n}\nion-grid ion-card {\n  margin: 5px;\n}\nion-grid h3 {\n  font-weight: bold;\n  color: brown;\n  margin-top: 10px;\n  font-size: 20px;\n}\n.name {\n  margin: 10px 15px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: lato sans-serif;\n  position: absolute;\n  top: 0%;\n  color: white;\n}\n.description {\n  text-align: start;\n  margin: 15px;\n  font-family: monospace;\n  position: absolute;\n  top: 50px;\n  color: white;\n}\n#overlay {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(53, 53, 53, 0.6);\n  position: absolute;\n}\n#not_overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\nimg {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.icon {\n  zoom: 1.5;\n  margin-right: 15px;\n}\n.para {\n  background-color: white;\n  padding: 5px;\n  border-radius: 10px;\n  margin-top: -14px;\n  margin-left: -7px;\n  zoom: 1.3;\n}\n.coverpic_background {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  height: 210px;\n  z-index: 0;\n  margin-top: -17px;\n}\n#overlay1 {\n  width: 100%;\n  height: 100%;\n}\n.home-menu {\n  padding: 10 20px;\n}\n.home-menu ion-card {\n  width: 100%;\n  height: 170px;\n  margin: 0;\n  background: white;\n  padding: 10px;\n  border: 1px solid brown;\n}\n.home-menu img {\n  margin-left: auto;\n  margin-right: auto;\n  width: 50px;\n  margin-top: 5px;\n  zoom: 1.7;\n}\n.home-menu p {\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin: 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkZi9Eb2N1bWVudHMvb3RoZXJhcHBzL1RpbWV3aXRzL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFBWSxvRkFBQTtFQUNaLGVBQUE7RUFBaUIsMkJBQUE7RUFDakIsWUFBQTtBQ01KO0FETEk7RUFDRSxpQkFBQTtBQ09OO0FESkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNPSjtBREpFO0VBQ0UsV0FBQTtBQ09KO0FESEk7RUFDRSxXQUFBO0FDTU47QURKSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0YsZUFBQTtBQ01KO0FERkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDS0o7QURGRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0tKO0FERkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7QUNLSjtBREZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tKO0FERkU7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0FDS0o7QURGRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDTUo7QURKRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ09KO0FERkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0tKO0FERkU7RUFDRSxnQkFBQTtBQ0tKO0FESkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ01OO0FESEk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDS047QURGSTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaDQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgaW9uLWdyaWQge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBicm93bjsgO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIFxuICAgIH1cbiAgfVxuICAubmFtZSB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogbGF0byBzYW5zLXNlcmlmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgI292ZXJsYXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUzLCA1MywgNTMsIDAuNik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAjbm90X292ZXJsYXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgXG4gIC5pY29uIHtcbiAgICB6b29tOiAxLjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5wYXJhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICB6b29tOiAxLjM7XG4gIH1cbiAgLmNvdmVycGljX2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjEwcHg7XG4gICAgei1pbmRleDogMDtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgXG4gIFxuICBcbiAgfVxuICAjb3ZlcmxheTEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmhvbWUtbWVudSB7XG4gICAgcGFkZGluZzogMTAgMjBweDtcbiAgICBpb24tY2FyZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBicm93bjtcbiAgICAgIC8vIGJhY2tncm91bmQ6IGJyb3duOyA7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgem9vbTogMS43O1xuICBcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW46IDEwcHggNXB4O1xuICAgIH1cbiAgfSIsIiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNvdmVybGF5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWdyaWQgaW9uLWNhcmQge1xuICBtYXJnaW46IDVweDtcbn1cbmlvbi1ncmlkIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBicm93bjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubmFtZSB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBsYXRvIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDUzLCA1MywgMC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jbm90X292ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaWNvbiB7XG4gIHpvb206IDEuNTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucGFyYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgem9vbTogMS4zO1xufVxuXG4uY292ZXJwaWNfYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICB6LWluZGV4OiAwO1xuICBtYXJnaW4tdG9wOiAtMTdweDtcbn1cblxuI292ZXJsYXkxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbWUtbWVudSB7XG4gIHBhZGRpbmc6IDEwIDIwcHg7XG59XG4uaG9tZS1tZW51IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTcwcHg7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJyb3duO1xufVxuLmhvbWUtbWVudSBpbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB6b29tOiAxLjc7XG59XG4uaG9tZS1tZW51IHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweCA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        this.managements = [];
        this.background = "/assets/imgs/eat.gif";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.managements = [
            { name: 'Employee Master', description: 'Here you can see the customer information who have subsribed your business.', icon: 'assets/icon/master.svg', url: 'addems' },
            { name: 'Attendance', description: 'Here you can put your food items to the menu of the shop.', icon: 'assets/icon/attendance.svg', url: 'attendance' },
            { name: 'Project Management', description: 'Here you can assign the delivery person and can view about the order.', icon: 'assets/icon/project.svg', url: 'projectmanagement' },
            { name: 'Leave Management', description: 'Here you can put when the order is ready and so that user can self pick-up.', icon: 'assets/icon/leave.svg', url: 'leavemanagement' },
        ];
    }
    // ionViewWillLeave() {
    //   this.routeParams.unsubscribe();
    // }
    goToPage(url) {
        this.router.navigate([url]);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map