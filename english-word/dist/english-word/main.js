(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myContainer{\r\n    background-color: #ff3333;\r\n     padding: 30px;\r\n     justify-content: center;\r\n     margin:auto;\r\n     max-width: 600px;\r\n    margin-top:100px;\r\n}\r\n.h1{\r\n    margin-left: 20px;\r\n    color:white;\r\n}\r\n#word{\r\nwidth:150px;\r\nborder-radius: 30px;\r\ncolor:white;\r\nmargin-left: 20px;\r\n}\r\n#input{\r\n    margin-left: 20px; \r\n}\r\n#paper{\r\n    width: 21rem;\r\n    margin-left: 36px;\r\n    padding-left:10px;\r\n    padding-top:10px;\r\n    padding-bottom:10px;\r\n}\r\n#Definition{\r\n    color: white;\r\n    width: 150px;\r\n   margin-left: 36px;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7S0FDekIsY0FBYztLQUNkLHdCQUF3QjtLQUN4QixZQUFZO0tBQ1osaUJBQWlCO0lBQ2xCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjtBQUVEO0FBQ0EsWUFBWTtBQUNaLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osa0JBQWtCO0NBQ2pCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0dBQ2Qsa0JBQWtCOztDQUVwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzMzMztcclxuICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIG1hcmdpbjphdXRvO1xyXG4gICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG59XHJcbi5oMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiN3b3Jke1xyXG53aWR0aDoxNTBweDtcclxuYm9yZGVyLXJhZGl1czogMzBweDtcclxuY29sb3I6d2hpdGU7XHJcbm1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiNpbnB1dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyBcclxufVxyXG5cclxuI3BhcGVye1xyXG4gICAgd2lkdGg6IDIxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG59XHJcbiNEZWZpbml0aW9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICBtYXJnaW4tbGVmdDogMzZweDtcclxuICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container myContainer\">\n  <h3 class=\"h1\">Dictionary</h3>\n  <div class=\"row\" id=\"myFirstRow\">\n    <div class=\"col\">\n      <Button class=\"btn btn-warning \" id=\"word\">\n        word\n      </Button>\n      <input type=\"text\" id=\"input\" [(ngModel)]=\"word\">\n    </div>\n  </div>\n  <br />\n  <div class=\"row\" id=\"mySecondRow\">\n    <div class=\"card\" id=\"paper\">\n      <h5 class=\"card-title\">Word: {{word}} </h5>\n      <h5 class=\"card-title\">Lexical Category: {{entries}} </h5>\n      <h6 class=\"card-text\"><strong>Definitions:</strong> {{Definitions}}</h6>\n      <h6 class=\"card-text\"><strong>Example:</strong> {{Example}}</h6>\n      <h6 class=\"card-text\"><strong>Anther Example:</strong> {{antherExample}}</h6>\n    </div>\n    <div>\n      <Button class=\"btn btn-success\" id=\"Definition\" (click)=\"Definition(word)\">\n        Definition\n      </Button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.data = [];
        this.word = '';
        this.entries = '';
        this.Definitions = '';
        this.Example = '';
        this.antherExample = '';
    }
    AppComponent.prototype.Definition = function (word) {
        var _this = this;
        if (word === void 0) { word = ''; }
        if (word.length === 0) {
            alert("please type a word insde the input");
        }
        else {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/Definition', { Definition: word }).then(function (res) {
                for (var i = 0; i < res.data.results.length; i++) {
                    _this.data.push(res.data.results[i].lexicalEntries);
                }
                _this.word = _this.data[0][0].text;
                _this.entries = _this.data[0][0].lexicalCategory;
                _this.Definitions = _this.data[0][0].entries[0].senses[0].definitions[0];
                _this.Example = _this.data[0][0].entries[0].senses[0].examples[0].text;
                _this.antherExample = _this.data[0][0].entries[0].senses[0].examples[1].text;
            }).catch(function (notFound) {
                alert("this word does not exist, please try another word");
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eleimat\Desktop\RBK-Task2\english-word\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map