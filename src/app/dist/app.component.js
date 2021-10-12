"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var operators_1 = require("rxjs/operators");
var AppComponent = /** @class */ (function () {
    function AppComponent(breakpointObserver, sidenavService) {
        this.breakpointObserver = breakpointObserver;
        this.sidenavService = sidenavService;
        this.isHandset$ = this.breakpointObserver.observe(layout_1.Breakpoints.Handset).pipe(operators_1.map(function (result) { return result.matches; }));
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sidenavService.setSidePanel(this.sidePanel);
    };
    Object.defineProperty(AppComponent.prototype, "selectedPortal", {
        get: function () {
            return this.sidenavService.selectedPortal;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('panel', { static: true })
    ], AppComponent.prototype, "sidePanel");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
