(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/NSc":
/*!****************************************************!*\
  !*** ./src/app/borrowpage/borrowpage.component.ts ***!
  \****************************************************/
/*! exports provided: BorrowpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowpageComponent", function() { return BorrowpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class BorrowpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-borrowpage').classList.add('off');
        setTimeout(() => {
            document.querySelector('app-borrowpage').classList.remove('off');
        }, 1);
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
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            const m_top = main_bg.getBoundingClientRect().top;
            const r_top = resume_bg.getBoundingClientRect().top;
            if (m_top > -500) {
                gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(main_bg_img, 0.1, {
                    scaleX: 1 + (m_top * -0.1) / 250,
                    scaleY: 1 + (m_top * -0.1) / 250
                });
            }
            gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(resume_bg_img, .1, {
                y: 1 + (r_top * -0.1) * 2
            });
        }, false);
    }
}
BorrowpageComponent.ɵfac = function BorrowpageComponent_Factory(t) { return new (t || BorrowpageComponent)(); };
BorrowpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BorrowpageComponent, selectors: [["app-borrowpage"]], decls: 137, vars: 0, consts: [["id", "intro", 1, "intro"], [1, "main_bg"], ["srcset", "/assets/img/borrow_bg.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/borrow_bg.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/borrow_bg-min.jpg", "alt", "Mimo cover image"], [1, "container"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], [1, "intro-text"], ["id", "section-1", 1, "subheading"], [1, "subheading-text"], [1, "wrapper"], ["onclick", "event.preventDefault(); location.hash='section-1';", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-footer"], [1, "left", "wrapper"], [1, "middle", "wrapper"], [1, "right", "wrapper"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], [1, "description"], [1, "banner"], ["srcset", "/assets/img/banner_borrow.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/banner_borrow.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/banner_borrow-min.jpg", "alt", "Mimo cover image"], [1, "text-container"], [1, "column", "col-2"], [1, "button-container"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "button", "button--blue"], ["width", "12", "height", "19", "viewBox", "0 0 12 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.21091 2.37955L9.73156 9.89965", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2.21121 17.4203L9.73132 9.89966", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "button", "button--black"], [1, "section-3", "_temp"], [1, "section-header"], [1, "number"], [1, "column", "col-3"], [1, "img-container"], ["src", "/assets/img/dummy.webp", "alt", ""], [1, "column", "col-5"], [1, "x-border"]], template: function BorrowpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Borrow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Work Your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Maximise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Your Exposure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "source", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "source", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Get a stable currency at shockingly low rates without giving up on your crypto position. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Don\u2019t liquidate your crypto, put it to work simply by borrowing PAR tokens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Going long? Use your PAR tokens to increase your exposure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Instant approval. No credit checks. No hassle. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Create a wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " I already have a wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Current interest rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Easy in, easy out. No tie-ins. Interest rates get added to your outstanding loan on a per-second accuracy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Secure and insured vaults");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Mimo uses vaults for you to deposit your collateral. Your vaults are safe, unique, and your collateral is never loaned out.\nDeposit and withdraw as much as you\u2019d like, all vaults in the protocol are covered by the Safety Reserve. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Audited smart contracts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " The Mimo smart contracts have been audited by Quantstamp. Full report to be shared in the coming days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Equitable fee distribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " A healthy ecosystem is our top priority, which is why 10% of collected fees go to a safety reserve and the other 90% goes to incentivized AMM pools with the goal of encouraging liquidity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "app-footer");
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvcnJvd3BhZ2UvYm9ycm93cGFnZS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BorrowpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-borrowpage',
                templateUrl: './borrowpage.component.html',
                styleUrls: ['./borrowpage.component.sass']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");







function AboutpageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chain_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", chain_r2.id, " $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chain_r2.latestAnswer);
} }
function AboutpageComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lock_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lock_r3.totalLocked);
} }
class AboutpageComponent {
    constructor(apollo) {
        this.apollo = apollo;
    }
    ngOnInit() {
        this.apollo.watchQuery({
            query: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"] `
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
            this.chainlinkAggregators = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.chainlinkAggregators;
            this.collateralConfigs = (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.collateralConfigs;
            // this.chainlinkAggregators.forEach(function(els){
            //   const ids = els.id
            //   const latestAnswers =  (els.latestAnswer /  Math.pow(10,18))
            //   console.log(ids, latestAnswers)
            //  })
        });
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-aboutpage').classList.add('off');
        setTimeout(() => {
            document.querySelector('app-aboutpage').classList.remove('off');
        }, 1);
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
            const m_top = main_bg.getBoundingClientRect().top;
            const r_top = resume_bg.getBoundingClientRect().top;
            if (m_top > -500) {
                gsap__WEBPACK_IMPORTED_MODULE_2__["TweenLite"].to(main_bg_img, 0.1, {
                    scaleX: 1 + (m_top * -0.1) / 250,
                    scaleY: 1 + (m_top * -0.1) / 250
                });
            }
            gsap__WEBPACK_IMPORTED_MODULE_2__["TweenLite"].to(resume_bg_img, .1, {
                y: 1 + (r_top * -0.1) * 2
            });
        });
    }
}
AboutpageComponent.ɵfac = function AboutpageComponent_Factory(t) { return new (t || AboutpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"])); };
AboutpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutpageComponent, selectors: [["app-aboutpage"]], decls: 62, vars: 2, consts: [["id", "intro", 1, "intro", "plain"], [1, "main_bg"], ["srcset", "/assets/img/about_bg.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/about_bg.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/about_bg-min.jpg", "alt", "Mimo cover image"], [1, "container"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], ["onclick", "event.preventDefault(); location.hash='section-2';", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-text"], [1, "intro-footer"], [1, "left", "wrapper"], [1, "middle", "wrapper"], [1, "right", "wrapper"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], ["id", "section-2", 1, "section-3", "stats"], [1, "column", "col-10", "no-margin"], [1, "balance"], ["class", "column col-5", 4, "ngFor", "ngForOf"], [1, "total"], [1, "section-3", "no-bg"], [1, "stats"], [1, "section-header"], [1, "column", "col-10", "first"], [1, "column", "col-10"], [1, "column", "col-5"]], template: function AboutpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Current Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AboutpageComponent_div_33_Template, 5, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Total Locked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AboutpageComponent_div_37_Template, 5, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "In 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "In 2020, it is still difficult for people to own their funds in their own hands. Your computing power is in your pocket, your photos are in your pocket, your personal data is yours, but your money still needs to be in a bank which may or may not give you access to it when you need it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "At Mimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "At Mimo, we believe this isn't sound. We envision a world where people are free to make their financial decisions while still being protected from accidents. Today, the technology exists to offer more safety than hiding cash under your mattress, without relying on a third-party institution like a bank. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "The same technology allows people to get returns on their holdings and investments, still without any third-party intervention, because it is peer-to-peer, like the internet. This technology is none other than blockchain.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Our mission at Mimo is to be the safest way for you to access the best of the services available on the blockchain. We are starting with a protocol that provides a safe way to borrow and earn in a new stable token pegged to the Euro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "We will then provide a more elaborate software suite to simplify the access to this protocol, and even more of the best of customer finance, in the browser or in your pocket. We believe that decentralized finance is the answer to how to bring people into a world of sound money, and this is what Mimo is about.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chainlinkAggregators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collateralConfigs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".section-3[_ngcontent-%COMP%] {\n  background: white;\n  height: auto !important;\n  padding-bottom: 15vh;\n}\n@media screen and (max-width: 640px) {\n  .section-3[_ngcontent-%COMP%] {\n    padding-bottom: 0vh;\n  }\n}\n.section-3[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.section-3[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.section-3[_ngcontent-%COMP%]   .column.first[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.section-3[_ngcontent-%COMP%]   .column.no-margin[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.section-3[_ngcontent-%COMP%]   .column.col-5[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.section-3[_ngcontent-%COMP%]   .column.col-5[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  opacity: 0.3;\n  font-weight: 100;\n}\n.section-3.stats[_ngcontent-%COMP%] {\n  padding: 140px 0 0;\n  width: 100%;\n}\n.section-3.stats[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block !important;\n  width: 97%;\n  height: 85%;\n  position: absolute;\n  top: 15%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: 0;\n  max-width: 1400px;\n  border-radius: 20px;\n  background: linear-gradient(180deg, rgba(207, 157, 253, 0.3) 0%, rgba(131, 113, 240, 0.3) 31.77%, rgba(95, 156, 252, 0.3) 67.19%, rgba(83, 194, 251, 0.3) 100%);\n}\n.section-3[_ngcontent-%COMP%]   h3.balance[_ngcontent-%COMP%] {\n  color: #A668E6;\n}\n.section-3[_ngcontent-%COMP%]   h3.total[_ngcontent-%COMP%] {\n  color: #5F9CFC;\n}\n.section-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n}\n.section-3[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: black;\n}\n.section-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 6vw;\n  color: black;\n  padding-bottom: 50px;\n  border-bottom: solid 1px black;\n}\n@media screen and (max-width: 640px) {\n  .section-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-bottom: 25px;\n  }\n}\n.section-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-top: 30px;\n  margin-bottom: 0;\n  margin-top: 30px;\n  margin-left: 50%;\n}\n@media screen and (max-width: 640px) {\n  .section-3[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRwYWdlL2Fib3V0cGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0k7RUFMSjtJQU1TLG1CQUFBO0VBRVA7QUFDRjtBQUZJO0VBQ0ksd0JBQUE7QUFJUjtBQUhJO0VBQ0ksb0JBQUE7QUFLUjtBQUpRO0VBQ0ksZ0JBQUE7QUFNWjtBQUxRO0VBQ0ksbUJBQUE7QUFPWjtBQU5RO0VBQ0ksbUJBQUE7QUFRWjtBQVBZO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFTaEI7QUFSSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVVSO0FBVFE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0pBQUE7QUFXWjtBQVBRO0VBQ0ksY0FBQTtBQVNaO0FBUlE7RUFDSSxjQUFBO0FBVVo7QUFSSTtFQUNJLFlBQUE7QUFVUjtBQVJJO0VBQ0ksWUFBQTtBQVVSO0FBUlE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUFVWjtBQVRZO0VBTEo7SUFNUSxvQkFBQTtFQVlkO0FBQ0Y7QUFaUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWNaO0FBYlk7RUFOSjtJQU9RLGNBQUE7RUFnQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0cGFnZS9hYm91dHBhZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi0zXG4gICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXZoXG4gICAgLy9taW4taGVpZ2h0OiAxMDB2aFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KVxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDB2aFxuICAgICY6OmFmdGVyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxuICAgIC5jb2x1bW5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHhcbiAgICAgICAgJi5maXJzdFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweFxuICAgICAgICAmLm5vLW1hcmdpblxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxuICAgICAgICAmLmNvbC01XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgICAgICAgICBoMiBcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMFxuICAgICYuc3RhdHNcbiAgICAgICAgcGFkZGluZzogMTQwcHggMCAwXG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgICAgICY6OmFmdGVyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50XG4gICAgICAgICAgICB3aWR0aDogOTclXG4gICAgICAgICAgICBoZWlnaHQ6IDg1JVxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgICAgICAgICB0b3A6IDE1JVxuICAgICAgICAgICAgbGVmdDogMFxuICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvXG4gICAgICAgICAgICB6LWluZGV4OiAwXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMDcsIDE1NywgMjUzLCAwLjMpIDAlLCByZ2JhKDEzMSwgMTEzLCAyNDAsIDAuMykgMzEuNzclLCByZ2JhKDk1LCAxNTYsIDI1MiwgMC4zKSA2Ny4xOSUsIHJnYmEoODMsIDE5NCwgMjUxLCAwLjMpIDEwMCUpXG5cblxuICAgIGgzXG4gICAgICAgICYuYmFsYW5jZVxuICAgICAgICAgICAgY29sb3I6ICNBNjY4RTZcbiAgICAgICAgJi50b3RhbFxuICAgICAgICAgICAgY29sb3I6ICM1RjlDRkMgXG5cbiAgICBzcGFuXG4gICAgICAgIGNvbG9yOiBibGFja1xuXG4gICAgKlxuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAuc2VjdGlvbi1oZWFkZXJcbiAgICAgICAgaDIgXG4gICAgICAgICAgICBmb250LXNpemU6IDZ2d1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4XG4gICAgICAgIHAgXG4gICAgICAgICAgICB3aWR0aDogNTAlXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6ICA2NDBweClcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMFxuICAgICAgICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutpage',
                templateUrl: './aboutpage.component.html',
                styleUrls: ['./aboutpage.component.sass']
            }]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class EarnpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-earnpage').classList.add('off');
        setTimeout(() => {
            document.querySelector('app-earnpage').classList.remove('off');
        }, 1);
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
            const resume_bg = document.querySelector('.resume .bg');
            const resume_bg_img = document.querySelector('.resume .bg img');
            const m_top = main_bg.getBoundingClientRect().top;
            const r_top = resume_bg.getBoundingClientRect().top;
            if (m_top > -500) {
                gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(main_bg_img, 0.1, {
                    scaleX: 1 + (m_top * -0.1) / 250,
                    scaleY: 1 + (m_top * -0.1) / 250
                });
            }
            gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(resume_bg_img, .1, {
                y: 1 + (r_top * -0.1) * 2
            });
        }, false);
    }
}
EarnpageComponent.ɵfac = function EarnpageComponent_Factory(t) { return new (t || EarnpageComponent)(); };
EarnpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EarnpageComponent, selectors: [["app-earnpage"]], decls: 136, vars: 0, consts: [["data-scroll-container", "", 1, "scroll-container"], ["id", "intro", 1, "intro"], [1, "main_bg"], ["srcset", "/assets/img/earn_bg.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/earn_bg.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/earn_bg-min.jpg", "alt", "Mimo cover image"], [1, "container"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], [1, "intro-text"], ["id", "section-1", 1, "subheading"], [1, "subheading-text"], [1, "wrapper"], ["onclick", "event.preventDefault(); location.hash='section-1';", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-footer"], [1, "left", "wrapper"], [1, "middle", "wrapper"], [1, "right", "wrapper"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], [1, "description"], [1, "banner"], ["srcset", "/assets/img/banner_earn.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/banner_earn.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/banner_earn-min.jpg", "alt", "Mimo cover image"], [1, "text-container"], [1, "column", "col-2"], [1, "button-container"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "button", "button--blue"], ["width", "12", "height", "19", "viewBox", "0 0 12 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.21091 2.37955L9.73156 9.89965", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2.21121 17.4203L9.73132 9.89966", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "button", "button--black"], [1, "section-3", "_temp"], [1, "section-header"], [1, "number"], [1, "column", "col-3"], [1, "img-container"], ["src", "/assets/img/dummy.webp", "alt", ""], [1, "column", "col-5"], [1, "x-border"]], template: function EarnpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "picture", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Earn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "High-Yield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Rates, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "At Practically ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "0 Effort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "source", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "source", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Get max value and earn rewards simply by having crypto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Stack crypto upon crypto while you hold it for long term returns. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Instant deposits and instant withdrawals. No questions asked. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Create a wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " I already have a wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Current interest rate: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Easy in, easy out. No tie-ins. Interest rates get added to your outstanding loan on a per-second accuracy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Seriously, 0 effort ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Leave your crypto to earn interest upon interest, while you go out there and do whatever it is you want. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "No minimum balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Be it 10 or 1,000,000 coins, you\u2019re welcome to grow your money with PAR. We\u2019re all in it together. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Deposit and withdraw anytime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " None of that \u201C1-year tie-in or lose all your interest\u201D bullshit (excuse the language) that traditional banks try to pull on you. This is your money, and we treat it that way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vhcm5wYWdlL2Vhcm5wYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EarnpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-earnpage',
                templateUrl: './earnpage.component.html',
                styleUrls: ['./earnpage.component.sass']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ "E21e");





const uri = 'https://api.thegraph.com/subgraphs/name/m19/titan'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"](),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); }, providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
        },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                        useFactory: createApollo,
                        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                    },
                ],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");





class FaqpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-faqpage').classList.add('off');
        setTimeout(() => {
            document.querySelector('app-faqpage').classList.remove('off');
        }, 1);
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
            const m_top = main_bg.getBoundingClientRect().top;
            const r_top = resume_bg.getBoundingClientRect().top;
            if (m_top > -500) {
                gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(main_bg_img, 0.1, {
                    scaleX: 1 + (m_top * -0.1) / 250,
                    scaleY: 1 + (m_top * -0.1) / 250
                });
            }
            gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(resume_bg_img, .1, {
                y: 1 + (r_top * -0.1) * 2
            });
        });
    }
}
FaqpageComponent.ɵfac = function FaqpageComponent_Factory(t) { return new (t || FaqpageComponent)(); };
FaqpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqpageComponent, selectors: [["app-faqpage"]], decls: 113, vars: 0, consts: [["id", "intro", 1, "intro", "plain"], [1, "main_bg"], ["srcset", "/assets/img/faq_bg.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/faq_bg.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/faq_bg-min.jpg", "alt", "Mimo cover image"], [1, "container"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], ["onclick", "event.preventDefault(); location.hash='section-2';", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-text"], [1, "intro-footer"], [1, "left", "wrapper"], [1, "middle", "wrapper"], [1, "right", "wrapper"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], ["id", "section-2", 1, "section-2"], [1, "section-header"], [1, "column", "col-10"], [1, "column", "col-7"], [1, "faqpanel"], [1, "icon"]], template: function FaqpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "line", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FAQs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-accordion", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "How is the value of PAR guaranteed?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "The value of PAR is primarily guaranteed due to over-collateralization during its creation. There is always more than 100% collateral backing the stable token. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Borrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-accordion", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "What happens if the value of collateral dips to under 100% of the loan?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Based on the vault\u2019s collateral balance, a borrower can borrow up to a certain amount of PAR. The vault must have collateralized more than a Minimum Collateralization Ratio (MCR)% of 150%. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "If the value of collateral dips to under 100% of the loan due to market changes, borrowers need to retain enough collateral in their vaults to avoid being liquidated. Otherwise, profit-seeking liquidators can liquidate the undercollateralized Vault to receive its collateral at a discount.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "How do interest rates for borrowing get decided and how stable are the rates?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Interest rate adjustments will be used to counter short term fluctuations of the price. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "What is the insurance fund?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "The insurance fund grows based on protocol fees and comes into play in liquidations during flash crashes when the collateral becomes worth less than than the issued tokens. Most of the time, the insurance fund does not need to act, as liquidations get triggered long before this point.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "How do Automated Market Maker (AMM) pools work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "The PAR protocol incentivizes its users to act in the best interest of the network as it grows. The protocol distributes a percentage of all fees collected from borrowers to the liquidity providers of Mimo AMM pools. This ensures that there\u2019s always sufficient liquidity for PAR tokens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-accordion", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Where does the interest come from?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Earns optimized yield based on both swap fees and the vault fees collected from borrowers of the PAR stable token.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "How are interest rates determined and how stable are they? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Stable rates are defined at the protocol level. We do intend to bring the light on our governance model in the coming weeks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "How is my money secured?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "The earnings happen in a pool, which is at its core a collection of audited smart contracts. Your money there is safe, and you can take it out at any time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "app-footer");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".section-2[_ngcontent-%COMP%] {\n  background: white;\n  height: auto !important;\n  padding-bottom: 15vh;\n  min-height: 100vh;\n}\n.section-2[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n@media screen and (max-width: 640px) {\n  .section-2[_ngcontent-%COMP%]   .column.col-10[_ngcontent-%COMP%]:not(:first-child) {\n    margin-top: 100px;\n  }\n}\n.section-2[_ngcontent-%COMP%]   .column.col-7[_ngcontent-%COMP%] {\n  margin-left: 30%;\n}\n@media screen and (max-width: 640px) {\n  .section-2[_ngcontent-%COMP%]   .column.col-7[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.section-2[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: black;\n}\n.section-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 6vw;\n  color: black;\n  padding-bottom: 10px;\n  border-bottom: solid 1px black;\n}\n@media screen and (max-width: 640px) {\n  .section-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 10vw;\n  }\n}\n.section-2[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 75%;\n  padding-top: 30px;\n  margin-bottom: 0;\n  margin-top: 30px;\n  margin-left: 25%;\n}\nmat-accordion.faqpanel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px !important;\n  width: 90% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxcGFnZS9mYXFwYWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFZO0VBREo7SUFFUSxpQkFBQTtFQUdkO0FBQ0Y7QUFIUTtFQUNJLGdCQUFBO0FBS1o7QUFKWTtFQUZKO0lBR1EsY0FBQTtFQU9kO0FBQ0Y7QUFQSTtFQUNJLFlBQUE7QUFTUjtBQVBRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBU1o7QUFSWTtFQUxKO0lBTVEsZUFBQTtFQVdkO0FBQ0Y7QUFYUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFaO0FBVFE7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0FBWVoiLCJmaWxlIjoic3JjL2FwcC9mYXFwYWdlL2ZhcXBhZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi0yXG4gICAgYmFja2dyb3VuZDogd2hpdGVcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXZoXG4gICAgbWluLWhlaWdodDogMTAwdmhcbiAgICAuY29sdW1uXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweFxuICAgICAgICAmLmNvbC0xMDpub3QoOmZpcnN0LWNoaWxkKVxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6ICA2NDBweClcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweFxuICAgICAgICAmLmNvbC03XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzAlXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwXG4gICAgKlxuICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAuc2VjdGlvbi1oZWFkZXJcbiAgICAgICAgaDIgXG4gICAgICAgICAgICBmb250LXNpemU6IDZ2d1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogIDY0MHB4KVxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTB2d1xuICAgICAgICBwIFxuICAgICAgICAgICAgd2lkdGg6IDc1JVxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHhcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHhcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSVcbiAgICAgICAgXG5tYXQtYWNjb3JkaW9uLmZhcXBhbmVsIFxuICAgIG1hdC1leHBhbnNpb24tcGFuZWxcbiAgICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSBwIFxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCFpbXBvcnRhbnRcbiAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faqpage',
                templateUrl: './faqpage.component.html',
                styleUrls: ['./faqpage.component.sass']
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
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: false })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> EarnPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: false })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> BorrowPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: false })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FaqPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: false })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%) scale(1)'
            })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%) scale(1)' })
        ], { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms cubic-bezier(0.91, 0, 0, 0.97)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(0.7)' }))
            ], { optional: false }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1200ms cubic-bezier(0.07, 0.68, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%) scale(1)' }))
            ], { optional: false })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: false })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorpageComponent {
    constructor() { }
    ngOnInit() {
        document.querySelector('header').classList.remove('hidden');
        const ww = window.innerWidth;
        document.querySelector('app-errorpage').classList.add('off');
        setTimeout(() => {
            document.querySelector('app-errorpage').classList.remove('off');
        }, 1);
    }
}
ErrorpageComponent.ɵfac = function ErrorpageComponent_Factory(t) { return new (t || ErrorpageComponent)(); };
ErrorpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorpageComponent, selectors: [["app-errorpage"]], decls: 96, vars: 0, consts: [["id", "intro", 1, "intro", "plain", "error"], [1, "main_bg"], ["srcset", "/assets/img/resume.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/resume.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/resume-min.jpg", "alt", "Mimo cover image"], [1, "container"], [1, "intro-text"], [1, "wrapper"], [1, "button-container"], [1, "column", "col-2"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "button", "button--blue"], ["width", "12", "height", "19", "viewBox", "0 0 12 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.21091 2.37955L9.73156 9.89965", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2.21121 17.4203L9.73132 9.89966", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "button", "button--black"], [1, "intro-footer"], [1, "left", "wrapper"], [1, "right", "wrapper"], ["href", "https://app.mimo.capital/"], ["data-scroll", "", "data-scroll-speed", "3"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], [1, "link-container"], ["routerLink", "/home", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/earn", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/borrow", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/faq", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/about", "routerLinkActive", "activebutton", 1, "nav-item"], ["href", "https://t.me/mimodefi"], ["href", "https://www.reddit.com/r/mimodefi/"], ["href", "https://twitter.com/mimodefi"], ["href", "https://www.instagram.com/mimo_defi/"], ["href", "https://fb.me/mimodefi"], ["href", ""], ["href", "", 1, "location"], ["onclick", "event.preventDefault(); location.hash='intro';", 1, "up_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "left"], [1, "middle"], [1, "right"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"]], template: function ErrorpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sorry, there\u2019s ,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "nothing here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Create a wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " I already have a wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Borrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "White Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " MIMO CAPITAL LIMITED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " International house ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " 24 Holborn Viaduct ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " London EC1A 2BN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "line", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "line", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "line", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycGFnZS9lcnJvcnBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-errorpage',
                templateUrl: './errorpage.component.html',
                styleUrls: ['./errorpage.component.sass']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "z/o8");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");





class HomepageComponent {
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
        setTimeout(() => {
            document.querySelector('app-homepage').classList.remove('off');
        }, 1);
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
            if (m_top > -500) {
                gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(main_bg_img, 0.1, {
                    scaleX: 1 + (m_top * -0.1) / 250,
                    scaleY: 1 + (m_top * -0.1) / 250
                });
            }
            gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(download_bg_img, 0.1, {
                y: 1 + (d_top * -0.1) * 2
            });
            gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(resume_bg_img, 0.1, {
                y: 1 + (r_top * -0.1) * 2
            });
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 117, vars: 2, consts: [["data-scroll-container", "", 1, "scroll-container"], ["id", "intro", 1, "intro"], [1, "main_bg"], ["srcset", "/assets/img/ipad.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/ipad.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/ipad-min.jpg", "alt", "Mimo cover image"], [1, "container"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], [1, "intro-text"], [1, "subheading"], [1, "subheading-text"], [3, "innerHTML"], ["onclick", "event.preventDefault(); location.hash='section-1';", 1, "down_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-footer"], [1, "left", "wrapper"], [1, "middle", "wrapper"], [1, "right", "wrapper"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], ["id", "section-1", 1, "section-1"], [1, "section-header"], [1, "column", "col-3", "sticky_parent", "tofade"], [1, "number", "sticky"], [1, "column", "col-7"], [1, "column", "col-10"], [1, "tofade"], [1, "column", "col-5"], [1, "m_left", "tofade"], [1, "section-carousel", "tofade"], [1, "phone"], ["srcset", "./assets/img/ipad-iso.webp", "type", "image/webp"], ["srcset", "./assets/img/ipad-iso-2.png", "type", "image/png"], ["src", "./assets/img/ipad-iso-2.png", "alt", "ipad iso image"], [1, "download"], [1, "bg"], ["srcset", "./assets/img/dl_bg.webp", "type", "image/webp"], ["srcset", "./assets/img/dl_bg.png", "type", "image/png"], ["src", "./assets/img/dl_bg.png", "alt", "dl cover image"], [1, "download-content"], [1, "vault"], ["srcset", "/assets/img/vault.webp", "type", "image/webp"], ["srcset", "/assets/img/vault.png", "type", "image/png"], ["src", "/assets/img/vault.png", "alt", "vault image"], ["href", "https://app.mimo.capital/"], [1, "section-2"], [1, "column", "col-3", "sticky_parent"], [1, "icon"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "picture", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "line", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mimo Token: PAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " PAR tokens are decentralized, collateral-backed synthetic assets parallel to fiat currencies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " The Mimo protocol currently offers the PAR stable token, which is pegged to the euro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "picture", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "source", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "source", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "picture", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "source", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "source", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "High-Yield Rates At Zero Effort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "picture", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "source", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "source", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "World first decentralized EUR stable token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "An alternative in today\u2019s stablecoin market, which is dominated exclusively by USD denominated stablecoins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "High-yield rates in safe vaults / Decentralized safety reserve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "World\u2019s first decentralized stable token with a decentralized safety reserve. On top of that, PAR is backed by a regulated company. Read more about our safety reserve in our white paper. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Borrow at competitive rates for max exposure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Borrow a stable currency against your ETH or ERC-20 tokens to realize future appreciation. Like you, we are long on crypto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "High-yield earning for Automated Market Maker (AMM) pools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mimo ensures PAR is usable: 90% of fees collected from borrowers are used to incentivize liquidity, facilitating low-slippage trades between PAR and other crypto assets. This comes in addition to the more traditional pool trading fees. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Multiple yield-earning opportunities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "In addition to receiving the pool\u2019s trading fees, liquidity providers will also receive additional income collected from Mimo protocol fees such as loan origination and borrowing fees. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.page.pageTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.page.pageSubheading, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zYXNzIn0= */"] });
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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "J1Ni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "j8Bj");







// import 'web-animations-js';
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'mimo';
        this.router.events.subscribe((ev) => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // console.log('route changed')
            }
        });
    }
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "page-container"], ["outlet", "outlet"], [1, "app-mobile-menu"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-mobile-menu", 2);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_4__["MobileMenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"], data: { animation: [
            _animations__WEBPACK_IMPORTED_MODULE_1__["pageAnimation"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass'],
                animations: [
                    _animations__WEBPACK_IMPORTED_MODULE_1__["pageAnimation"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "j8Bj");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "0VLA");
/* harmony import */ var _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faqpage/faqpage.component */ "6+QU");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./borrowpage/borrowpage.component */ "/NSc");
/* harmony import */ var _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./earnpage/earnpage.component */ "3MTK");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "Kb0R");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// routing


//common



// pages











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"], data: { animation: 'HomePage' } },
                { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_10__["AboutpageComponent"], data: { animation: 'AboutPage' } },
                { path: 'faq', component: _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_11__["FaqpageComponent"], data: { animation: 'FaqPage' } },
                { path: 'earn', component: _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_14__["EarnpageComponent"], data: { animation: 'EarnPage' } },
                { path: 'borrow', component: _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_13__["BorrowpageComponent"], data: { animation: 'BorrowPage' } },
                { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"], redirectTo: '', pathMatch: 'full' },
                { path: '**', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__["ErrorpageComponent"] }
            ]),
            _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_10__["AboutpageComponent"],
        _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_11__["FaqpageComponent"],
        _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__["MobileMenuComponent"],
        _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_13__["BorrowpageComponent"],
        _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_14__["EarnpageComponent"],
        _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__["ErrorpageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_10__["AboutpageComponent"],
                    _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_11__["FaqpageComponent"],
                    _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_8__["MobileMenuComponent"],
                    _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_13__["BorrowpageComponent"],
                    _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_14__["EarnpageComponent"],
                    _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__["ErrorpageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                        { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"], data: { animation: 'HomePage' } },
                        { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_10__["AboutpageComponent"], data: { animation: 'AboutPage' } },
                        { path: 'faq', component: _faqpage_faqpage_component__WEBPACK_IMPORTED_MODULE_11__["FaqpageComponent"], data: { animation: 'FaqPage' } },
                        { path: 'earn', component: _earnpage_earnpage_component__WEBPACK_IMPORTED_MODULE_14__["EarnpageComponent"], data: { animation: 'EarnPage' } },
                        { path: 'borrow', component: _borrowpage_borrowpage_component__WEBPACK_IMPORTED_MODULE_13__["BorrowpageComponent"], data: { animation: 'BorrowPage' } },
                        { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"], redirectTo: '', pathMatch: 'full' },
                        { path: '**', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__["ErrorpageComponent"] }
                    ]),
                    _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-page */ "ePW6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", page_r1.pageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.pageTitle);
} }
class HeaderComponent {
    constructor() {
        this.pages = _mock_page__WEBPACK_IMPORTED_MODULE_1__["PAGES"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 1, consts: [[1, "container"], ["routerLink", "/home", 1, "logo"], ["src", "./assets/img/logo_default.svg", "alt", "", 1, "_default"], ["src", "./assets/img/logo.svg", "alt", "", 1, "_white"], [4, "ngFor", "ngForOf"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "cta-item"], ["routerLinkActive", "activebutton", 1, "nav-item", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });
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
/* harmony import */ var _mock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-page */ "ePW6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function FooterComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", page_r1.pageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.pageTitle);
} }
class FooterComponent {
    constructor() {
        this.pages = _mock_page__WEBPACK_IMPORTED_MODULE_1__["PAGES"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 57, vars: 1, consts: [[1, "resume"], [1, "download-content"], ["href", "https://t.me/mimodefi", "target", "_blank"], [1, "bg"], ["srcset", "/assets/img/resume.webp", "media", "(min-width: 768px)", "type", "image/webp"], ["srcset", "/assets/img/resume.jpg", "media", "(min-width: 768px)", "type", "image/jpeg"], ["src", "/assets/img/resume-min.jpg", "alt", "Mimo cover image"], ["width", "618", "height", "588", "viewBox", "0 0 618 588", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mimo_bg"], ["opacity", "0.4"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M466.808 20.7617L598.003 0.211117C607.452 -1.26896 616.311 5.19097 617.791 14.6398C617.93 15.5263 618 16.4223 618 17.3197V492.843C618 501.372 611.789 508.631 603.363 509.951L472.168 530.502C462.719 531.982 453.859 525.522 452.379 516.073C452.24 515.186 452.171 514.291 452.171 513.393V37.8703C452.171 29.3409 458.381 22.0817 466.808 20.7617ZM390.744 158.95C390.883 159.836 390.953 160.732 390.953 161.629V545.267C390.953 552.311 390.319 554.871 389.081 557.517C387.842 560.162 385.998 562.318 383.576 563.951C381.155 565.584 378.723 566.605 371.764 567.695L245.12 587.533C235.672 589.013 226.812 582.553 225.332 573.104C225.193 572.218 225.123 571.322 225.123 570.424V186.787C225.123 179.743 225.756 177.183 226.995 174.537C228.233 171.892 230.077 169.736 232.499 168.103C234.921 166.47 237.353 165.449 244.312 164.359L370.955 144.521C380.404 143.041 389.264 149.501 390.744 158.95ZM165.621 79.0631C165.76 79.9496 165.829 80.8456 165.829 81.743V486.265C165.829 493.309 165.196 495.869 163.958 498.515C162.719 501.16 160.875 503.316 158.453 504.949C156.031 506.582 153.599 507.603 146.641 508.693L19.9971 528.531C10.5483 530.011 1.6887 523.551 0.208621 514.102C0.0697504 513.216 0 512.32 0 511.422L0 106.9C0 99.8568 0.633046 97.2962 1.87158 94.6507C3.11011 92.0052 4.95413 89.8498 7.37607 88.2168C9.79801 86.5838 12.2298 85.5621 19.1883 84.4721L145.832 64.6344C155.281 63.1544 164.141 69.6143 165.621 79.0631Z", "fill", "#A668E6"], [1, "container"], [1, "top-bar"], ["href", "", 1, "logo"], ["src", "./assets/img/logo_default.svg", "alt", ""], ["href", "https://app.mimo.capital/", 1, "cta-item"], [1, "link-container"], [1, "column", "col-2"], [4, "ngFor", "ngForOf"], ["href", "https://t.me/mimodefi"], ["href", "https://www.reddit.com/r/mimodefi/"], ["href", "https://twitter.com/mimodefi"], ["href", "https://www.instagram.com/mimo_defi/"], ["href", "https://fb.me/mimodefi"], ["href", ""], ["href", "", 1, "location"], ["onclick", "event.preventDefault(); location.hash='intro';", 1, "up_arrow"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"], [1, "intro-footer"], [1, "left"], [1, "middle"], [1, "right"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], ["routerLinkActive", "activebutton", 1, "nav-item", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join the telegram community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "picture", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FooterComponent_span_21_Template, 3, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Telegram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Reddit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "White Paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nav", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " MIMO CAPITAL LIMITED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " International house ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 24 Holborn Viaduct ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " London EC1A 2BN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"] });
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
/* harmony import */ var _mock_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-page */ "ePW6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MobileMenuComponent {
    constructor() {
        this.pages = _mock_page__WEBPACK_IMPORTED_MODULE_1__["PAGES"];
    }
    ngOnInit() {
    }
}
MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(); };
MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["app-mobile-menu"]], decls: 37, vars: 0, consts: [[1, "container", "mobile-menu-container"], ["href", "", 1, "logo"], ["src", "./assets/img/logo.svg", "alt", ""], [1, "menu-trigger"], ["routerLink", "/home", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/earn", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/borrow", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/faq", "routerLinkActive", "activebutton", 1, "nav-item"], ["routerLink", "/about", "routerLinkActive", "activebutton", 1, "nav-item"], ["href", "https://app.mimo.capital/", "target", "_blank", 1, "cta-item"], [1, "intro-footer"], [1, "left"], [1, "middle"], [1, "right"], ["href", "./assets/pdf/DISCLAIMER FOR THE USE OF MIMO DEFI - WEBAPP AND PROTOCOL.pdf", "target", "_blank"], ["width", "57", "height", "57", "viewBox", "0 0 57 57", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "skew_arrow"], ["x1", "3.67769", "y1", "24.6066", "x2", "31.962", "y2", "52.8909", "stroke", "white", "stroke-width", "10"], ["x1", "52.9619", "y1", "24.6777", "x2", "24.6777", "y2", "52.962", "stroke", "white", "stroke-width", "10"], ["x1", "29.1422", "y1", "6.14218", "x2", "29.1422", "y2", "46.1422", "stroke", "white", "stroke-width", "10"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Parallel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Borrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MIMO CAPITAL LIMITED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ALPHA, USE AT YOUR OWN RISK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zYXNzIn0= */"] });
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