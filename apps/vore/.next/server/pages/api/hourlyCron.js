"use strict";
(() => {
var exports = {};
exports.id = 2621;
exports.ids = [2621];
exports.modules = {

/***/ 2737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(963);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quirrel_blitz__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)((0,quirrel_blitz__WEBPACK_IMPORTED_MODULE_1__.CronJob)("api/hourlyCron", // the path of this API route
"@hourly", // cron schedule (see https://crontab.guru)
async () => {
  console.log("A new hour has begun!");
})));

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 963:
/***/ ((module) => {

module.exports = require("quirrel/blitz");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [733], () => (__webpack_exec__(2737)));
module.exports = __webpack_exports__;

})();