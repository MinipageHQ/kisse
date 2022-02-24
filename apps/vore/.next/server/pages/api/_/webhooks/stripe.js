"use strict";
(() => {
var exports = {};
exports.id = 4008;
exports.ids = [4008,8147,4257];
exports.modules = {

/***/ 9446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var _jobs_handle_stripe_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5721);



const handler = async (req, res) => {
  const {
    id
  } = await _jobs_handle_stripe_event__WEBPACK_IMPORTED_MODULE_1__.default.enqueue(req.body);
  console.log(`Queued a Stripe event: ${JSON.stringify({
    id
  }, null, 2)}`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    status: "success"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)(handler));

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 1210:
/***/ ((module) => {

module.exports = require("next/stdlib");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [733,5721], () => (__webpack_exec__(9446)));
module.exports = __webpack_exports__;

})();