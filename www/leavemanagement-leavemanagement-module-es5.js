(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leavemanagement-leavemanagement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/leavemanagement/leavemanagement.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leavemanagement/leavemanagement.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div>\n    <ion-buttons class=\"back gradient-text\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"/assets/imgs/ComingSoon.gif\" class=\"img\">\n    <p class=\"gradient-text\">We Are Launching Soon! Follow Us For Updates...</p>\n  \n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/leavemanagement/leavemanagement.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/leavemanagement/leavemanagement.module.ts ***!
  \***********************************************************/
/*! exports provided: LeavemanagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavemanagementPageModule", function() { return LeavemanagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leavemanagement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leavemanagement.page */ "./src/app/leavemanagement/leavemanagement.page.ts");







var routes = [
    {
        path: '',
        component: _leavemanagement_page__WEBPACK_IMPORTED_MODULE_6__["LeavemanagementPage"]
    }
];
var LeavemanagementPageModule = /** @class */ (function () {
    function LeavemanagementPageModule() {
    }
    LeavemanagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leavemanagement_page__WEBPACK_IMPORTED_MODULE_6__["LeavemanagementPage"]]
        })
    ], LeavemanagementPageModule);
    return LeavemanagementPageModule;
}());



/***/ }),

/***/ "./src/app/leavemanagement/leavemanagement.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/leavemanagement/leavemanagement.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.back {\n  padding-right: 305px;\n  -webkit-animation-name: moveInLeft;\n          animation-name: moveInLeft;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n.inp {\n  text-align: center;\n  color: orangered;\n  font-size: 20px;\n  border-radius: 25px;\n  margin: 20px;\n  margin-top: -10px;\n  -webkit-animation-name: moveInRight;\n          animation-name: moveInRight;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\nion-button {\n  width: 35%;\n  margin-left: 105px;\n  -webkit-animation-name: moveInLeft;\n          animation-name: moveInLeft;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\np {\n  color: black;\n  padding-left: 10px;\n  font-family: cursive;\n  letter-spacing: 9px;\n  text-align: center;\n  -webkit-animation-name: moveInLeft;\n          animation-name: moveInLeft;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n.img {\n  padding: 25px;\n  margin-top: 30%;\n  -webkit-animation-name: moveInRight;\n          animation-name: moveInRight;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkZi9Eb2N1bWVudHMvb3RoZXJhcHBzL1RpbWV3aXRzL3NyYy9hcHAvbGVhdmVtYW5hZ2VtZW50L2xlYXZlbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xlYXZlbWFuYWdlbWVudC9sZWF2ZW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVFO0VBQ0Usb0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNFSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0VKOztBRENFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDRUo7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUdBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0FKOztBREdFO0VBQ0U7SUFFRyxVQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ0RMO0VER0U7SUFFRSxtQ0FBQTtZQUFBLDJCQUFBO0VDRko7RURJRTtJQUVJLFVBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDSE47QUFDRjs7QURYRTtFQUNFO0lBRUcsVUFBQTtJQUNBLHFDQUFBO1lBQUEsNkJBQUE7RUNETDtFREdFO0lBRUUsbUNBQUE7WUFBQSwyQkFBQTtFQ0ZKO0VESUU7SUFFSSxVQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtFQ0hOO0FBQ0Y7O0FETUU7RUFDRTtJQUVHLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDTEw7RURPRTtJQUVFLG9DQUFBO1lBQUEsNEJBQUE7RUNOSjtFRFFFO0lBRUksVUFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNQTjtBQUNGOztBRFBFO0VBQ0U7SUFFRyxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0xMO0VET0U7SUFFRSxvQ0FBQTtZQUFBLDRCQUFBO0VDTko7RURRRTtJQUVJLFVBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlbWFuYWdlbWVudC9sZWF2ZW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmJhY2t7XG4gICAgcGFkZGluZy1yaWdodDogMzA1cHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJbkxlZnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAuaW5we1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZUluUmlnaHQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMDVweDtcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZUluTGVmdDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIFxuICBwe1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJbkxlZnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICBcbiAgLmltZ3tcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAvLyBwYWRkaW5nLXRvcDogODBweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA4MHB4O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5SaWdodDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmVJbkxlZnR7XG4gICAgMCVcbiAgICB7XG4gICAgICAgb3BhY2l0eTogMDtcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcbiAgICB9XG4gICAgODAlXG4gICAge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpXG4gICAgfVxuICAgIDEwMCVcbiAgICB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApXG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmVJblJpZ2h0e1xuICAgIDAlXG4gICAge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcbiAgICB9XG4gICAgODAlXG4gICAge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KVxuICAgIH1cbiAgICAxMDAlXG4gICAge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxuICAgIH1cbiAgfVxuICAiLCJkaXYge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFjayB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwNXB4O1xuICBhbmltYXRpb24tbmFtZTogbW92ZUluTGVmdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5pbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJblJpZ2h0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMDVweDtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJbkxlZnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5wIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBsZXR0ZXItc3BhY2luZzogOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5MZWZ0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuLmltZyB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJblJpZ2h0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5MZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/leavemanagement/leavemanagement.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/leavemanagement/leavemanagement.page.ts ***!
  \*********************************************************/
/*! exports provided: LeavemanagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavemanagementPage", function() { return LeavemanagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeavemanagementPage = /** @class */ (function () {
    function LeavemanagementPage() {
    }
    LeavemanagementPage.prototype.ngOnInit = function () {
    };
    LeavemanagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavemanagement',
            template: __webpack_require__(/*! raw-loader!./leavemanagement.page.html */ "./node_modules/raw-loader/index.js!./src/app/leavemanagement/leavemanagement.page.html"),
            styles: [__webpack_require__(/*! ./leavemanagement.page.scss */ "./src/app/leavemanagement/leavemanagement.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeavemanagementPage);
    return LeavemanagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=leavemanagement-leavemanagement-module-es5.js.map