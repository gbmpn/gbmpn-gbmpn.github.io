(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Dod":
/*!******************************************************!*\
  !*** ./src/app/borrowpage/borrowpage.component.sass ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvcnJvd3BhZ2UvYm9ycm93cGFnZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "/NSc":
/*!****************************************************!*\
  !*** ./src/app/borrowpage/borrowpage.component.ts ***!
  \****************************************************/
/*! exports provided: BorrowpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowpageComponent", function() { return BorrowpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_borrowpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./borrowpage.component.html */ "GHG4");
/* harmony import */ var _borrowpage_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./borrowpage.component.sass */ "/Dod");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "z/o8");





let BorrowpageComponent = class BorrowpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-borrowpage').classList.add('off');
        document.querySelector('app-borrowpage').classList.add('no-pointer');
        setTimeout(() => {
            document.querySelector('app-borrowpage').classList.remove('off');
        }, 1);
        setTimeout(() => {
            document.querySelector('app-borrowpage').classList.remove('no-pointer');
        }, 1200);
        this.scrollFunction();
    }
    scrollFunction() {
        const appBorrow = document.querySelector('app-borrowpage');
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        appBorrow.addEventListener("scroll", function () {
            var st = this.scrollTop;
            if (appBorrow.scrollHeight - appBorrow.scrollTop === appBorrow.clientHeight) {
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
            const main_bg = document.querySelector('.main_bg');
            const main_bg_img = document.querySelector('.main_bg img');
            const cover_bg = document.querySelector('.banner');
            const cover_bg_img = document.querySelector('.banner img');
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            function runScroll() {
                const m_top = main_bg.getBoundingClientRect().top;
                const r_top = resume_bg.getBoundingClientRect().top;
                const c_top = cover_bg.getBoundingClientRect().top;
                if (m_top > -500) {
                    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(main_bg_img, 0.1, {
                        scaleX: 1 + (m_top * -0.1) / 250,
                        scaleY: 1 + (m_top * -0.1) / 250
                    });
                }
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(resume_bg_img, .1, {
                    y: 1 + (r_top * -0.1) * 2
                });
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(cover_bg_img, .1, {
                    y: 1 + (c_top * -0.1) * 2
                });
            }
            requestAnimationFrame(runScroll);
        });
    }
};
BorrowpageComponent.ctorParameters = () => [];
BorrowpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-borrowpage',
        template: _raw_loader_borrowpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_borrowpage_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BorrowpageComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gbm/Sites/___CURRENT/mimo-home-web/src/main.ts */"zUnb");


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_aboutpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./aboutpage.component.html */ "9Uf7");
/* harmony import */ var _aboutpage_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutpage.component.sass */ "8IFS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "z/o8");






let AboutpageComponent = class AboutpageComponent {
    constructor(apollo) {
        this.apollo = apollo;
    }
    ngOnInit() {
        this.apollo.watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
      {
        chainlinkAggregators(first: 2) {
          id
          latestAnswer
          timestamp
        },
        collateralConfigs(first: 5) {
          id
          totalLocked
        }
      }      
      `,
        })
            .valueChanges.subscribe((result) => {
            var _a, _b;
            //Current Balance
            const chainlinkAggregators = [];
            (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.chainlinkAggregators.forEach(function (els) {
                const line = { id: els.id, latestAnswer: (els.latestAnswer / Math.pow(10, 8)).toLocaleString('en'), timestamp: els.timestamp };
                chainlinkAggregators.push(line);
            });
            this.chainlinkAggregators = chainlinkAggregators;
            //Total Locked
            const collateralConfigs = [];
            (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.collateralConfigs.forEach(function (els) {
                const line = { id: els.id, totalLocked: (els.totalLocked / Math.pow(10, 18)).toLocaleString('en') };
                collateralConfigs.push(line);
            });
            this.collateralConfigs = collateralConfigs;
        });
        document.querySelector('header').classList.remove('hidden');
        document.querySelector('app-aboutpage').classList.add('off');
        document.querySelector('app-aboutpage').classList.add('no-pointer');
        setTimeout(() => {
            document.querySelector('app-aboutpage').classList.remove('off');
        }, 1);
        setTimeout(() => {
            document.querySelector('app-aboutpage').classList.remove('no-pointer');
        }, 1200);
        this.scrollFunction();
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
            const main_bg = document.querySelector('.main_bg');
            const main_bg_img = document.querySelector('.main_bg img');
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            function runScroll() {
                const m_top = main_bg.getBoundingClientRect().top;
                const r_top = resume_bg.getBoundingClientRect().top;
                if (m_top > -500) {
                    gsap__WEBPACK_IMPORTED_MODULE_5__["TweenLite"].to(main_bg_img, 0.1, {
                        scaleX: 1 + (m_top * -0.1) / 250,
                        scaleY: 1 + (m_top * -0.1) / 250
                    });
                }
                gsap__WEBPACK_IMPORTED_MODULE_5__["TweenLite"].to(resume_bg_img, .1, {
                    y: 1 + (r_top * -0.1) * 2
                });
            }
            requestAnimationFrame(runScroll);
        });
    }
};
AboutpageComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] }
];
AboutpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-aboutpage',
        template: _raw_loader_aboutpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aboutpage_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutpageComponent);



/***/ }),

/***/ "3MTK":
/*!************************************************!*\
  !*** ./src/app/earnpage/earnpage.component.ts ***!
  \************************************************/
/*! exports provided: EarnpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarnpageComponent", function() { return EarnpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_earnpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./earnpage.component.html */ "F5B9");
/* harmony import */ var _earnpage_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./earnpage.component.sass */ "b0T1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "z/o8");





let EarnpageComponent = class EarnpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-earnpage').classList.add('off');
        document.querySelector('app-earnpage').classList.add('no-pointer');
        setTimeout(() => {
            document.querySelector('app-earnpage').classList.remove('off');
        }, 1);
        setTimeout(() => {
            document.querySelector('app-earnpage').classList.remove('no-pointer');
        }, 1200);
        this.scrollFunction();
    }
    scrollFunction() {
        const appEarn = document.querySelector('app-earnpage');
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        appEarn.addEventListener("scroll", function () {
            var st = this.scrollTop;
            if (appEarn.scrollHeight - appEarn.scrollTop === appEarn.clientHeight) {
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
            const main_bg = document.querySelector('.main_bg');
            const main_bg_img = document.querySelector('.main_bg img');
            const cover_bg = document.querySelector('.banner');
            const cover_bg_img = document.querySelector('.banner img');
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            function runScroll() {
                const m_top = main_bg.getBoundingClientRect().top;
                const r_top = resume_bg.getBoundingClientRect().top;
                const c_top = cover_bg.getBoundingClientRect().top;
                if (m_top > -500) {
                    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(main_bg_img, 0.1, {
                        scaleX: 1 + (m_top * -0.1) / 250,
                        scaleY: 1 + (m_top * -0.1) / 250
                    });
                }
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(resume_bg_img, .1, {
                    y: 1 + (r_top * -0.1) * 2
                });
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(cover_bg_img, .1, {
                    y: 1 + (c_top * -0.1) * 2
                });
            }
            requestAnimationFrame(runScroll);
        });
    }
};
EarnpageComponent.ctorParameters = () => [];
EarnpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-earnpage',
        template: _raw_loader_earnpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_earnpage_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EarnpageComponent);



/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular/http */ "E21e");





const uri = 'https://api.thegraph.com/subgraphs/name/m19/titan'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
    };
}
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            {
                provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                useFactory: createApollo,
                deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]],
            },
        ],
    })
], GraphQLModule);



/***/ }),

/***/ "6+QU":
/*!**********************************************!*\
  !*** ./src/app/faqpage/faqpage.component.ts ***!
  \**********************************************/
/*! exports provided: FaqpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqpageComponent", function() { return FaqpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faqpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faqpage.component.html */ "i4RJ");
/* harmony import */ var _faqpage_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqpage.component.sass */ "vxAx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "z/o8");





let FaqpageComponent = class FaqpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-faqpage').classList.add('off');
        document.querySelector('app-faqpage').classList.add('no-pointer');
        setTimeout(() => {
            document.querySelector('app-faqpage').classList.remove('off');
        }, 1);
        setTimeout(() => {
            document.querySelector('app-faqpage').classList.remove('no-pointer');
        }, 1200);
        this.scrollFunction();
    }
    scrollFunction() {
        const appFaq = document.querySelector('app-faqpage');
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        appFaq.addEventListener("scroll", function () {
            var st = this.scrollTop;
            if (appFaq.scrollHeight - appFaq.scrollTop === appFaq.clientHeight) {
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
            const main_bg = document.querySelector('.main_bg');
            const main_bg_img = document.querySelector('.main_bg img');
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            function runScroll() {
                const m_top = main_bg.getBoundingClientRect().top;
                const r_top = resume_bg.getBoundingClientRect().top;
                if (m_top > -500) {
                    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(main_bg_img, 0.1, {
                        scaleX: 1 + (m_top * -0.1) / 250,
                        scaleY: 1 + (m_top * -0.1) / 250
                    });
                }
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(resume_bg_img, .1, {
                    y: 1 + (r_top * -0.1) * 2
                });
            }
            requestAnimationFrame(runScroll);
        });
    }
};
FaqpageComponent.ctorParameters = () => [];
FaqpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faqpage',
        template: _raw_loader_faqpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faqpage_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqpageComponent);



/***/ }),

/***/ "7Ac5":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-scroll-container class=\"scroll-container\">\n    <section class=\"intro\" id=\"intro\"> \n        <picture class=\"main_bg\">\n            <source srcset=\"/assets/img/ipad.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n            <source srcset=\"/assets/img/ipad.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n            <img src=\"/assets/img/ipad-min.jpg\" alt=\"Mimo cover image\">\n        </picture>  \n        <div class=\"container\">\n            <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g opacity=\"0.4\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n                </g>\n            </svg>\n            <div class=\"intro-text\"><h1> {{ page.pageTitle }} </h1></div>\n        </div>\n    </section>\n\n    <section class=\"subheading\" >\n        <div class=\"container\">\n            <div class=\"subheading-text\">\n                <h2 [innerHTML]=\"page.pageSubheading\"> </h2>\n                <a class=\"down_arrow\" onclick=\"event.preventDefault(); location.hash='section-1';\">\n                    <svg  width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                        <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                        <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n                    </svg>\n                </a>\n            </div>\n            <div class=\"intro-footer\">\n                <span class=\"left wrapper\">\n                    <span>MIMO</span>\n                </span>\n                <span class=\"middle wrapper\">\n                    <span>ALPHA, USE AT YOUR OWN RISK</span>\n                </span>    \n                <span class=\"right wrapper\">\n                    <span>                \n                        <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n                    </span>\n                </span>\n            </div>\n\n        </div>\n    </section>\n\n\n    <section class=\"section-1\" id=\"section-1\" >\n        <div class=\"container\">\n            <div class=\"section-header\">\n\n                <div class=\"column col-3 sticky_parent tofade\">\n                    <span class=\"number sticky\">1</span>\n                </div>\n\n                <div class=\"column col-7\">\n                    <div class=\"column col-10\">\n                        <h3  class=\"tofade\">Mimo Token: PAR</h3>\n                        <div class=\"column col-5\">\n                            <p  class=\"tofade\">\n                                PAR tokens are decentralized, collateral-backed synthetic assets parallel to fiat currencies.\n                            </p>\n                        </div>\n                        <div class=\"column col-5\">\n                            <p class=\"m_left tofade\">\n                            The Mimo protocol currently offers the PAR stable token, which is pegged to the euro.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"section-carousel tofade\">\n                        <picture class=\"phone\">\n                            <source srcset=\"./assets/img/ipad-iso.webp\" type=\"image/webp\">\n                            <source srcset=\"./assets/img/ipad-iso-2.png\" type=\"image/png\"> \n                            <img src=\"./assets/img/ipad-iso-2.png\" alt=\"ipad iso image\">\n                        </picture>  \n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"download\">\n        <picture class=\"bg\">\n            <source srcset=\"./assets/img/dl_bg.webp\" type=\"image/webp\">\n            <source srcset=\"./assets/img/dl_bg.png\" type=\"image/png\"> \n            <img src=\"./assets/img/dl_bg.png\" alt=\"dl cover image\">\n        </picture>  \n        <div class=\"download-content\">\n            <h2>High-Yield Rates At Zero Effort</h2>\n            <picture class=\"vault\">\n                <source srcset=\"/assets/img/vault.webp\" type=\"image/webp\">\n                <source srcset=\"/assets/img/vault.png\" type=\"image/png\"> \n                <img src=\"/assets/img/vault.png\" alt=\"vault image\">\n            </picture>  \n            <a href=\"https://app.mimo.capital/\">Get started</a>\n            \n        </div>\n    </section>\n\n    <section class=\"section-2\">\n        <div class=\"container\">\n            <div class=\"section-header\">\n\n                <div class=\"column col-3 sticky_parent\">\n                    <span class=\"number sticky \">2</span>\n                </div>\n\n                <div class=\"column col-7\">\n                    <mat-accordion>\n                        <mat-expansion-panel >\n                            <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <h3>World first decentralized EUR stable token</h3>\n                                <span class=\"icon\"></span>\n                            </mat-panel-title>\n                            </mat-expansion-panel-header>\n                            <p>An alternative in today’s stablecoin market, which is dominated exclusively by USD denominated stablecoins.</p>\n                        </mat-expansion-panel>\n\n                        <mat-expansion-panel >\n                            <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <h3>High-yield rates in safe vaults / Decentralized safety reserve</h3>\n                                <span class=\"icon\"></span>\n                            </mat-panel-title>\n                            </mat-expansion-panel-header>\n                            <p>World’s first decentralized EUR price-stable token with a decentralized safety reserve. On top of that, PAR is backed by a regulated company. Read more about our safety reserve in our white paper.                            </p>\n                        </mat-expansion-panel>\n\n                        <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <h3>Borrow at competitive rates for max exposure</h3>\n                                <span class=\"icon\"></span>\n                            </mat-panel-title>\n                            </mat-expansion-panel-header>\n                            <p>Borrow a stable currency against your ETH or ERC-20 tokens to realize future appreciation. Like you, we are long on crypto.                            </p>\n                        </mat-expansion-panel>\n\n                        <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <h3>High-yield earning for Automated Market Maker (AMM) pools</h3>\n                                <span class=\"icon\"></span>\n                            </mat-panel-title>\n                            </mat-expansion-panel-header>\n                            <p>Mimo ensures PAR is usable: 90% of fees collected from borrowers are used to incentivize liquidity, facilitating low-slippage trades between PAR and other crypto assets. This comes in addition to the traditional pool trading fees.\n                                </p>\n                        </mat-expansion-panel>\n\n                        <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                <h3>Multiple yield-earning opportunities</h3>\n                                <span class=\"icon\"></span>\n                            </mat-panel-title>\n                            </mat-expansion-panel-header>\n                            <p>In addition to receiving the pool’s trading fees, liquidity providers will also receive additional income collected from Mimo protocol fees such as loan origination and borrowing fees.                            </p>\n                        </mat-expansion-panel>\n                    </mat-accordion>\n                </div>\n            </div>\n\n        </div>\n    </section>\n\n    <app-footer></app-footer>\n\n</div>\n");

/***/ }),

/***/ "8IFS":
/*!****************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.sass ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-3 {\n  background: white;\n  height: auto !important;\n  padding-bottom: 15vh;\n}\n@media screen and (max-width: 640px) {\n  .section-3 {\n    padding-bottom: 0vh;\n  }\n}\n.section-3::after {\n  display: none !important;\n}\n.section-3 .column {\n  margin-bottom: 100px;\n}\n.section-3 .column.first {\n  margin-top: 30px;\n}\n.section-3 .column.no-margin {\n  margin-bottom: 20px;\n}\n.section-3 .column.col-5 {\n  margin-bottom: 30px;\n}\n.section-3 .column.col-5 h2 {\n  padding-bottom: 20px;\n  opacity: 0.3;\n  font-weight: 100;\n}\n.section-3.stats {\n  padding: 140px 0 0;\n  width: 100%;\n}\n.section-3.stats::after {\n  content: \"\";\n  display: block !important;\n  width: 97%;\n  height: 85%;\n  position: absolute;\n  top: 15%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: 0;\n  max-width: 1400px;\n  border-radius: 20px;\n  background: linear-gradient(180deg, rgba(207, 157, 253, 0.3) 0%, rgba(131, 113, 240, 0.3) 31.77%, rgba(95, 156, 252, 0.3) 67.19%, rgba(83, 194, 251, 0.3) 100%);\n}\n.section-3 h3.balance {\n  color: #A668E6;\n}\n.section-3 h3.total {\n  color: #5F9CFC;\n}\n.section-3 span {\n  color: black;\n}\n.section-3 * {\n  color: black;\n}\n.section-3 .section-header h2 {\n  font-size: 6vw;\n  color: black;\n  padding-bottom: 50px;\n  border-bottom: solid 1px black;\n}\n@media screen and (max-width: 640px) {\n  .section-3 .section-header h2 {\n    padding-bottom: 25px;\n  }\n}\n.section-3 .section-header p {\n  width: 50%;\n  padding-top: 30px;\n  margin-bottom: 0;\n  margin-top: 30px;\n  margin-left: 50%;\n}\n@media screen and (max-width: 640px) {\n  .section-3 .section-header p {\n    padding-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRwYWdlL2Fib3V0cGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0k7RUFMSjtJQU1TLG1CQUFBO0VBRVA7QUFDRjtBQUZJO0VBQ0ksd0JBQUE7QUFJUjtBQUhJO0VBQ0ksb0JBQUE7QUFLUjtBQUpRO0VBQ0ksZ0JBQUE7QUFNWjtBQUxRO0VBQ0ksbUJBQUE7QUFPWjtBQU5RO0VBQ0ksbUJBQUE7QUFRWjtBQVBZO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFTaEI7QUFSSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVVSO0FBVFE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0pBQUE7QUFXWjtBQVBRO0VBQ0ksY0FBQTtBQVNaO0FBUlE7RUFDSSxjQUFBO0FBVVo7QUFSSTtFQUNJLFlBQUE7QUFVUjtBQVJJO0VBQ0ksWUFBQTtBQVVSO0FBUlE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUFVWjtBQVRZO0VBTEo7SUFNUSxvQkFBQTtFQVlkO0FBQ0Y7QUFaUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWNaO0FBYlk7RUFOSjtJQU9RLGNBQUE7RUFnQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0cGFnZS9hYm91dHBhZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi0zXG4gICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXZoXG4gICAgLy9taW4taGVpZ2h0OiAxMDB2aFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KVxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDB2aFxuICAgICY6OmFmdGVyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxuICAgIC5jb2x1bW5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHhcbiAgICAgICAgJi5maXJzdFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweFxuICAgICAgICAmLm5vLW1hcmdpblxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgICAmLmNvbC01XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgICAgICAgICBoMiBcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMFxuICAgICYuc3RhdHNcbiAgICAgICAgcGFkZGluZzogMTQwcHggMCAwXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICY6OmFmdGVyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50XG4gICAgICAgICAgICB3aWR0aDogOTclXG4gICAgICAgICAgICBoZWlnaHQ6IDg1JVxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgICB0b3A6IDE1JVxuICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgICAgICAgICB6LWluZGV4OiAwXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMDcsIDE1NywgMjUzLCAwLjMpIDAlLCByZ2JhKDEzMSwgMTEzLCAyNDAsIDAuMykgMzEuNzclLCByZ2JhKDk1LCAxNTYsIDI1MiwgMC4zKSA2Ny4xOSUsIHJnYmEoODMsIDE5NCwgMjUxLCAwLjMpIDEwMCUpXG5cblxuICAgIGgzXG4gICAgICAgICYuYmFsYW5jZVxuICAgICAgICAgICAgY29sb3I6ICNBNjY4RTZcbiAgICAgICAgJi50b3RhbFxuICAgICAgICAgICAgY29sb3I6ICM1RjlDRkMgXG5cbiAgICBzcGFuXG4gICAgICAgIGNvbG9yOiBibGFja1xuXG4gICAgKlxuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAuc2VjdGlvbi1oZWFkZXJcbiAgICAgICAgaDIgXG4gICAgICAgICAgICBmb250LXNpemU6IDZ2d1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4XG4gICAgICAgIHAgXG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6ICA2NDBweClcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMFxuICAgICAgICAiXX0= */");

/***/ }),

/***/ "9Uf7":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutpage/aboutpage.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"intro plain\" id=\"intro\">\n    <picture class=\"main_bg\">\n        <source srcset=\"/assets/img/about_bg.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"/assets/img/about_bg.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n        <img src=\"/assets/img/about_bg-min.jpg\" alt=\"Mimo cover image\">\n    </picture>\n    <div class=\"container\">\n\n        <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g opacity=\"0.4\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n            </g>\n        </svg>\n        <a class=\"down_arrow\" onclick=\"event.preventDefault(); location.hash='section-2';\">\n            <svg  width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n            </svg>\n        </a>\n        <div class=\"intro-text\">\n        <h1>\n            About\n        </h1>\n        </div>\n        <div class=\"intro-footer\">\n            <span class=\"left wrapper\">\n                <span>MIMO</span>\n            </span>\n            <span class=\"middle wrapper\">\n                <span>ALPHA, USE AT YOUR OWN RISK</span>\n            </span>    \n            <span class=\"right wrapper\">\n                <span>                \n                    <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n                </span>\n            </span>          \n        </div>\n    </div>\n    </section>\n\n    <section class=\"section-3 stats\" id=\"section-2\">\n        <div class=\"container\">\n            <div class=\"column col-10 no-margin\">\n                <h3 class=\"balance\">Current Balance</h3>\n            </div>\n            <div class=\"column col-5\" *ngFor=\"let chain of chainlinkAggregators\">\n                <span>{{ chain.id }} $</span> \n                <h2>{{ chain.latestAnswer }}</h2>\n            </div>\n            <div class=\"column col-10 no-margin\">\n                <h3 class=\"total\">Total Locked</h3>\n            </div>\n            <div class=\"column col-5\" *ngFor=\"let lock of collateralConfigs\">\n                <span>{{ lock.id }}</span> \n                <h2>{{ lock.totalLocked  }}</h2>\n            </div>\n        </div>\n    </section>\n    <section class=\"section-3 no-bg\">\n        <div class=\"container\">\n            <div class=\"stats\">\n            \n            </div>\n            <div class=\"section-header\">\n                \n                <div class=\"column col-10 first\">\n                <h2>In 2020</h2>\n                <p>In 2020, it is still difficult for people to own their funds in their own hands. Your computing power is in your pocket, your photos are in your pocket, your personal data is yours, but your money still needs to be in a bank which may or may not give you access to it when you need it.</p>\n                </div>\n\n                <div class=\"column col-10\">\n                    <h2>At Mimo</h2>\n                    <p>At Mimo, we believe this isn't sound. We envision a world where people are free to make their financial decisions while still being protected from accidents. Today, the technology exists to offer more safety than hiding cash under your mattress, without relying on a third-party institution like a bank. </p>\n                    <p>The same technology allows people to get returns on their holdings and investments, still without any third-party intervention, because it is peer-to-peer, like the internet. This technology is none other than blockchain.</p>\n                </div>\n\n                <div class=\"column col-10\">\n                    <h2>Our Mission</h2>\n                    <p>Our mission at Mimo is to be the safest way for you to access the best of the services available on the blockchain. We are starting with a protocol that provides a safe way to borrow and earn in a new stable token pegged to the Euro. </p>\n                    <p>We will then provide a more elaborate software suite to simplify the access to this protocol, and even more of the best of customer finance, in the browser or in your pocket. We believe that decentralized finance is the answer to how to bring people into a world of sound money, and this is what Mimo is about.</p>\n                </div>\n\n            </div>\n\n        </div>\n    </section>\n\n    <app-footer></app-footer>\n");

/***/ }),

/***/ "9au0":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile-menu/mobile-menu.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mobile-menu-container\">\n    <a href=\"\" class=\"logo\">\n        <img src=\"./assets/img/logo.svg\" alt=\"\">\n    </a>\n    <div class=\"menu-trigger\">\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n    <nav>\n        <a routerLink=\"/home\"  class=\"nav-item\" routerLinkActive=\"activebutton\"><span>Parallel</span></a>\n        <a routerLink=\"/earn\" class=\"nav-item\" routerLinkActive=\"activebutton\"><span>Earn</span></a>\n        <a routerLink=\"/borrow\" class=\"nav-item\" routerLinkActive=\"activebutton\"><span>Borrow</span></a>\n        <a routerLink=\"/faq\" class=\"nav-item\" routerLinkActive=\"activebutton\"><span>FAQs</span></a>\n        <a routerLink=\"/about\" class=\"nav-item\" routerLinkActive=\"activebutton\"><span>About</span></a>\n        <!-- <span *ngFor=\"let page of pages\">\n            <a class=\"nav-item\"  routerLink=\"{{ page.pageUrl }}\" routerLinkActive=\"activebutton\" >{{page.pageTitle}}</a>\n        </span> -->\n        <a href=\"https://app.mimo.capital/\" target=\"_blank\" class=\"cta-item\">Get started</a>\n    </nav>\n    <div class=\"intro-footer\">\n        <span class=\"left\">MIMO</span> \n        <span class=\"middle\">ALPHA, USE AT YOUR OWN RISK</span>\n        <span class=\"right\">\n            <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n        </span>\n    </div>\n    <svg class=\"skew_arrow\" width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n        <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n        <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n    </svg>\n</div>\n");

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

/***/ "F5B9":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/earnpage/earnpage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-scroll-container class=\"scroll-container\">\n    <section class=\"intro\" id=\"intro\">\n        <picture class=\"main_bg\">\n            <source srcset=\"/assets/img/earn_bg.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n            <source srcset=\"/assets/img/earn_bg.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n            <img src=\"/assets/img/earn_bg-min.jpg\" alt=\"Mimo cover image\">\n        </picture> \n        <div class=\"container\">\n            <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g opacity=\"0.4\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n                </g>\n            </svg>\n\n            <div class=\"intro-text\">\n                <h1>\n                    Earn\n                </h1>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"subheading\" id=\"section-1\">\n        <div class=\"container\">\n            <div class=\"subheading-text\">\n                <h2>\n                    <span class=\"wrapper\">\n                        <span><b>High-Yield</b> Rates, </span>\n                    </span>\n                    <span class=\"wrapper\">\n                        <span>At Practically <b>0 Effort</b>.</span>\n                    </span>\n                </h2>\n                <a class=\"down_arrow\" onclick=\"event.preventDefault(); location.hash='section-1';\">\n                    <svg  width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                        <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                        <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n                    </svg>\n                </a>\n            </div>\n            <div class=\"intro-footer\">\n                <span class=\"left wrapper\">\n                    <span>MIMO</span>\n                </span>\n                <span class=\"middle wrapper\">\n                    <span>ALPHA, USE AT YOUR OWN RISK</span>\n                </span>    \n                <span class=\"right wrapper\">\n                    <span>                \n                        <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n                    </span>\n                </span>\n            </div>\n\n        </div>\n    </section>\n\n    <section class=\"description\">\n        <div class=\"container\">\n            <div class=\"banner\">\n                <picture>\n                    <source srcset=\"/assets/img/banner_earn.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n                    <source srcset=\"/assets/img/banner_earn.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n                    <img src=\"/assets/img/banner_earn-min.jpg\" alt=\"Mimo cover image\">\n                </picture> \n            </div>\n            <div class=\"text-container\">\n\n                <div class=\"column col-2\">\n                    <p>\n                        Get max value and earn rewards simply by having crypto.\n                    </p>\n                </div>\n                <div class=\"column col-2\">\n                    <p>\n                        Stack crypto upon crypto while you hold it for long term returns.\n                    </p>\n                </div>\n                <div class=\"column col-2\">\n                    <p>\n                        Instant deposits and instant withdrawals. No questions asked.\n                    </p>\n                </div>\n                <div class=\"column col-2\"></div>\n            </div>\n            <div class=\"button-container\">\n                <div class=\"column col-2\">\n                    <a href=\"https://app.mimo.capital/\" target=\"_blank\" class=\"button button--blue\">\n                        Create a wallet\n                        <svg width=\"12\" height=\"19\" viewBox=\"0 0 12 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M2.21091 2.37955L9.73156 9.89965\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                            <path d=\"M2.21091 2.37955L9.73156 9.89965\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                            <path d=\"M2.21121 17.4203L9.73132 9.89966\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                            <path d=\"M2.21121 17.4203L9.73132 9.89966\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        </svg>\n                    </a>\n                </div>\n                <!-- leave to fix layout -->\n                <div class=\"column col-2\"></div>\n                <div class=\"column col-2\"></div>\n                <div class=\"column col-2\"></div>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"section-3 _temp\">\n        <div class=\"container\">\n            <div class=\"section-header c4\">\n                <div class=\"column col-2\">\n                    <span class=\"number\">1</span>\n                </div>\n                <div class=\"column col-3\">\n                    <div class=\"img-container\">\n                        <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"column col-5\">\n                    <div class=\"x-border\">\n                        <h4>Current interest rate: </h4>\n                        <p>\n                            Easy in, easy out. No tie-ins.\n                            Interest rates get added to your amount on a per-second accuracy.\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"section-header c3\">\n                <div class=\"column col-2\">\n                    <span class=\"number\">2</span>\n                </div>\n                <div class=\"column col-3\">\n                    <div class=\"img-container\">\n                        <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"column col-5\">\n                    <div class=\"x-border\">\n                        <h4>Seriously, 0 effort  </h4>\n                        <p>\n                            Leave your crypto to earn return upon return, while you go out there and do whatever it is you want.\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"section-header c2\">\n                <div class=\"column col-2\">\n                    <span class=\"number\">3</span>\n                </div>\n                <div class=\"column col-3\">\n                    <div class=\"img-container\">\n                        <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"column col-5\">\n                    <div class=\"x-border\">\n                        <h4>No minimum balance </h4>\n                        <p>\n                            Be it 10 or 1,000,000 tokens, you’re welcome to grow it with PAR. We’re all in it together.\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"section-header c1\">\n                <div class=\"column col-2\">\n                    <span class=\"number\">4</span>\n                </div>\n                <div class=\"column col-3\">\n                    <div class=\"img-container\">\n                        <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                    </div>\n                </div>\n                <div class=\"column col-5\">\n                    <div class=\"x-border\">\n                        <h4>Deposit and withdraw anytime</h4>\n                        <p>\n                            None of that “1-year tie-in or lose all your interest” bullshit (excuse the language) that traditional banks try to pull on you. These are your assets, and we treat them that way.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "GHG4":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrowpage/borrowpage.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"intro\" id=\"intro\">\n    <picture class=\"main_bg\">\n        <source srcset=\"/assets/img/borrow_bg.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"/assets/img/borrow_bg.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n        <img src=\"/assets/img/borrow_bg-min.jpg\" alt=\"Mimo cover image\">\n    </picture>\n    <div class=\"container\">\n        <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g opacity=\"0.4\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n            </g>\n        </svg>\n        <div class=\"intro-text\">\n            <h1>\n                Borrow\n            </h1>\n        </div>\n    </div>\n</section>\n\n<section class=\"subheading\" id=\"section-1\">\n    <div class=\"container\">\n        <div class=\"subheading-text\">\n            <h2>\n                <span class=\"wrapper\">\n                    <span>Work Your <b>Assets</b>,</span>\n                </span>\n                <span class=\"wrapper\">\n                    <span><b>Maximise</b> Your Exposure.</span>\n                </span>\n\n            </h2>\n            <a class=\"down_arrow\" onclick=\"event.preventDefault(); location.hash='section-1';\">\n                <svg  width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                    <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                    <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n                </svg>\n            </a>\n        </div>\n        <div class=\"intro-footer\">\n            <span class=\"left wrapper\">\n                <span>MIMO</span>\n            </span>\n            <span class=\"middle wrapper\">\n                <span>ALPHA, USE AT YOUR OWN RISK</span>\n            </span>    \n            <span class=\"right wrapper\">\n                <span>                \n                    <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n                </span>\n            </span>\n        </div>\n\n    </div>\n</section>\n\n<section class=\"description\">\n    <div class=\"container\">\n        <div class=\"banner\">\n            <picture>\n                <source srcset=\"/assets/img/banner_borrow.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n                <source srcset=\"/assets/img/banner_borrow.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n                <img src=\"/assets/img/banner_borrow-min.jpg\" alt=\"Mimo cover image\">\n            </picture> \n        </div>\n        <div class=\"text-container\">\n\n            <div class=\"column col-2\">\n                <p>\n                    Get a stable currency at shockingly low rates without giving up on your crypto position.\n                </p>\n            </div>\n            <div class=\"column col-2\">\n                <p>\n                    Don’t liquidate your crypto, put it to work simply by borrowing PAR tokens.\n                </p>\n            </div>\n            <div class=\"column col-2\">\n                <p>\n                    Going long? Use your PAR tokens to increase your exposure.\n                </p>\n            </div>\n            <div class=\"column col-2\">\n                <p>\n                    Instant approval. No credit checks. No hassle.\n                </p>\n            </div>\n        </div>\n        <div class=\"button-container\">\n            <div class=\"column col-2\">\n                <a href=\"https://app.mimo.capital/\" target=\"_blank\" class=\"button button--blue\">\n                    Create a wallet\n                    <svg width=\"12\" height=\"19\" viewBox=\"0 0 12 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M2.21091 2.37955L9.73156 9.89965\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        <path d=\"M2.21091 2.37955L9.73156 9.89965\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        <path d=\"M2.21121 17.4203L9.73132 9.89966\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                        <path d=\"M2.21121 17.4203L9.73132 9.89966\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                </a>\n            </div>\n            <!-- leave to fix layout -->            \n            <div class=\"column col-2\"></div>\n            <div class=\"column col-2\"></div>\n            <div class=\"column col-2\"></div>\n        </div>\n    </div>\n</section>\n\n<section class=\"section-3 _temp\">\n    <div class=\"container\">\n        <div class=\"section-header c4\">\n            <div class=\"column col-2\">\n                <span class=\"number\">1</span>\n            </div>\n            <div class=\"column col-3\">\n                <div class=\"img-container\">\n                    <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"column col-5\">\n                <div class=\"x-border\">\n                    <h4>Current interest rate: </h4>\n                    <p>\n                        Easy in, easy out. No tie-ins.\n                        Interest rates get added to your outstanding loan on a per-second accuracy.\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"section-header c3\">\n            <div class=\"column col-2\">\n                <span class=\"number\">2</span>\n            </div>\n            <div class=\"column col-3\">\n                <div class=\"img-container\">\n                    <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"column col-5\">\n                <div class=\"x-border\">\n                    <h4>Secure and insured vaults</h4>\n                    <p>Mimo uses vaults for you to deposit your collateral. Your vaults are safe, unique, and your collateral is never loaned out.\nDeposit and withdraw as much as you’d like, all vaults in the protocol are covered by the Safety Reserve.\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"section-header c2\">\n            <div class=\"column col-2\">\n                <span class=\"number\">3</span>\n            </div>\n            <div class=\"column col-3\">\n                <div class=\"img-container\">\n                    <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"column col-5\">\n                <div class=\"x-border\">\n                    <h4>Audited smart contracts</h4>\n                    <p>\n                        The Mimo smart contracts have been audited by Quantstamp. Full report to be shared in the coming days.\n                    </p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"section-header c1\">\n            <div class=\"column col-2\">\n                <span class=\"number\">4</span>\n            </div>\n            <div class=\"column col-3\">\n                <div class=\"img-container\">\n                    <img src=\"/assets/img/dummy.webp\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"column col-5\">\n                <div class=\"x-border\">\n                    <h4>Equitable fee distribution</h4>\n                    <p>\n                        A healthy ecosystem is our top priority, which is why 10% of collected fees go to a safety reserve and the other 90% goes to incentivized AMM pools with the goal of encouraging liquidity.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"resume\">\n    <div class=\"download-content\">\n        <a href=\"https://t.me/mimodefi\" target=\"_blank\">Join the telegram community</a>\n    </div>\n    <picture class=\"bg\">\n        <source srcset=\"/assets/img/resume.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"/assets/img/resume.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n        <img src=\"/assets/img/resume-min.jpg\" alt=\"Mimo cover image\">\n    </picture>\n</section>\n<footer>\n    <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g opacity=\"0.4\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n        </g>\n    </svg>\n        \n    <div class=\"container\">\n        <div class=\"top-bar\">\n            <a href=\"\" class=\"logo\">\n                <img src=\"./assets/img/logo_default.svg\" alt=\"\">\n            </a>\n            <nav>\n                <a href=\"https://app.mimo.capital/\" class=\"cta-item\">Get started</a>\n            </nav>\n        </div>\n        <div class=\"link-container\">\n            <nav class=\"column col-2\">\n                <span *ngFor=\"let page of pages\">\n                    <a class=\"nav-item\"  routerLink=\"{{ page.pageUrl }}\" routerLinkActive=\"activebutton\" >{{page.pageTitle}}</a>\n                </span>\n            </nav>\n            <nav class=\"column col-2\">\n                <a href=\"https://t.me/mimodefi\">Telegram</a>\n                <a href=\"https://www.reddit.com/r/mimodefi/\">Reddit</a>\n                <a href=\"https://twitter.com/mimodefi\">Twitter</a>\n                <a href=\"https://www.instagram.com/mimo_defi/\">Instagram</a>\n                <a href=\"https://fb.me/mimodefi\">Facebook</a>\n                <a href=\"./assets/pdf/Mimo - White Paper.pdf\" target=\"_blank\">White Paper</a>\n            </nav>\n            <!-- <nav class=\"column col-2\">\n                <a href=\"\">AppStore</a>\n                <a href=\"\">PlayStore</a>\n                <a href=\"\">Web app</a>\n            </nav> -->\n            <nav class=\"column col-2\">\n                <a href=\"\" class=\"location\">\n                    MIMO\n                </a>\n                <a href=\"https://defipulse.com/defi-list\" target=\"_blank\">\n                    <img class=\"defipulse\" src=\"./assets/img/defipulse.svg\" alt=\"\">\n                    DEFIPULSE</a>\n            </nav>\n        </div>\n        <a class=\"up_arrow\" onclick=\"event.preventDefault(); location.hash='intro';\">\n            <svg width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n            </svg>\n        </a>\n       \n        <div class=\"intro-footer\">\n            <span class=\"left\">MIMO</span> \n            <span class=\"middle\">ALPHA, USE AT YOUR OWN RISK</span>\n            <span class=\"right\">\n                <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n            </span>        \n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "J1Ni":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: pageAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageAnimation", function() { return pageAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const pageAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> HomePages', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> EarnPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> BorrowPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FaqPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true })
    ]),
]);


/***/ }),

/***/ "Kb0R":
/*!**************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_errorpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./errorpage.component.html */ "dcAQ");
/* harmony import */ var _errorpage_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorpage.component.sass */ "bV5p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ErrorpageComponent = class ErrorpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-errorpage').classList.add('off');
        setTimeout(() => {
            document.querySelector('app-errorpage').classList.remove('off');
        }, 1);
    }
};
ErrorpageComponent.ctorParameters = () => [];
ErrorpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-errorpage',
        template: _raw_loader_errorpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_errorpage_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ErrorpageComponent);



/***/ }),

/***/ "MYmT":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./homepage.component.html */ "7Ac5");
/* harmony import */ var _homepage_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.component.sass */ "S/Ig");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "z/o8");





let HomepageComponent = class HomepageComponent {
    constructor() {
        this.page = {
            pageId: 1,
            pageTitle: 'Parallel',
            pageSubheading: '<span class="wrapper"><span>A <b>Decentralized</b> Stable Token,</span></span><span class="wrapper"><span>On the <b>Ethereum</b> Blockchain.</span></span>',
        };
    }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-homepage').classList.add('off');
        document.querySelector('app-homepage').classList.add('no-pointer');
        setTimeout(() => {
            document.querySelector('app-homepage').classList.remove('off');
        }, 1);
        setTimeout(() => {
            document.querySelector('app-homepage').classList.remove('no-pointer');
        }, 1200);
        this.scrollFunction();
        this.scrollFunction();
    }
    scrollFunction() {
        const appHome = document.querySelector('app-homepage');
        const header = document.querySelector('header');
        const tofade = document.querySelectorAll('.tofade');
        let lastScrollTop = 0;
        appHome.addEventListener("scroll", function () {
            let st = this.scrollTop;
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
            // tofade.forEach((els) => {
            //   var r_top = els.getBoundingClientRect().top
            //   if(r_top <=  window.innerHeight - 120) {
            //     els.classList.add('_faded')
            //   } else {
            //     els.classList.remove('_faded')
            //   }
            // })
            const main_bg = document.querySelector('.main_bg');
            const main_bg_img = document.querySelector('.main_bg img');
            const download_bg = document.querySelector('.download .bg');
            const download_bg_img = document.querySelector('.download .bg img');
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            const m_top = main_bg.getBoundingClientRect().top;
            const d_top = download_bg.getBoundingClientRect().top;
            const r_top = resume_bg.getBoundingClientRect().top;
            function runScroll() {
                if (m_top > -500) {
                    gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(main_bg_img, 0.1, {
                        scaleX: 1 + (m_top * -0.1) / 250,
                        scaleY: 1 + (m_top * -0.1) / 250
                    });
                }
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(download_bg_img, 0.1, {
                    y: 1 + (d_top * -0.1) * 2
                });
                gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].to(resume_bg_img, 0.1, {
                    y: 1 + (r_top * -0.1) * 2
                });
            }
            requestAnimationFrame(runScroll);
        });
    }
};
HomepageComponent.ctorParameters = () => [];
HomepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homepage',
        template: _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homepage_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomepageComponent);



/***/ }),

/***/ "S/Ig":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zYXNzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.sass */ "MYmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations */ "J1Ni");





let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
        this.mobileMenu();
    }
    prepareRoute(outlet) {
        if (window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i)) {
            return false;
        }
        else {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
    }
    mobileMenu() {
        const mobileMenuTrigger = document.querySelector('.menu-trigger');
        const mobileMenu = document.querySelector('app-mobile-menu');
        const pageContainer = document.querySelector('.page-container');
        const mobileLinks = document.querySelectorAll('.mobile-menu-container nav a');
        mobileLinks.forEach(function (els) {
            els.addEventListener('click', function () {
                mobileMenu.classList.remove('open');
                mobileMenuTrigger.classList.remove('close');
                pageContainer.classList.add('off');
            });
        });
        mobileMenuTrigger.addEventListener('click', function () {
            this.classList.toggle('close');
            pageContainer.classList.toggle('off');
            mobileMenu.classList.toggle('open');
        });
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_4__["pageAnimation"]
        ],
        styles: [_app_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routeAnimations]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\" class=\"page-container\"></router-outlet>\n</div>\n<app-header></app-header>\n<app-mobile-menu class=\"app-mobile-menu\"></app-mobile-menu>");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "j8Bj");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "0VLA");
/* harmony import */ var _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faqpage/faqpage.component */ "6+QU");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./borrowpage/borrowpage.component */ "/NSc");
/* harmony import */ var _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./earnpage/earnpage.component */ "3MTK");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "Kb0R");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





// routing


//common



// pages









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_11__["AboutpageComponent"],
            _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_12__["FaqpageComponent"],
            _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_9__["MobileMenuComponent"],
            _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_14__["BorrowpageComponent"],
            _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_15__["EarnpageComponent"],
            _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_16__["ErrorpageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _graphql_module__WEBPACK_IMPORTED_MODULE_17__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"], data: { animation: 'HomePage' } },
                { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_11__["AboutpageComponent"], data: { animation: 'AboutPage' } },
                { path: 'faq', component: _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_12__["FaqpageComponent"], data: { animation: 'FaqPage' } },
                { path: 'earn', component: _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_15__["EarnpageComponent"], data: { animation: 'EarnPage' } },
                { path: 'borrow', component: _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_14__["BorrowpageComponent"], data: { animation: 'BorrowPage' } },
                { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"], redirectTo: '', pathMatch: 'full' },
                { path: '**', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_16__["ErrorpageComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "b0T1":
/*!**************************************************!*\
  !*** ./src/app/earnpage/earnpage.component.sass ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vhcm5wYWdlL2Vhcm5wYWdlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "bV5p":
/*!****************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.sass ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "dcAQ":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errorpage/errorpage.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"intro plain error\" id=\"intro\">\n    <picture class=\"main_bg\">\n        <source srcset=\"/assets/img/resume.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"/assets/img/resume.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n        <img src=\"/assets/img/resume-min.jpg\" alt=\"Mimo cover image\">\n    </picture>\n    <div class=\"container\">\n        \n        <!-- <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g opacity=\"0.4\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n            </g>\n        </svg> -->\n       \n        <div class=\"intro-text\">\n            <h1>\n                404\n            </h1>\n            <h2>\n                <span class=\"wrapper\">\n                    <span>Sorry, there’s ,</span>\n                </span> <br>\n                <span class=\"wrapper\">\n                    <span>nothing here.</span>\n                </span>\n                \n            </h2>\n        </div>\n        <div class=\"button-container\">\n            <!-- leave to fix layout -->            \n            <div class=\"column col-2\"></div>\n            <div class=\"column col-2\"></div>\n            <div class=\"column col-2\"></div>\n            <div class=\"column col-2\"></div>\n        </div>\n        <div class=\"intro-footer\">\n            <span class=\"left wrapper\">\n                <span>MIMO</span>\n            </span>\n            <span class=\"right wrapper\">\n                <span>                \n                    <a href=\"https://app.mimo.capital/\">Disclaimer</a>\n                </span>\n            </span>\n        </div>\n    </div>\n</section>\n\n<footer data-scroll data-scroll-speed=\"3\">\n    <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g opacity=\"0.4\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n        </g>\n    </svg>\n        \n    <div class=\"container\">\n        \n        <div class=\"link-container\">\n            <nav class=\"column col-2\">\n                <a class=\"nav-item\" routerLink=\"/home\" routerLinkActive=\"activebutton\">Home</a>\n                <a routerLink=\"/earn\" class=\"nav-item\" routerLinkActive=\"activebutton\">Earn</a>\n                <a routerLink=\"/borrow\" class=\"nav-item\" routerLinkActive=\"activebutton\">Borrow</a>\n                <a routerLink=\"/faq\" class=\"nav-item\" routerLinkActive=\"activebutton\">FAQs</a>\n                <a routerLink=\"/about\" class=\"nav-item\" routerLinkActive=\"activebutton\">About</a>\n            </nav>\n            <nav class=\"column col-2\">\n                <a href=\"https://t.me/mimodefi\">Telegram</a>\n                <a href=\"https://www.reddit.com/r/mimodefi/\">Reddit</a>\n                <a href=\"https://twitter.com/mimodefi\">Twitter</a>\n                <a href=\"https://www.instagram.com/mimo_defi/\">Instagram</a>\n                <a href=\"https://fb.me/mimodefi\">Facebook</a>\n                <a href=\"\">White Paper</a>\n            </nav>\n            <!-- <nav class=\"column col-2\">\n                <a href=\"\">AppStore</a>\n                <a href=\"\">PlayStore</a>\n                <a href=\"\">Web app</a>\n            </nav> -->\n            <nav class=\"column col-2\">\n                <a href=\"\" class=\"location\">\n                    MIMO\n                </a>\n            </nav>\n        </div>\n        <a class=\"up_arrow\" onclick=\"event.preventDefault(); location.hash='intro';\">\n            <svg width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n            </svg>\n        </a>\n       \n        <div class=\"intro-footer\">\n            <span class=\"left\">MIMO</span> \n            <span class=\"middle\">ALPHA, USE AT YOUR OWN RISK</span>\n            <span class=\"right\">\n                <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n            </span>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "ePW6":
/*!******************************!*\
  !*** ./src/app/mock-page.ts ***!
  \******************************/
/*! exports provided: PAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES", function() { return PAGES; });
const PAGES = [
    {
        pageId: 1,
        pageTitle: 'Parallel',
        pageSubheading: '<span class="wrapper"><span>A <b>Decentralized</b> Stable Token,</span></span><span class="wrapper"><span>On the <b>Ethereum</b> Blockchain.</span></span>',
        pageUrl: '/home'
    },
    {
        pageId: 2,
        pageTitle: 'Earn',
        pageSubheading: '<span class="wrapper"><span>A <b>Decentralized</b> Stable Token,</span></span><span class="wrapper"><span>On the <b>Ethereum</b> Blockchain.</span></span>',
        pageUrl: '/earn'
    },
    {
        pageId: 3,
        pageTitle: 'Borrow',
        pageSubheading: '<span class="wrapper"><span>A <b>Decentralized</b> Stable Token,</span></span><span class="wrapper"><span>On the <b>Ethereum</b> Blockchain.</span></span>',
        pageUrl: '/borrow'
    },
    {
        pageId: 4,
        pageTitle: 'About',
        pageSubheading: '<span class="wrapper"><span>A <b>Decentralized</b> Stable Token,</span></span><span class="wrapper"><span>On the <b>Ethereum</b> Blockchain.</span></span>',
        pageUrl: '/about'
    },
    {
        pageId: 5,
        pageTitle: 'Faqs',
        pageSubheading: '<span class="wrapper"><span>A <b>Decentralized</b> Stable Token,</span></span><span class="wrapper"><span>On the <b>Ethereum</b> Blockchain.</span></span>',
        pageUrl: '/faq'
    },
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.sass */ "gxSZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock-page */ "ePW6");





let HeaderComponent = class HeaderComponent {
    constructor() {
        this.pages = _mock_page__WEBPACK_IMPORTED_MODULE_4__["PAGES"];
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.sass */ "ySbt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock-page */ "ePW6");





let FooterComponent = class FooterComponent {
    constructor() {
        this.pages = _mock_page__WEBPACK_IMPORTED_MODULE_4__["PAGES"];
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "gxSZ":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "i4RJ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqpage/faqpage.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"intro plain\" id=\"intro\">\n    <picture class=\"main_bg\">\n        <source srcset=\"/assets/img/faq_bg.webp\" media=\"(min-width: 768px)\" type=\"image/webp\">\n        <source srcset=\"/assets/img/faq_bg.jpg\" media=\"(min-width: 768px)\" type=\"image/jpeg\"> \n        <img src=\"/assets/img/faq_bg-min.jpg\" alt=\"Mimo cover image\">\n    </picture>\n    <div class=\"container\">\n        <svg class=\"mimo_bg\" width=\"618\" height=\"588\" viewBox=\"0 0 618 588\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g opacity=\"0.4\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z\" fill=\"#A668E6\"/>\n            </g>\n        </svg>\n        <a class=\"down_arrow\" onclick=\"event.preventDefault(); location.hash='section-2';\">\n            <svg  width=\"57\" height=\"57\" viewBox=\"0 0 57 57\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <line x1=\"3.67769\" y1=\"24.6066\" x2=\"31.962\" y2=\"52.8909\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"52.9619\" y1=\"24.6777\" x2=\"24.6777\" y2=\"52.962\" stroke=\"white\" stroke-width=\"10\"/>\n                <line x1=\"29.1422\" y1=\"6.14218\" x2=\"29.1422\" y2=\"46.1422\" stroke=\"white\" stroke-width=\"10\"/>\n            </svg>\n        </a>\n        <div class=\"intro-text\">\n        <h1>\n            FAQs\n        </h1>\n        </div>\n        <div class=\"intro-footer\">\n            <span class=\"left wrapper\">\n                <span>MIMO</span>\n            </span>\n            <span class=\"middle wrapper\">\n                <span>ALPHA, USE AT YOUR OWN RISK</span>\n            </span>    \n            <span class=\"right wrapper\">\n                <span>                \n                    <a href=\"./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf\" target=\"_blank\">Disclaimer</a>\n                </span>\n            </span>\n        </div>\n    </div>\n</section>\n\n\n<section class=\"section-2\" id=\"section-2\">\n    <div class=\"container\">\n        <div class=\"section-header\">\n\n            <div class=\"column col-10\">\n                <h2>PAR</h2>\n            </div>\n\n            <div class=\"column col-7\">\n                <mat-accordion class=\"faqpanel\">\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>How is the value of PAR guaranteed?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>The value of PAR is primarily guaranteed due to over-collateralization during its creation. There is always more than 100% collateral backing the stable token.\n                        </p>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n            <div class=\"column col-10\">\n                <h2>Borrow</h2>\n            </div>\n\n            <div class=\"column col-7\">\n                <mat-accordion class=\"faqpanel\">\n                    <mat-expansion-panel >\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>What happens if the value of collateral dips to under 100% of the loan?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>Based on the vault’s collateral balance, a borrower can borrow up to a certain amount of PAR. The vault must have collateralized more than a Minimum Collateralization Ratio (MCR)% of 150%.\n                        </p>\n                        <p>If the value of collateral dips to under 100% of the loan due to market changes, borrowers need to retain enough collateral in their vaults to avoid being liquidated. Otherwise, profit-seeking liquidators can liquidate the undercollateralized Vault to receive its collateral at a discount.</p>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>How do interest rates for borrowing get decided and how stable are the rates?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>Interest rate adjustments will be used to counter short term fluctuations of the price.\n                        </p>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>What is the insurance fund?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>The insurance fund grows based on protocol fees and comes into play in liquidations during flash crashes when the collateral becomes worth less than than the issued tokens. Most of the time, the insurance fund does not need to act, as liquidations get triggered long before this point.</p>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>How do Automated Market Maker (AMM) pools work?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>The PAR protocol incentivizes its users to act in the best interest of the network as it grows. The protocol distributes a percentage of all fees collected from borrowers to the liquidity providers of Mimo AMM pools. This ensures that there’s always sufficient liquidity for PAR tokens.\n                        </p>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n\n            <div class=\"column col-10\">\n                <h2>Earn</h2>\n            </div>\n\n            <div class=\"column col-7\">\n                <mat-accordion class=\"faqpanel\">\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>Where does the interest come from?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>Earns optimized yield based on both swap fees and the vault fees collected from borrowers of the PAR stable token.</p>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>How are interest rates determined and how stable are they? </h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>Stable rates are defined at the protocol level. We do intend to bring the light on our governance model in the coming weeks.</p>\n                    </mat-expansion-panel>\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <h3>How is my money secured?</h3>\n                            <span class=\"icon\"></span>\n                        </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <p>The earnings happen in a pool, which is at its core a collection of audited smart contracts. Your money there is safe, and you can take it out at any time.</p>\n                    </mat-expansion-panel>\n\n\n                </mat-accordion>\n            </div>\n        </div>\n\n    </div>\n</section>\n\n\n<app-footer></app-footer>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mobile_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mobile-menu.component.html */ "9au0");
/* harmony import */ var _mobile_menu_component_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-menu.component.sass */ "pAWy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock-page */ "ePW6");





let MobileMenuComponent = class MobileMenuComponent {
    constructor() {
        this.pages = _mock_page__WEBPACK_IMPORTED_MODULE_4__["PAGES"];
    }
    ngOnInit() {
    }
};
MobileMenuComponent.ctorParameters = () => [];
MobileMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mobile-menu',
        template: _raw_loader_mobile_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mobile_menu_component_sass__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MobileMenuComponent);



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"container\">\n        <a routerLink=\"/home\" class=\"logo\">\n            <img class=\"_default\" src=\"./assets/img/logo_default.svg\" alt=\"\">\n            <img class=\"_white\" src=\"./assets/img/logo.svg\" alt=\"\">\n        </a>\n        <nav>\n            <span *ngFor=\"let page of pages\">\n                <a class=\"nav-item\"  routerLink=\"{{ page.pageUrl }}\" routerLinkActive=\"activebutton\" >{{page.pageTitle}}</a>\n            </span>\n            <a href=\"https://app.mimo.capital/\" target=\"_blank\"  class=\"cta-item\">Get started</a>\n        </nav>\n    </div>\n</header>\n");

/***/ }),

/***/ "pAWy":
/*!********************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.sass ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zYXNzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vxAx":
/*!************************************************!*\
  !*** ./src/app/faqpage/faqpage.component.sass ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-2 {\n  background: white;\n  height: auto !important;\n  padding-bottom: 15vh;\n  min-height: 100vh;\n}\n.section-2 .column {\n  margin-bottom: 0px;\n}\n@media screen and (max-width: 640px) {\n  .section-2 .column.col-10:not(:first-child) {\n    margin-top: 100px;\n  }\n}\n.section-2 .column.col-7 {\n  margin-left: 30%;\n}\n@media screen and (max-width: 640px) {\n  .section-2 .column.col-7 {\n    margin-left: 0;\n  }\n}\n.section-2 * {\n  color: black;\n}\n.section-2 .section-header h2 {\n  font-size: 6vw;\n  color: black;\n  padding-bottom: 10px;\n  border-bottom: solid 1px black;\n}\n@media screen and (max-width: 640px) {\n  .section-2 .section-header h2 {\n    font-size: 10vw;\n  }\n}\n.section-2 .section-header p {\n  width: 75%;\n  padding-top: 30px;\n  margin-bottom: 0;\n  margin-top: 30px;\n  margin-left: 25%;\n}\nmat-accordion.faqpanel mat-expansion-panel .mat-expansion-panel-body p {\n  margin: 0 0 20px !important;\n  width: 90% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxcGFnZS9mYXFwYWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFZO0VBREo7SUFFUSxpQkFBQTtFQUdkO0FBQ0Y7QUFIUTtFQUNJLGdCQUFBO0FBS1o7QUFKWTtFQUZKO0lBR1EsY0FBQTtFQU9kO0FBQ0Y7QUFQSTtFQUNJLFlBQUE7QUFTUjtBQVBRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBU1o7QUFSWTtFQUxKO0lBTVEsZUFBQTtFQVdkO0FBQ0Y7QUFYUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFaO0FBVFE7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FBWVoiLCJmaWxlIjoic3JjL2FwcC9mYXFwYWdlL2ZhcXBhZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi0yXG4gICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXZoXG4gICAgbWluLWhlaWdodDogMTAwdmhcbiAgICAuY29sdW1uXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweFxuICAgICAgICAmLmNvbC0xMDpub3QoOmZpcnN0LWNoaWxkKVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6ICA2NDBweClcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweFxuICAgICAgICAmLmNvbC03XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwXG4gICAgKlxuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAuc2VjdGlvbi1oZWFkZXJcbiAgICAgICAgaDIgXG4gICAgICAgICAgICBmb250LXNpemU6IDZ2d1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTB2d1xuICAgICAgICBwIFxuICAgICAgICAgICAgd2lkdGg6IDc1JVxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHhcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHhcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSVcbiAgICAgICAgXG5tYXQtYWNjb3JkaW9uLmZhcXBhbmVsIFxuICAgIG1hdC1leHBhbnNpb24tcGFuZWxcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSBwIFxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCFpbXBvcnRhbnRcbiAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudCJdfQ== */");

/***/ }),

/***/ "ySbt":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.sass ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */");

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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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