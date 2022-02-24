"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,4331,5359,5682,2840,2090,9710,3632,2813,1716,4923,5026,6950];
exports.modules = {

/***/ 7339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "next/stdlib"
var stdlib_ = __webpack_require__(1210);
// EXTERNAL MODULE: external "next/data-client"
var data_client_ = __webpack_require__(3136);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
// EXTERNAL MODULE: ./app/core/components/LabeledTextField.tsx
var LabeledTextField = __webpack_require__(2041);
// EXTERNAL MODULE: ./app/core/components/Form.tsx
var Form = __webpack_require__(876);
// EXTERNAL MODULE: ./app/auth/mutations/login.ts + 1 modules
var login = __webpack_require__(6398);
// EXTERNAL MODULE: ./app/auth/validations.ts
var validations = __webpack_require__(6602);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./app/auth/components/LoginForm.tsx








const LoginForm = props => {
  const [loginMutation] = (0,data_client_.useMutation)(login.default);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Login"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* Form */.l0, {
      submitText: "Login",
      submitTextWhenLoading: "Logging in...",
      schema: validations/* Login */.m3,
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: async values => {
        try {
          var _props$onSuccess;

          const user = await loginMutation(values);
          (_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 ? void 0 : _props$onSuccess.call(props, user);
        } catch (error) {
          if (error instanceof stdlib_.AuthenticationError) {
            return {
              [Form/* FORM_ERROR */.Ck]: "Sorry, those credentials are invalid"
            };
          } else {
            return {
              [Form/* FORM_ERROR */.Ck]: "Sorry, we had an unexpected error. Please try again. - " + error.toString()
            };
          }
        }
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(LabeledTextField/* LabeledTextField */.I, {
        name: "email",
        label: "Email",
        placeholder: "Email"
      }), /*#__PURE__*/jsx_runtime_.jsx(LabeledTextField/* LabeledTextField */.I, {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        marginTop: "1rem"
      }
    })]
  });
};
/* harmony default export */ const components_LoginForm = (LoginForm);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(5198);
;// CONCATENATED MODULE: external "@mantine/notifications"
const notifications_namespaceObject = require("@mantine/notifications");
;// CONCATENATED MODULE: ./app/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function App({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => page);

  return /*#__PURE__*/jsx_runtime_.jsx(stdlib_.ErrorBoundary, {
    FallbackComponent: RootErrorFallback,
    onReset: (0,data_client_.useQueryErrorResetBoundary)().reset,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.MantineProvider, {
      theme: {// colorScheme: 'dark',
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.NormalizeCSS, {}), /*#__PURE__*/jsx_runtime_.jsx(core_.GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(notifications_namespaceObject.NotificationsProvider, {
        children: getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)))
      })]
    })
  });
}

function RootErrorFallback({
  error,
  resetErrorBoundary
}) {
  if (error instanceof stdlib_.AuthenticationError) {
    return /*#__PURE__*/jsx_runtime_.jsx(components_LoginForm, {
      onSuccess: resetErrorBoundary
    });
  } else if (error instanceof stdlib_.AuthorizationError) {
    return /*#__PURE__*/jsx_runtime_.jsx(error_.ErrorComponent, {
      statusCode: error.statusCode,
      title: "Sorry, you are not authorized to access this"
    });
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(error_.ErrorComponent, {
      statusCode: error.statusCode || 400,
      title: error.message || error.name
    });
  }
}

/***/ }),

/***/ 5198:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6316:
/***/ ((module) => {

module.exports = require("final-form");

/***/ }),

/***/ 2710:
/***/ ((module) => {

module.exports = require("hibp");

/***/ }),

/***/ 3136:
/***/ ((module) => {

module.exports = require("next/data-client");

/***/ }),

/***/ 8354:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 1210:
/***/ ((module) => {

module.exports = require("next/stdlib");

/***/ }),

/***/ 9986:
/***/ ((module) => {

module.exports = require("next/stdlib-server");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4564:
/***/ ((module) => {

module.exports = require("react-final-form");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7242:
/***/ ((module) => {

module.exports = require("zod");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6762,876,2041,1703,3845], () => (__webpack_exec__(7339)));
module.exports = __webpack_exports__;

})();