(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gbm/Sites/__LEARN/mimo/src/main.ts */"zUnb");


/***/ }),

/***/ "0VLA":
/*!**************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.ts ***!
  \**************************************************/
/*! exports provided: AboutpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageComponent", function() { return AboutpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");



class AboutpageComponent {
    constructor() { }
    ngOnInit() {
        document.body.classList.add('aboutpage');
        this.mobileMenu();
        this.scrollFunction();
    }
    mobileMenu() {
        const mobileMenuTrigger = document.querySelector('.menu-trigger');
        const mobileMenu = document.querySelector('app-mobile-menu');
        const appAbout = document.querySelector('app-aboutpage');
        const mobileLinks = document.querySelectorAll('.mobile-menu-container nav a');
        mobileLinks.forEach(function (els) {
            els.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                mobileMenuTrigger.classList.remove('close');
            });
        });
        mobileMenuTrigger.addEventListener('click', function () {
            this.classList.toggle('close');
            appAbout.classList.toggle('off');
            mobileMenu.classList.toggle('open');
        });
    }
    scrollFunction() {
        const appAbout = document.querySelector('app-aboutpage');
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        appAbout.addEventListener("scroll", function () {
            var st = this.scrollTop;
            if (appAbout.scrollHeight - appAbout.scrollTop === appAbout.clientHeight) {
                header.classList.add('hidden');
            }
            else {
                header.classList.remove('hidden');
            }
            if (st > window.innerHeight) {
                header.classList.add('inview');
            }
            else {
                header.classList.remove('inview');
            }
            if (st > lastScrollTop) {
                header.classList.add('hidden');
            }
            else {
                header.classList.remove('hidden');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }
}
AboutpageComponent.ɵfac = function AboutpageComponent_Factory(t) { return new (t || AboutpageComponent)(); };
AboutpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutpageComponent, selectors: [["app-aboutpage"]], decls: 49, vars: 0, consts: [["id", "intro", 1, "intro"], [1, "container"], [1, "vert-text"], [1, "vert-text__inner"], [1, "vert-text__word"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], ["href", "#section2", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-text"], [1, "intro-footer"], [1, "left"], [1, "middle"], [1, "right"], [1, "section-3"], [1, "section-header"], [1, "column", "col-10"], [1, "resume"], ["src", "./assets/img/resume.png", "alt", "", 1, "bg"]], template: function AboutpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mimo Mimo Mimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BANKING, CRYPTO, LEDGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Made in Singapoure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "019 \u2013 2020 \u00A9 Mimo Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "In 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In 2020, it is still difficult for people to own their funds in their own hands. Your computing power is in your pocket, your photos are in your pocket, your personal data is yours, but your money still needs to be in a bank which may or may not give you access to it when you need it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "At Mimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "At Mimo, we believe this isn't sound. We envision a world where people are free to make their financial decisions while still being protected from accidents. Today, the technology exists to offer more safety than hiding cash under your mattress, without relying on a third-party institution like a bank. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "The same technology allows people to get returns on their holdings and investments, still without any third-party intervention, because it is peer-to-peer, like the internet. This technology is none other than blockchain.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Our mission at Mimo is to be the safest way for you to access the best of the services available on the blockchain. We are starting with a protocol that provides a safe way to borrow and earn in a new stable token pegged to the Euro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "We will then provide a more elaborate software suite to simplify the access to this protocol, and even more of the best of customer finance, in the browser or in your pocket. We believe that decentralized finance is the answer to how to bring people into a world of sound money, and this is what Mimo is about.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-footer");
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: [".intro[_ngcontent-%COMP%] {\n  background: black;\n}\n.intro[_ngcontent-%COMP%]   .intro-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 10vw;\n  line-height: 10vw;\n}\n.section-3[_ngcontent-%COMP%] {\n  background: white;\n  height: auto !important;\n  padding-bottom: 15vh;\n  min-height: 100vh;\n}\n.section-3[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.section-3[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: black;\n}\n.section-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 6vw;\n  color: black;\n  padding-bottom: 50px;\n  border-bottom: solid 1px black;\n}\n.section-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 75%;\n  padding-top: 30px;\n  margin-bottom: 0;\n  margin-top: 30px;\n  font-size: 25px;\n  margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRwYWdlL2Fib3V0cGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNaO0FBQUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUdKO0FBRkk7RUFDSSxvQkFBQTtBQUlSO0FBSEk7RUFDSSxZQUFBO0FBS1I7QUFGUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQUlaO0FBSFE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS1oiLCJmaWxlIjoic3JjL2FwcC9hYm91dHBhZ2UvYWJvdXRwYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvXG4gICAgYmFja2dyb3VuZDogYmxhY2tcbiAgICAuaW50cm8tdGV4dFxuICAgICAgICBoMSBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTB2d1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwdndcbi5zZWN0aW9uLTNcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50XG4gICAgcGFkZGluZy1ib3R0b206IDE1dmhcbiAgICBtaW4taGVpZ2h0OiAxMDB2aFxuICAgIC5jb2x1bW5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHhcbiAgICAqXG4gICAgICAgIGNvbG9yOiBibGFja1xuICAgIC5zZWN0aW9uLWhlYWRlclxuICAgICAgICBcbiAgICAgICAgaDIgXG4gICAgICAgICAgICBmb250LXNpemU6IDZ2d1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrXG4gICAgICAgIHAgXG4gICAgICAgICAgICB3aWR0aDogNzUlXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlXG4gICAgICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutpage',
                templateUrl: './aboutpage.component.html',
                styleUrls: ['./aboutpage.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class HomepageComponent {
    constructor() { }
    ngOnInit() {
        document.body.classList.remove('aboutpage');
        this.mobileMenu();
        this.scrollFunction();
    }
    mobileMenu() {
        const mobileMenuTrigger = document.querySelector('.menu-trigger');
        const mobileMenu = document.querySelector('app-mobile-menu');
        const appHome = document.querySelector('app-homepage');
        const mobileLinks = document.querySelectorAll('.mobile-menu-container nav a');
        mobileLinks.forEach(function (els) {
            els.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                mobileMenuTrigger.classList.remove('close');
            });
        });
        mobileMenuTrigger.addEventListener('click', function () {
            this.classList.toggle('close');
            appHome.classList.toggle('off');
            mobileMenu.classList.toggle('open');
        });
    }
    scrollFunction() {
        const appHome = document.querySelector('app-homepage');
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        appHome.addEventListener("scroll", function () {
            var st = this.scrollTop;
            if (appHome.scrollHeight - appHome.scrollTop === appHome.clientHeight) {
                header.classList.add('hidden');
            }
            else {
                header.classList.remove('hidden');
            }
            if (st > window.innerHeight) {
                header.classList.add('inview');
            }
            else {
                header.classList.remove('inview');
            }
            if (st > lastScrollTop) {
                header.classList.add('hidden');
            }
            else {
                header.classList.remove('hidden');
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 106, vars: 0, consts: [["id", "intro", 1, "intro"], [1, "container"], [1, "vert-text"], [1, "vert-text__inner"], [1, "vert-text__word"], ["src", "./assets/img/phone_white.svg", "alt", "", 1, "phone"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], ["href", "#section1", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-text"], [1, "intro-footer"], [1, "left"], [1, "middle"], [1, "right"], ["id", "section1", 1, "section-1"], [1, "section-header"], [1, "column", "col-3"], [1, "number"], [1, "column", "col-7"], [1, "column", "col-10"], [1, "column", "col-5"], [1, "m_left"], [1, "section-carousel"], ["src", "./assets/img/carousel_bg.png", "alt", ""], [1, "download"], ["src", "./assets/img/dl_bg.png", "alt", "", 1, "bg"], [1, "download-content"], ["src", "./assets/img/vault.png", "alt", "", 1, "vault"], ["href", ""], [1, "section-2"], [1, "icon"], [1, "resume"], ["src", "./assets/img/resume.png", "alt", "", 1, "bg"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Parallel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Parallel, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A decentralized Stable Token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " On the Ethereum Blockchain. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BANKING, CRYPTO, LEDGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Made in Singapoure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "019 \u2013 2020 \u00A9 Mimo Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mimo Token: PAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " PAR tokens are decentralized, collateral-backed synthetic assets pegged to fiat currencies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " The Mimo protocol currently offers the PAR stable token, which is pegged to the euro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "High-Yield Rates At Zero Effort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Download Mimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "World first decentralized EUR stable token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "An alternative in today\u2019s stablecoin market, which is dominated exclusively by USD denominated stablecoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "High-yield rates in insured vaults / Decentralized safety reserve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "An alternative in today\u2019s stablecoin market, which is dominated exclusively by USD denominated stablecoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Borrow at competitive rates for max exposure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "An alternative in today\u2019s stablecoin market, which is dominated exclusively by USD denominated stablecoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Automated Market Maker (AMM) pools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "An alternative in today\u2019s stablecoin market, which is dominated exclusively by USD denominated stablecoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "World first decentralized EUR stable token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "An alternative in today\u2019s stablecoin market, which is dominated exclusively by USD denominated stablecoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "app-footer");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "j8Bj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'mimo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app-mobile-menu"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mobile-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_2__["MobileMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "j8Bj");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "0VLA");











// import {MaterialModule} from '@angular/material'





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
                { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__["AboutpageComponent"] },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_12__["MobileMenuComponent"],
        _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__["AboutpageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_12__["MobileMenuComponent"],
                    _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__["AboutpageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
                        { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_13__["AboutpageComponent"] },
                        { path: '', redirectTo: '/home', pathMatch: 'full' },
                    ]),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 0, consts: [[1, "container"], ["href", "", 1, "logo"], ["src", "./assets/img/logo.svg", "alt", ""], ["routerLink", "/home", "routerLinkActive", "activebutton", 1, "nav-item"], ["href", "", 1, "nav-item"], ["routerLink", "/about", "routerLinkActive", "activebutton", 1, "nav-item"], ["href", "", 1, "cta-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Borrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  background: black;\n  position: sticky;\n  z-index: 100;\n  background: linear-gradient(180deg, #AD6CEB 0%, #ad6ceb00 100%);\n  transition: 0.3s ease;\n  transform: translateY(0);\n}\nheader.hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100px);\n}\n@media screen and (max-width: 640px) {\n  header.hidden[_ngcontent-%COMP%] {\n    transform: translateY(0px);\n  }\n}\nheader.inview[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #000 0%, #0000 100%);\n}\nheader[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\nheader[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  right: 0px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.nav-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: auto 20px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.cta-item[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 30px;\n  border: solid 1px white;\n  margin-left: 15px;\n}\n@media screen and (max-width: 640px) {\n  nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwrREFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUFESjtBQUdJO0VBQ0ksNkJBQUE7QUFEUjtBQUVRO0VBRko7SUFHUSwwQkFBQTtFQUNWO0FBQ0Y7QUFESTtFQUNJLHdEQUFBO0FBR1I7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSVI7QUFGUTtFQUNJLFlBQUE7QUFJWjtBQUhJO0VBQ0ksVUFBQTtBQUtSO0FBSFk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBS2hCO0FBSlk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQU1oQjtBQUpBO0VBQ0k7SUFDSSxhQUFBO0VBT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaGVhZGVyXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDgwcHhcbiAgICBiYWNrZ3JvdW5kOiBibGFja1xuICAgIHBvc2l0aW9uOiBzdGlja3lcbiAgICB6LWluZGV4OiAxMDBcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQUQ2Q0VCIDAlLCAjYWQ2Y2ViMDAgMTAwJSlcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZVxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxuICAgIC8vIGJhY2tncm91bmQ6ICNDRjlERkVcbiAgICAmLmhpZGRlblxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweClcbiAgICAmLmludmlld1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAwIDAlLCAjMDAwMCAxMDAlKSBcbiAgICBhLmxvZ28sIG5hdlxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgdG9wOiA1MCVcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXG4gICAgYS5sb2dvXG4gICAgICAgIGltZ1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4XG4gICAgbmF2XG4gICAgICAgIHJpZ2h0OiAwcHhcbiAgICAgICAgYVxuICAgICAgICAgICAgJi5uYXYtaXRlbVxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayBcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMjBweFxuICAgICAgICAgICAgJi5jdGEtaXRlbVxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHhcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZVxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4XG5cbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiAgNjQwcHgpXG4gICAgbmF2XG4gICAgICAgIGRpc3BsYXk6IG5vbmUiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 58, vars: 0, consts: [["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], [1, "container"], [1, "top-bar"], ["href", "", 1, "logo"], ["src", "./assets/img/logo.svg", "alt", ""], ["href", "", 1, "cta-item"], [1, "link-container"], [1, "column", "col-2"], ["href", ""], ["href", "", 1, "location"], ["href", "#intro", 1, "up_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-footer"], [1, "left"], [1, "middle"], [1, "right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Borrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Linkdin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "AppStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PlayStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " TenX Pte Ltd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 11 Keppel Rd, #07-00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ABI Plaza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Singapore 089057 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "BANKING, CRYPTO, LEDGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Made in Singapourg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "019 \u2013 2020 \u00A9 Mimo Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background: black;\n  position: relative;\n  z-index: 100;\n}\nfooter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   .mimo_bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  transform: translateY(-50%);\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  display: block;\n  z-index: 0;\n  width: 60%;\n  max-width: 600px;\n}\nfooter[_ngcontent-%COMP%]   .mimo_bg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgba(255, 255, 255, 0.1);\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  right: 0px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.nav-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: auto 20px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.cta-item[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 30px;\n  border: solid 1px white;\n  margin-left: 15px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 1280px;\n  display: flex;\n  justify-content: space-between;\n  padding: 30vh 0 50px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  padding: 0 5% 0 0;\n  position: relative;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border-top: solid 1px white;\n  width: 100%;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 0;\n  text-align: left;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.location[_ngcontent-%COMP%] {\n  line-height: 33px;\n}\nfooter[_ngcontent-%COMP%]   .up_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 150px;\n  right: 0;\n  transform: rotate(180deg);\n  width: 50px;\n  z-index: 100;\n}\nfooter[_ngcontent-%COMP%]   .up_arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   .intro-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  bottom: 0px;\n  border-top: solid 1px white;\n  padding: 30px 0;\n  display: flex;\n  justify-content: space-between;\n  z-index: 10;\n}\n@media screen and (max-width: 640px) {\n  footer[_ngcontent-%COMP%] {\n    height: auto !important;\n    min-height: 100vh;\n  }\n  footer[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%] {\n    display: block !important;\n    justify-content: space-between;\n    padding: 130px 0 50px !important;\n  }\n  footer[_ngcontent-%COMP%]   .intro-footer[_ngcontent-%COMP%] {\n    height: 130px;\n    display: grid;\n    position: relative;\n  }\n  footer[_ngcontent-%COMP%]   .up_arrow[_ngcontent-%COMP%] {\n    bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBREk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR1I7QUFGUTtFQUNJLDhCQUFBO0FBSVo7QUFEWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUdoQjtBQURnQjtFQUNJLFlBQUE7QUFHcEI7QUFGWTtFQUNJLFVBQUE7QUFJaEI7QUFGb0I7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBSXhCO0FBSG9CO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFLeEI7QUFKUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQU1aO0FBTFk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBT2hCO0FBTmdCO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBUXBCO0FBUGdCO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVNwQjtBQVJvQjtFQUNJLGlCQUFBO0FBVXhCO0FBVEk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVdSO0FBVlE7RUFDSSxXQUFBO0FBWVo7QUFWSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQVlSO0FBVkE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsaUJBQUE7RUFhTjtFQVpNO0lBQ0kseUJBQUE7SUFDQSw4QkFBQTtJQUNBLGdDQUFBO0VBY1Y7RUFiTTtJQUNJLGFBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFlVjtFQWRNO0lBQ0ksWUFBQTtFQWdCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiAxMDB2aFxuICAgIGJhY2tncm91bmQ6IGJsYWNrXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgei1pbmRleDogMTAwXG4gICAgKiBcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgLm1pbW9fYmdcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgIHRvcDogNDAlXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxuICAgICAgICBtYXJnaW46IDAgYXV0b1xuICAgICAgICBsZWZ0OiAwIFxuICAgICAgICByaWdodDogMFxuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICB6LWluZGV4OiAwXG4gICAgICAgIHdpZHRoOiA2MCVcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweFxuICAgICAgICBwYXRoIFxuICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG4gICAgLmNvbnRhaW5lclxuICAgICAgICAudG9wLWJhclxuICAgICAgICAgICAgYS5sb2dvLCBuYXZcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHhcbiAgICAgICAgICAgIGEubG9nb1xuICAgICAgICAgICAgICAgIGltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHhcbiAgICAgICAgICAgIG5hdlxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHhcbiAgICAgICAgICAgICAgICBhXG4gICAgICAgICAgICAgICAgICAgICYubmF2LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAyMHB4XG4gICAgICAgICAgICAgICAgICAgICYuY3RhLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4XG4gICAgICAgIC5saW5rLWNvbnRhaW5lclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjgwcHhcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgICAgICAgICAgcGFkZGluZzogMzB2aCAwIDUwcHhcbiAgICAgICAgICAgIG5hdlxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSUgMCAwXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgICAgICBhXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnRcbiAgICAgICAgICAgICAgICAgICAgJi5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHhcbiAgICAudXBfYXJyb3dcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgIGJvdHRvbTogMTUwcHhcbiAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICB3aWR0aDogNTBweFxuICAgICAgICB6LWluZGV4OiAxMDBcbiAgICAgICAgc3ZnXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuXG4gICAgLmludHJvLWZvb3RlclxuICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICBoZWlnaHQ6IDEwMHB4XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBib3R0b206IDBweFxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggd2hpdGVcbiAgICAgICAgcGFkZGluZzogMzBweCAwXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG4gICAgICAgIHotaW5kZXg6IDEwXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICA2NDBweClcbiAgICBmb290ZXJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnRcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmhcbiAgICAgICAgLmxpbmstY29udGFpbmVyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAgICAgICAgIHBhZGRpbmc6IDEzMHB4IDAgNTBweCAhaW1wb3J0YW50XG4gICAgICAgIC5pbnRyby1mb290ZXJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHhcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWRcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgICAudXBfYXJyb3dcbiAgICAgICAgICAgIGJvdHRvbTogMzBweCAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j8Bj":
/*!******************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.ts ***!
  \******************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MobileMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(); };
MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["app-mobile-menu"]], decls: 31, vars: 0, consts: [[1, "container", "mobile-menu-container"], ["href", "", 1, "logo"], ["src", "./assets/img/logo.svg", "alt", ""], [1, "menu-trigger"], ["routerLink", "/home", "routerLinkActive", "activebutton"], ["href", ""], ["routerLink", "/about", "routerLinkActive", "activebutton"], ["href", "", 1, "cta-item"], [1, "intro-footer"], [1, "left"], [1, "middle"], [1, "right"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "skew_arrow"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Borrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BANKING, CRYPTO, LEDGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Made in Singapoure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "019 \u2013 2020 \u00A9 Mimo Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".mobile-menu-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 27px;\n  left: 0;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 20px;\n  display: block;\n  position: relative;\n  float: right;\n  top: 25px;\n  pointer-events: all;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger.close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 50%;\n  transform: translateY(-50%) rotate(45deg);\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger.close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  width: 0;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger.close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n  transform: translateY(-50%) rotate(-45deg);\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2px;\n  display: block;\n  background: white;\n  position: absolute;\n  transition: 0.3s ease;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 50%;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .menu-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  top: 100%;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45%;\n  transform: translateY(-50%);\n  display: block;\n  width: 100%;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 5vw;\n  color: white;\n  line-height: 6vw;\n  display: block;\n  padding-left: 35px;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.cta-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 6vw;\n  padding: 5px 35px;\n  border-radius: 80px;\n  background: white;\n  color: black;\n  margin-left: 35px;\n  margin-top: 15px;\n  text-align: center;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .intro-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  display: grid;\n  position: absolute;\n  bottom: 0;\n  border-top: solid 1px white;\n  padding: 30px 0;\n  justify-content: space-between;\n  z-index: 10;\n}\n.mobile-menu-container[_ngcontent-%COMP%]   .skew_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  right: -3px;\n  transform: rotate(225deg);\n}\n@media screen and (max-width: 640px) {\n  .mobile-menu-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 11vw;\n    line-height: 15vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtBQUdaO0FBRkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFJUjtBQUhRO0VBQ0ksZUFBQTtBQUtaO0FBRmdCO0VBQ0ksUUFBQTtFQUNBLHlDQUFBO0FBSXBCO0FBSGdCO0VBQ0ksUUFBQTtBQUtwQjtBQUpnQjtFQUNJLFFBQUE7RUFDQSwwQ0FBQTtBQU1wQjtBQUxRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBT1o7QUFOWTtFQUNJLE1BQUE7QUFRaEI7QUFQWTtFQUNJLFFBQUE7QUFTaEI7QUFSWTtFQUNJLFNBQUE7QUFVaEI7QUFSSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFVUjtBQVRRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVdaO0FBVlk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWWhCO0FBVkk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFZUjtBQVhJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBYVI7QUFYSTtFQUVRO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBWWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYmlsZS1tZW51LWNvbnRhaW5lclxuICAgIHBvc2l0aW9uOiBmaXhlZFxuICAgIHRvcDogMFxuICAgIGxlZnQ6IDBcbiAgICByaWdodDogMFxuICAgIGEubG9nb1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgdG9wOiAyN3B4XG4gICAgICAgIGxlZnQ6IDBcbiAgICAgICAgaW1nXG4gICAgICAgICAgICB3aWR0aDogMTAwcHhcbiAgICAubWVudS10cmlnZ2VyXG4gICAgICAgIHdpZHRoOiAzMHB4XG4gICAgICAgIGhlaWdodDogMjBweFxuICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgZmxvYXQ6IHJpZ2h0XG4gICAgICAgIHRvcDogMjVweFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsXG4gICAgICAgICY6aG92ZXJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgICAgICAmLmNsb3NlXG4gICAgICAgICAgICBzcGFuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMSlcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCVcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZylcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKVxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTQ1ZGVnKVxuICAgICAgICBzcGFuXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgaGVpZ2h0OiAycHhcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZVxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSlcbiAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpXG4gICAgICAgICAgICAgICAgdG9wOiA1MCVcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpXG4gICAgICAgICAgICAgICAgdG9wOiAxMDAlXG5cbiAgICBuYXYgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICB0b3A6IDQ1JVxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSlcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgYVxuICAgICAgICAgICAgZm9udC1zaXplOiA1dncgIFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNnZ3XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4IFxuICAgICAgICAgICAgJi5jdGEtaXRlbVxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnZ3IFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAzNXB4IFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHhcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4IFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHhcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAgIC5pbnRyby1mb290ZXJcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgaGVpZ2h0OiAxMzBweFxuICAgICAgICBkaXNwbGF5OiBncmlkXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgICAgICBib3R0b206IDBcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHdoaXRlXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbiAgICAgICAgei1pbmRleDogMTBcbiAgICAuc2tld19hcnJvd1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgICAgYm90dG9tOiA1MHB4XG4gICAgICAgIHJpZ2h0OiAtM3B4XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZylcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiAgNjQwcHgpXG4gICAgICAgIG5hdiBcbiAgICAgICAgICAgIGEgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXZ3XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1dnciXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-menu',
                templateUrl: './mobile-menu.component.html',
                styleUrls: ['./mobile-menu.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map