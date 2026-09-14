"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[1168],{

/***/ 41168
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWeb: () => (/* binding */ AppWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);

class AppWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    constructor() {
        super();
        this.handleVisibilityChange = () => {
            const data = {
                isActive: document.hidden !== true,
            };
            this.notifyListeners('appStateChange', data);
            if (document.hidden) {
                this.notifyListeners('pause', null);
            }
            else {
                this.notifyListeners('resume', null);
            }
        };
        document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
    }
    exitApp() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getInfo() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getLaunchUrl() {
        return { url: '' };
    }
    async getState() {
        return { isActive: document.hidden !== true };
    }
    async minimizeApp() {
        throw this.unimplemented('Not implemented on web.');
    }
    async toggleBackButtonHandler() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getAppLanguage() {
        return {
            value: navigator.language.split('-')[0].toLowerCase(),
        };
    }
}
//# sourceMappingURL=web.js.map

/***/ }

}]);