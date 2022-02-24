"use strict";
(() => {
var exports = {};
exports.id = 2292;
exports.ids = [2292,8147,4257,8934,7913,4331,8733,6183,5682,2840,2090,9710,3632,2813,9902,1716,4923,5026,6950];
exports.modules = {

/***/ 8033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WrappedAuthProvider)
/* harmony export */ });
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9304);
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WrappedAuthProvider({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__.ClerkProvider, {
    children: children
  });
}

/***/ }),

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2294);
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9304);
/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_auth_mutations_ssoWithClerk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5027);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_auth_components_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8033);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const LoginSSOClerkPage = () => {
  const clerk = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.useClerk)();
  const blitzSession = (0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.useSession)();
  const [ssoWithClerkMutation, meta] = (0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(app_auth_mutations_ssoWithClerk__WEBPACK_IMPORTED_MODULE_3__.default, {
    retry: false
  });
  const hasBlitzSession = blitzSession.isLoading === false && blitzSession.userId !== null;
  const clerkSessionId = clerk.session !== null && clerk.session !== undefined ? clerk.session.id : null;
  const isLoading = blitzSession.isLoading === true || meta.isLoading === true;
  const shouldRunMutation = isLoading === false && clerkSessionId !== null && hasBlitzSession === false && meta.isIdle === true;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log("clerk", clerk.session);
    console.log("blitzSession", blitzSession);
  }, [clerk, blitzSession]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log(shouldRunMutation);

    if (shouldRunMutation === true) {
      ssoWithClerkMutation({
        sessionId: clerkSessionId
      });
    }
  }, [shouldRunMutation, clerkSessionId, ssoWithClerkMutation]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [JSON.stringify(meta, null, 2), "Logging you in..."]
  });
};

LoginSSOClerkPage.redirectAuthenticatedTo = "/";

LoginSSOClerkPage.getLayout = page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(app_core_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
  title: "Logging you in...",
  showUserBox: false,
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(app_auth_components_AuthProvider__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.ClerkLoaded, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.SignedIn, {
        children: page
      })
    })
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginSSOClerkPage);

/***/ }),

/***/ 8670:
/***/ ((module) => {

module.exports = require("@clerk/clerk-sdk-node");

/***/ }),

/***/ 9304:
/***/ ((module) => {

module.exports = require("@clerk/nextjs");

/***/ }),

/***/ 7838:
/***/ ((module) => {

module.exports = require("@clerk/nextjs/api");

/***/ }),

/***/ 5198:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9294:
/***/ ((module) => {

module.exports = require("mjml-react");

/***/ }),

/***/ 3136:
/***/ ((module) => {

module.exports = require("next/data-client");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 1210:
/***/ ((module) => {

module.exports = require("next/stdlib");

/***/ }),

/***/ 9986:
/***/ ((module) => {

module.exports = require("next/stdlib-server");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 963:
/***/ ((module) => {

module.exports = require("quirrel/blitz");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 464:
/***/ ((module) => {

module.exports = require("stripe");

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
var __webpack_exports__ = __webpack_require__.X(0, [733,2487,1703,8575,2294,4276,5027], () => (__webpack_exec__(3465)));
module.exports = __webpack_exports__;

})();