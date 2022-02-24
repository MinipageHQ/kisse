"use strict";
exports.id = 1775;
exports.ids = [1775];
exports.modules = {

/***/ 1775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3659);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe( // resolver.authorize(),
async ({
  only,
  where,
  orderBy,
  skip = 0,
  take = 100
}, {
  session: {
    defaultOrgId
  }
}) => {
  console.log({
    defaultOrgId
  });
  const orQuery = [];

  if (only === undefined || only === "platform") {
    orQuery.push({
      organizationId: {
        equals: null
      }
    });
  }

  if (defaultOrgId && (only === undefined || only === "organization")) {
    orQuery.push({
      organizationId: {
        equals: defaultOrgId
      }
    });
  }

  const {
    items: domains,
    hasMore,
    nextPage,
    count
  } = await (0,next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.paginate)({
    skip,
    take,
    count: () => db__WEBPACK_IMPORTED_MODULE_2__.default.domain.count({
      where
    }),
    query: paginateArgs => db__WEBPACK_IMPORTED_MODULE_2__.default.domain.findMany(_objectSpread(_objectSpread({}, paginateArgs), {}, {
      where: _objectSpread(_objectSpread({}, where), {}, {
        OR: orQuery
      }),
      orderBy
    }))
  });
  return {
    domains,
    nextPage,
    hasMore,
    count
  };
}), {
  "resolverName": "getDomains",
  "resolverType": "query",
  "routePath": "/api/rpc/getDomains"
}));

/***/ })

};
;