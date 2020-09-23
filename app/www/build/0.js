webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupPageModule", function() { return SingupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__singup__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SingupPageModule = /** @class */ (function () {
    function SingupPageModule() {
    }
    SingupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__singup__["a" /* SingupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__singup__["a" /* SingupPage */]),
            ],
        })
    ], SingupPageModule);
    return SingupPageModule;
}());

//# sourceMappingURL=singup.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingupPage = /** @class */ (function () {
    function SingupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = false;
        this.password = false;
    }
    SingupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SingupPage');
    };
    SingupPage.prototype.login = function () {
        this.navCtrl.pop();
    };
    ;
    SingupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-singup',template:/*ion-inline-start:"/home/jatin/My Computer/myApps/testV3/app/src/pages/singup/singup.html"*/'<ion-header>\n  <ion-navbar  >\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<form [formGroup]="formgroup" >\n    <ion-item >\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" formControlName="fname" [(ngModel)]="ngname" ></ion-input>\n    </ion-item>\n    \n    \n    <ion-item >\n      <ion-label floating>Password</ion-label>\n      <ion-input type="text" formControlName="fpassword" [(ngModel)]="ngpassword"></ion-input>\n    </ion-item>\n    <!-- <ion-item *ngIf="!formgroup.controls.password.valid && password.touched">\n        <p> *Password should be of min 6 digits<br/>\n             Should contain special character<br/>\n             Should contain Upper and Lower case letters\n        </p>\n      </ion-item> -->\n\n\n    <ion-item >\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" formControlName="email" [(ngModel)]="emai"></ion-input>\n    </ion-item>\n    <!-- <ion-item *ngIf="!formgroup.controls.email.valid && email.touched">\n        <p> *Email is invalid</p>\n      </ion-item> -->\n\n\n    <ion-item >\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input type="number" formControlName="mnumber" [(ngModel)]="mnumbe"></ion-input>\n    </ion-item>\n    <!-- <ion-item *ngIf="!formgroup.controls.mnumber.valid&& mnumber.touched">\n        <p> *Mobile Number should be of 10 digits</p>\n      </ion-item> -->\n\n\n    <button ion-button class="button" (click)="store()">Register</button>\n  \n</form>\n\n</ion-content>'/*ion-inline-end:"/home/jatin/My Computer/myApps/testV3/app/src/pages/singup/singup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SingupPage);
    return SingupPage;
}());

//# sourceMappingURL=singup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map