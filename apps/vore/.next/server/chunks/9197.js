"use strict";
exports.id = 9197;
exports.ids = [9197];
exports.modules = {

/***/ 9197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(603);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3659);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9832);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.zod(_validations__WEBPACK_IMPORTED_MODULE_4__/* .CreateDomain */ .W), next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.authorize(), app_core_utils__WEBPACK_IMPORTED_MODULE_1__/* .setDefaultOrganizationId */ .Xg, app_core_utils__WEBPACK_IMPORTED_MODULE_1__/* .enforceSuperAdminIfNotCurrentOrganization */ .tc, async (input, {
  session: {
    defaultOrgId
  }
}) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const domain = await db__WEBPACK_IMPORTED_MODULE_3__.default.domain.create({
    data: _objectSpread(_objectSpread({}, input), {}, {
      vercelId: "000",
      organizationId: defaultOrgId
    })
  });
  console.log(domain);
  return domain;
}), {
  "resolverName": "createDomain",
  "resolverType": "mutation",
  "routePath": "/api/rpc/createDomain"
}));

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CreateDomain)
/* harmony export */ });
/* unused harmony export domain */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);

const domain = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().regex(/^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}/).transform(str => str.toLowerCase().trim());
const CreateDomain = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  domain
});

/***/ })

};
;