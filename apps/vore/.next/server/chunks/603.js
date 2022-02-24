"use strict";
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xg": () => (/* binding */ setDefaultOrganizationId),
/* harmony export */   "tc": () => (/* binding */ enforceSuperAdminIfNotCurrentOrganization)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3659);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// app/core/utils.ts

function assert(condition, message) {
  if (!condition) throw new Error(message);
}
const setDefaultOrganizationId = (input, {
  session
}) => {
  var _session$roles;

  assert(session.defaultOrgId, "This page requires a creator account");

  if (input.organizationId) {
    // Pass through the input
    return input;
  } else if ((_session$roles = session.roles) !== null && _session$roles !== void 0 && _session$roles.includes(db__WEBPACK_IMPORTED_MODULE_0__.GlobalRole.SUPERADMIN)) {
    // Allow viewing any organization
    return _objectSpread(_objectSpread({}, input), {}, {
      organizationId: {
        not: null
      }
    });
  } else {
    // Set organizationId to session.defaultOrgId
    return _objectSpread(_objectSpread({}, input), {}, {
      organizationId: session.defaultOrgId
    });
  }
};
const enforceSuperAdminIfNotCurrentOrganization = (input, ctx) => {
  assert(ctx.session.defaultOrgId, "missing session.defaultOrgId");
  assert(input.organizationId, "missing input.organizationId");

  if (input.organizationId !== ctx.session.defaultOrgId) {
    ctx.session.$authorize(db__WEBPACK_IMPORTED_MODULE_0__.GlobalRole.SUPERADMIN);
  }

  return input;
};

/***/ })

};
;