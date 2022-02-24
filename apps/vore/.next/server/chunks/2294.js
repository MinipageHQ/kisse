"use strict";
exports.id = 2294;
exports.ids = [2294];
exports.modules = {

/***/ 2294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5198);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const AppLayout = ({
  title,
  showUserBox = true,
  children
}) => {
  const {
    0: opened,
    1: setOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.AppShell // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
  , {
    navbarOffsetBreakpoint: "sm" // fixed prop on AppShell will be automatically added to Header and Navbar
    ,
    fixed: true,
    header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Header, {
      height: 70,
      padding: "md",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
          children: "Saltana"
        })
      })
    }),
    children: children
  });
};

AppLayout.authenticate = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);

/***/ })

};
;