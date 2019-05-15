webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_info_user_info__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, userInfo, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = userInfo;
        this.loadingCtrl = loadingCtrl;
        this.userList = [];
        this.customersList = [];
        this.invitesList = [];
        this.letterCompare = function (firstItem, secondItem) {
            var letter1 = firstItem.first.charAt(0);
            var letter2 = secondItem.first.charAt(0);
            return letter1 < letter2 ? -1 : letter1 > letter2 ? 1 : 0;
        };
        this.userType = 'pros';
        var loader = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loader.present();
        this.userInfo.getUsers().subscribe(function (res) {
            _this.customersList = res.results[0];
            _this.customersList.sort(function (firstUser, secondUser) {
                // console.log(`sorting ${firstUser.first} - ${secondUser.first}`)
                return _this.letterCompare(firstUser, secondUser);
            });
            _this.customersList = _this.groupList(_this.customersList);
        });
        this.userInfo.getUsers().subscribe(function (res) {
            _this.invitesList = res.results[0];
            _this.invitesList.sort(function (firstUser, secondUser) {
                return _this.letterCompare(firstUser, secondUser);
            });
            _this.invitesList = _this.groupList(_this.invitesList);
        });
        this.userInfo.getUsers().subscribe(function (res) {
            _this.userList = res.results[0];
            _this.userList.sort(function (firstUser, secondUser) {
                return _this.letterCompare(firstUser, secondUser);
            });
            _this.userList = _this.groupList(_this.userList);
            loader.dismiss();
        });
    }
    HomePage.prototype.groupList = function (list) {
        var groupList = [];
        var currentItems = [];
        var currentLetter = list[0].first.charAt(0);
        // console.log('first letter : ',currentLetter)
        list.forEach(function (item) {
            if (item.first.charAt(0) !== currentLetter && currentItems.length > 0) {
                var newGroup = {
                    letter: currentLetter,
                    users: currentItems
                };
                // console.log('created group for letter '+currentLetter+'next letter',item.first.charAt(0))
                // console.log('group created',newGroup)
                groupList.push(newGroup);
                currentItems = [];
                currentLetter = item.first.charAt(0);
            }
            else {
                // console.log(item.first.charAt(0)+"is same as "+currentLetter)
                currentItems.push(item);
            }
        });
        return groupList;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToDetail = function (first, last) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { first: first, last: last });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Carlos Di Matteo\Projects\Work\somosTech\FrontEnd\FrontEndTest\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n -->\n\n<ion-content style="background: #f3f3f5 ">\n  <div padding>\n    <ion-segment style="background: #ffffff "[(ngModel)]="userType">\n      <ion-segment-button value="pros">\n        Pros\n      </ion-segment-button>\n      <ion-segment-button value="customers">\n        Customers\n      </ion-segment-button>\n      <ion-segment-button value="invites">\n        Invites\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]="userType">\n    <ion-list *ngSwitchCase="\'pros\'">\n        <ion-item-group *ngFor="let group of userList">\n\n            <ion-item-divider style="background: #f3f3f5 " light>{{group.letter}}</ion-item-divider>\n            <ion-card style="border-radius:10px;">\n              <ion-card-content>\n                <ion-item  (click)="goToDetail(user.first,user.last)" *ngFor="let user of group.users">\n                  <ion-thumbnail item-start>\n                    <img style="border-radius:50px" src="https://source.unsplash.com/200x200/?face,{{user.first}}">\n                  </ion-thumbnail>\n                  <h2>{{user.first}} {{user.last}}</h2>\n                  <h3>{{user.email}}</h3>\n                  \n                <hr>\n                </ion-item>\n              </ion-card-content>\n            </ion-card>\n           \n      \n          </ion-item-group>\n      \n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'customers\'">\n      <ion-item-group *ngFor="let group of customersList">\n\n        <ion-item-divider style="background: #f3f3f5 " light>{{group.letter}}</ion-item-divider>\n        <ion-card style="border-radius:10px;">\n          <ion-card-content>\n            <ion-item  (click)="goToDetail(user.first,user.last)" *ngFor="let user of group.users">\n              <ion-thumbnail item-start>\n                <img style="border-radius:50px" src="https://source.unsplash.com/200x200/?face,{{user.first}}">\n              </ion-thumbnail>\n              <h2>{{user.first}} {{user.last}}</h2>\n              <h3>{{user.email}}</h3>\n              \n            <hr>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n       \n  \n      </ion-item-group>\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase="\'invites\'">\n      <ion-item-group *ngFor="let group of invitesList">\n\n        <ion-item-divider style="background: #f3f3f5 " light>{{group.letter}}</ion-item-divider>\n        <ion-card style="border-radius:10px;">\n          <ion-card-content>\n            <ion-item  (click)="goToDetail(user.first,user.last)" *ngFor="let user of group.users">\n              <ion-thumbnail item-start>\n                <img style="border-radius:50px" src="https://source.unsplash.com/200x200/?face,{{user.first}}">\n              </ion-thumbnail>\n              <h2>{{user.first}} {{user.last}}</h2>\n              <h3>{{user.email}}</h3>\n              \n            <hr>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n       \n  \n      </ion-item-group>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Carlos Di Matteo\Projects\Work\somosTech\FrontEnd\FrontEndTest\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, userInfo, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = userInfo;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {
            picture: {
                thumbnail: ''
            },
            email: '',
            nat: '',
            dob: {
                age: 0
            },
            location: {
                street: ''
            },
            phone: '',
        };
        this.randomNumber = Math.round(100 + (Math.random() * (999 - 100)));
        var loader = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        loader.present();
        this.firstName = this.navParams.get('first');
        this.lastName = this.navParams.get('last');
        this.userInfo.getUserInfo().subscribe(function (res) {
            _this.user = res.results[0];
            console.log('user', _this.user);
            loader.dismiss();
        });
    }
    DetailPage.prototype.favorite = function () {
        var alert = this.alertCtrl.create({
            title: 'Added!!',
            subTitle: 'You have added ' + this.firstName + ' ' + this.lastName + ' To your favorites!',
            buttons: ['OK']
        });
        alert.present();
    };
    DetailPage.prototype.call = function () {
        var alert = this.alertCtrl.create({
            title: 'Calling',
            subTitle: 'Calling ' + this.firstName + ' ' + this.lastName + ', please wait while we redirect you...',
            buttons: ['OK']
        });
        alert.present();
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Carlos Di Matteo\Projects\Work\somosTech\FrontEnd\FrontEndTest\src\pages\detail\detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #f3f3f5 ">\n    <ion-card style="background:#2abab6;border-radius:10px">\n        <ion-item style="background:#2abab6;color:white">\n            <ion-thumbnail item-start>\n                <img style="border-radius:50px" src="{{user.picture.thumbnail}}">\n              </ion-thumbnail>\n              <h2 style="color:white">{{firstName}} {{lastName}}</h2>\n              <h3 style="color:white">{{user.email}}</h3>\n        </ion-item>\n        <ion-item style="background:#2bafac;color:white ">\n          <ion-row>\n              <ion-col >\n                <ion-row justify-content-center  >\n                  {{randomNumber}}\n                </ion-row>\n                <ion-row justify-content-center>\n                  CONTACTS\n                </ion-row>\n              </ion-col>\n            <ion-col >\n              <ion-row justify-content-center>\n                  {{user.dob.age}}\n              </ion-row>\n              <ion-row justify-content-center>\n                AGE\n              </ion-row>\n            </ion-col>\n            <ion-col >\n              <ion-row justify-content-center>{{user.nat}}</ion-row>\n              <ion-row justify-content-center>NAT</ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-card>\n\n\n\n      <ion-card style="background:#2abab6;border-radius:10px">\n        <ion-list>\n          \n          <ion-item (click)="favorite()">\n              <ion-icon name="star" item-start large></ion-icon>\n              <h2>Add to favorites</h2>\n            </ion-item>\n            <ion-item >\n              <ion-icon name="call" item-start large ></ion-icon>\n                  <h2>{{user.phone}}</h2>\n              <ion-badge (click)="call()" item-end>CALL</ion-badge>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="pin" item-start large ></ion-icon>\n              <h2>{{user.location.street}}</h2>\n            </ion-item>\n            \n        </ion-list>\n            \n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Carlos Di Matteo\Projects\Work\somosTech\FrontEnd\FrontEndTest\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_info_user_info__["a" /* UserInfoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		277,
		1
	],
	"../pages/home/home.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_user_info_user_info__["a" /* UserInfoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Carlos Di Matteo\Projects\Work\somosTech\FrontEnd\FrontEndTest\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Carlos Di Matteo\Projects\Work\somosTech\FrontEnd\FrontEndTest\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserInfoProvider = /** @class */ (function () {
    function UserInfoProvider(http) {
        var _this = this;
        this.http = http;
        this.getUsers = function () {
            return _this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb');
        };
        this.getUserInfo = function () {
            return _this.http.get('https://randomuser.me/api/');
        };
        console.log('Hello UserInfoProvider Provider');
    }
    UserInfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserInfoProvider);
    return UserInfoProvider;
}());

//# sourceMappingURL=user-info.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map