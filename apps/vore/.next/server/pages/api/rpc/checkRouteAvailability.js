"use strict";
(() => {
var exports = {};
exports.id = 3761;
exports.ids = [3761,9710,1716];
exports.modules = {

/***/ 6679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRouteAvailability": () => (/* binding */ CheckRouteAvailability),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_2__);



const CheckRouteAvailability = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
  domain: zod__WEBPACK_IMPORTED_MODULE_2__.z.string(),
  slug: zod__WEBPACK_IMPORTED_MODULE_2__.z.string()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(CheckRouteAvailability), next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async input => {// TODO: in multi-tenant app, you must add validation to ensure correct tenant
  // const link = await db.link.findFirst({ data: input })
  // return link
}), {
  "resolverName": "checkRouteAvailability",
  "resolverType": "mutation",
  "routePath": "/api/rpc/checkRouteAvailability"
}));

/***/ }),

/***/ 3136:
/***/ ((module) => {

module.exports = require("next/data-client");

/***/ }),

/***/ 9986:
/***/ ((module) => {

module.exports = require("next/stdlib-server");

/***/ }),

/***/ 7242:
/***/ ((module) => {

module.exports = require("zod");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6679));
module.exports = __webpack_exports__;

})();