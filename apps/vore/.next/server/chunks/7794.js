"use strict";
exports.id = 7794;
exports.ids = [7794];
exports.modules = {

/***/ 5300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ck": () => (/* reexport safe */ app_core_components_Form__WEBPACK_IMPORTED_MODULE_0__.Ck),
/* harmony export */   "Yl": () => (/* binding */ DomainForm)
/* harmony export */ });
/* unused harmony export LabeledDomainField */
/* harmony import */ var app_core_components_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4564);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const LabeledDomainField = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    name,
    label,
    outerProps,
    fieldProps,
    labelProps,
    type = "text",
    helpText
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "label", "outerProps", "fieldProps", "labelProps", "type", "helpText"]);

  const {
    input,
    meta: {
      touched,
      error,
      submitError,
      submitting
    }
  } = (0,react_final_form__WEBPACK_IMPORTED_MODULE_2__.useField)(name, _objectSpread({}, fieldProps));
  const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError;
  const showError = touched && normalizedError;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", _objectSpread(_objectSpread(_objectSpread({
      title: label,
      type: type
    }, input), {}, {
      disabled: submitting
    }, props), {}, {
      className: "rounded-md border border-gray-300 focus:ring-0 focus:border-black px-4 flex-auto min-w-0 sm:text-sm",
      placeholder: "mydomain.com",
      pattern: "^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\\.[a-zA-Z]{2,}$",
      autoComplete: "off",
      ref: ref
    })), showError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "text-red-500 text-left w-full max-w-2xl mt-5 text-sm flex items-center space-x-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        style: {
          color: "#f44336"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "10",
          fill: "white"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          d: "M12 8v4",
          stroke: "#f44336"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          d: "M12 16h.01",
          stroke: "#f44336"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        children: normalizedError
      })]
    }), helpText && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
      className: "mt-2 text-sm text-gray-500",
      children: helpText
    })]
  });
});
function DomainForm(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(app_core_components_Form__WEBPACK_IMPORTED_MODULE_0__/* .Form */ .l0, _objectSpread(_objectSpread({}, props), {}, {
    className: "flex justify-between space-x-4 w-full max-w-2xl h-10 mt-10 mb-10",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(LabeledDomainField, {
      name: "domain",
      label: "Domain",
      placeholder: "Domain"
    })
  }));
}

/***/ }),

/***/ 8784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3659);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_4__);





const GetDomain = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({
  // This accepts type of undefined, but is required at runtime
  id: zod__WEBPACK_IMPORTED_MODULE_4__.z.string()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.zod(GetDomain), next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.resolver.authorize(), async ({
  id
}) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const domainInDb = await db__WEBPACK_IMPORTED_MODULE_3__.default.domain.findFirst({
    where: {
      id
    }
  });
  if (!domainInDb) throw new next_stdlib__WEBPACK_IMPORTED_MODULE_1__.NotFoundError();
  return domainInDb;
}), {
  "resolverName": "getDomain",
  "resolverType": "query",
  "routePath": "/api/rpc/getDomain"
}));

/***/ })

};
;