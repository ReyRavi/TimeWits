(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectmanagement-projectmanagement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/projectmanagement/projectmanagement.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projectmanagement/projectmanagement.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div>\n    <ion-buttons class=\"back gradient-text\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <img src=\"/assets/imgs/ComingSoon.gif\" class=\"img\">\n    <p class=\"gradient-text\">We Are Launching Soon! Follow Us For Updates...</p>\n  \n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/projectmanagement/projectmanagement.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/projectmanagement/projectmanagement.module.ts ***!
  \***************************************************************/
/*! exports provided: ProjectmanagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectmanagementPageModule", function() { return ProjectmanagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projectmanagement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectmanagement.page */ "./src/app/projectmanagement/projectmanagement.page.ts");







const routes = [
    {
        path: '',
        component: _projectmanagement_page__WEBPACK_IMPORTED_MODULE_6__["ProjectmanagementPage"]
    }
];
let ProjectmanagementPageModule = class ProjectmanagementPageModule {
};
ProjectmanagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_projectmanagement_page__WEBPACK_IMPORTED_MODULE_6__["ProjectmanagementPage"]]
    })
], ProjectmanagementPageModule);



/***/ }),

/***/ "./src/app/projectmanagement/projectmanagement.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/projectmanagement/projectmanagement.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.back {\n  padding-right: 305px;\n  -webkit-animation-name: moveInLeft;\n          animation-name: moveInLeft;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n.inp {\n  text-align: center;\n  color: orangered;\n  font-size: 20px;\n  border-radius: 25px;\n  margin: 20px;\n  margin-top: -10px;\n  -webkit-animation-name: moveInRight;\n          animation-name: moveInRight;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\nion-button {\n  width: 35%;\n  margin-left: 105px;\n  -webkit-animation-name: moveInLeft;\n          animation-name: moveInLeft;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\np {\n  color: black;\n  padding-left: 10px;\n  font-family: cursive;\n  letter-spacing: 9px;\n  text-align: center;\n  -webkit-animation-name: moveInLeft;\n          animation-name: moveInLeft;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n.img {\n  padding: 25px;\n  margin-top: 30%;\n  -webkit-animation-name: moveInRight;\n          animation-name: moveInRight;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100px);\n            transform: translateX(-100px);\n  }\n  80% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100px);\n            transform: translateX(100px);\n  }\n  80% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pkZi9Eb2N1bWVudHMvb3RoZXJhcHBzL1RpbWV3aXRzL3NyYy9hcHAvcHJvamVjdG1hbmFnZW1lbnQvcHJvamVjdG1hbmFnZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9qZWN0bWFuYWdlbWVudC9wcm9qZWN0bWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0VKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBR0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDQUo7O0FER0E7RUFDSTtJQUVHLFVBQUE7SUFDQSxxQ0FBQTtZQUFBLDZCQUFBO0VDREw7RURHRTtJQUVFLG1DQUFBO1lBQUEsMkJBQUE7RUNGSjtFRElFO0lBRUksVUFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNITjtBQUNGOztBRFhBO0VBQ0k7SUFFRyxVQUFBO0lBQ0EscUNBQUE7WUFBQSw2QkFBQTtFQ0RMO0VER0U7SUFFRSxtQ0FBQTtZQUFBLDJCQUFBO0VDRko7RURJRTtJQUVJLFVBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJO0lBRUcsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNMTDtFRE9FO0lBRUUsb0NBQUE7WUFBQSw0QkFBQTtFQ05KO0VEUUU7SUFFSSxVQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtFQ1BOO0FBQ0Y7O0FEUEE7RUFDSTtJQUVHLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDTEw7RURPRTtJQUVFLG9DQUFBO1lBQUEsNEJBQUE7RUNOSjtFRFFFO0lBRUksVUFBQTtJQUNBLCtCQUFBO1lBQUEsdUJBQUE7RUNQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdG1hbmFnZW1lbnQvcHJvamVjdG1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uYmFja3tcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMDVweDtcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZUluTGVmdDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLmlucHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJblJpZ2h0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbmlvbi1idXR0b257XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW4tbGVmdDogMTA1cHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJbkxlZnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxucHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGxldHRlci1zcGFjaW5nOiA5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5MZWZ0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5pbWd7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgLy8gcGFkZGluZy10b3A6IDgwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogODBweDtcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZUluUmlnaHQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5MZWZ0e1xuICAgIDAlXG4gICAge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gICAgfVxuICAgIDgwJVxuICAgIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KVxuICAgIH1cbiAgICAxMDAlXG4gICAge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodHtcbiAgICAwJVxuICAgIHtcbiAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gICAgfVxuICAgIDgwJVxuICAgIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweClcbiAgICB9XG4gICAgMTAwJVxuICAgIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMClcbiAgICB9XG59XG4iLCJkaXYge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFjayB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwNXB4O1xuICBhbmltYXRpb24tbmFtZTogbW92ZUluTGVmdDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5pbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJblJpZ2h0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMDVweDtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJbkxlZnQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5wIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBsZXR0ZXItc3BhY2luZzogOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlSW5MZWZ0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuLmltZyB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDMwJTtcbiAgYW5pbWF0aW9uLW5hbWU6IG1vdmVJblJpZ2h0O1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5MZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/projectmanagement/projectmanagement.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/projectmanagement/projectmanagement.page.ts ***!
  \*************************************************************/
/*! exports provided: ProjectmanagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectmanagementPage", function() { return ProjectmanagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectmanagementPage = class ProjectmanagementPage {
    constructor() { }
    ngOnInit() {
    }
};
ProjectmanagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectmanagement',
        template: __webpack_require__(/*! raw-loader!./projectmanagement.page.html */ "./node_modules/raw-loader/index.js!./src/app/projectmanagement/projectmanagement.page.html"),
        styles: [__webpack_require__(/*! ./projectmanagement.page.scss */ "./src/app/projectmanagement/projectmanagement.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectmanagementPage);



/***/ })

}]);
//# sourceMappingURL=projectmanagement-projectmanagement-module-es2015.js.map