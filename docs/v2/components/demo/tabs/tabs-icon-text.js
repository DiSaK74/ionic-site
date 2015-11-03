"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ionicIonic = require('ionic/ionic');

var _angular2Angular2 = require('angular2/angular2');

var _helpers = require('../helpers');

var helpers = _interopRequireWildcard(_helpers);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2:
            return decorators.reduceRight(function (o, d) {
                return d && d(o) || o;
            }, target);
        case 3:
            return decorators.reduceRight(function (o, d) {
                return (d && d(target, key), void 0);
            }, void 0);
        case 4:
            return decorators.reduceRight(function (o, d) {
                return d && d(target, key, o) || o;
            }, desc);
    }
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabIconTextCtrl = function TabIconTextCtrl(nav, view) {
    _classCallCheck(this, TabIconTextCtrl);

    this.nav = nav;
    this.view = view;
};
TabIconTextCtrl = __decorate([(0, _ionicIonic.Page)({
    template: '' + '<ion-navbar *navbar hide-back-button class="android-attr">' + '<ion-title>Tabs</ion-title>' + '</ion-navbar>' + '<ion-content>' + '</ion-content>',
    directives: [(0, _angular2Angular2.forwardRef)(function () {
        return helpers.AndroidAttribute;
    })]
}), __metadata('design:paramtypes', [typeof (_a = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _a || Object, typeof (_b = typeof _ionicIonic.ViewController !== 'undefined' && _ionicIonic.ViewController) === 'function' && _b || Object])], TabIconTextCtrl);
var TabsIconTextPage = function TabsIconTextPage(nav, params) {
    _classCallCheck(this, TabsIconTextPage);

    this.nav = nav;
    this.tabOne = TabIconTextCtrl;
    this.tabTwo = TabIconTextCtrl;
    this.tabThree = TabIconTextCtrl;
    this.tabFour = TabIconTextCtrl;
};
exports.TabsIconTextPage = TabsIconTextPage;
exports.TabsIconTextPage = TabsIconTextPage = __decorate([(0, _ionicIonic.Page)({
    template: '<ion-tabs>' + '<ion-tab tab-icon="water" tab-title="Water" [root]="tabOne"></ion-tab>' + '<ion-tab tab-icon="leaf" tab-title="Life" [root]="tabTwo"></ion-tab>' + '<ion-tab tab-icon="flame" tab-title="Fire" [root]="tabThree"></ion-tab>' + '<ion-tab tab-icon="magnet" tab-title="Force" [root]="tabFour"></ion-tab>' + '</ion-tabs>'
}), __metadata('design:paramtypes', [typeof (_c = typeof _ionicIonic.NavController !== 'undefined' && _ionicIonic.NavController) === 'function' && _c || Object, typeof (_d = typeof _ionicIonic.NavParams !== 'undefined' && _ionicIonic.NavParams) === 'function' && _d || Object])], TabsIconTextPage);
var _a, _b, _c, _d;