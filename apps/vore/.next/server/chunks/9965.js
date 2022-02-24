"use strict";
exports.id = 9965;
exports.ids = [9965];
exports.modules = {

/***/ 9965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(603);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3659);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GetOrganization = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({
  // This accepts type of undefined, but is required at runtime
  id: zod__WEBPACK_IMPORTED_MODULE_5__.z.string().cuid().optional()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_3__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_3__.resolver.zod(GetOrganization), next_stdlib_server__WEBPACK_IMPORTED_MODULE_3__.resolver.authorize(), app_core_utils__WEBPACK_IMPORTED_MODULE_1__/* .setDefaultOrganizationId */ .Xg, app_core_utils__WEBPACK_IMPORTED_MODULE_1__/* .enforceSuperAdminIfNotCurrentOrganization */ .tc, async ({
  id
}, {
  session: {
    defaultOrgId
  }
}) => {
  const [organization, domains] = await Promise.all([db__WEBPACK_IMPORTED_MODULE_4__.default.organization.findFirst({
    where: {
      id: id || defaultOrgId
    },
    include: {
      defaultDomain: true,
      domains: true,
      externalProfiles: true
    }
  }), db__WEBPACK_IMPORTED_MODULE_4__.default.domain.findMany({
    where: {
      organizationId: {
        equals: null
      },
      provider: {
        equals: "NATIVE"
      }
    },
    select: {
      id: true,
      domain: true,
      provider: true
    }
  })]);
  if (!organization) throw new next_stdlib__WEBPACK_IMPORTED_MODULE_2__.NotFoundError();

  const org = _objectSpread(_objectSpread({}, organization), {}, {
    domains: [...organization.domains, ...domains]
  });

  console.log(org);
  return org;
}), {
  "resolverName": "getCurrentOrganization",
  "resolverType": "query",
  "routePath": "/api/rpc/getCurrentOrganization"
}));

/***/ })

};
;