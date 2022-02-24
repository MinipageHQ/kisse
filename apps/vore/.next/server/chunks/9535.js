"use strict";
exports.id = 9535;
exports.ids = [9535];
exports.modules = {

/***/ 9535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* reexport safe */ app_core_components_Form__WEBPACK_IMPORTED_MODULE_0__.Ck),
/* harmony export */   "z": () => (/* binding */ DocumentForm)
/* harmony export */ });
/* harmony import */ var app_core_components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2041);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function DocumentForm(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(app_core_components_Form__WEBPACK_IMPORTED_MODULE_0__/* .Form */ .l0, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(app_core_components_LabeledTextField__WEBPACK_IMPORTED_MODULE_1__/* .LabeledTextField */ .I, {
      name: "name",
      label: "Name",
      placeholder: "Name"
    })
  }));
}

/***/ })

};
;