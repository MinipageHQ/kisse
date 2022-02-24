"use strict";
exports.id = 5027;
exports.ids = [5027];
exports.modules = {

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_auth_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6602);
/* harmony import */ var _clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7838);
/* harmony import */ var _clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _syncWithClerk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4276);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(app_auth_validations__WEBPACK_IMPORTED_MODULE_2__/* .SsoWithClerkInput */ .Pf), async ({
  sessionId
}, ctx) => {
  var _user$memberships$, _user$memberships$2;

  if (!ctx.clerkSessionToken) {
    throw new Error("You need a Clerk session token for this action.");
  }

  const session = await _clerk_nextjs_api__WEBPACK_IMPORTED_MODULE_3__.sessions.verifySession(sessionId, ctx.clerkSessionToken);
  const user = await (0,_syncWithClerk__WEBPACK_IMPORTED_MODULE_4__.default)({
    clerkUserId: session.userId
  }, ctx);
  const roles = [...user.roles];
  const defaultOrganization = user.memberships.length > 0 ? _objectSpread(_objectSpread({}, (_user$memberships$ = user.memberships[0]) === null || _user$memberships$ === void 0 ? void 0 : _user$memberships$.organization), {}, {
    role: (_user$memberships$2 = user.memberships[0]) === null || _user$memberships$2 === void 0 ? void 0 : _user$memberships$2.role
  }) : null;

  if (defaultOrganization && defaultOrganization.role) {
    roles.push(defaultOrganization.role);
  }

  await ctx.session.$create({
    userId: user.id,
    roles,
    platformFeatures: defaultOrganization === null || defaultOrganization === void 0 ? void 0 : defaultOrganization.platformFeatures,
    defaultOrgId: defaultOrganization ? defaultOrganization.id : undefined
  });
}), {
  "resolverName": "ssoWithClerk",
  "resolverType": "mutation",
  "routePath": "/api/rpc/ssoWithClerk"
}));

/***/ })

};
;