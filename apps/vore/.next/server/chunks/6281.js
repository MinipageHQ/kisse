"use strict";
exports.id = 6281;
exports.ids = [6281];
exports.modules = {

/***/ 6281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5198);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DashboardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




const tabs = [{
  name: "Profile",
  href: "/dashboard/customize",
  current: true
}, {
  name: "Notifications",
  href: "/dashboard/notifications",
  current: false
}, {
  name: "Custom Domains",
  href: "/dashboard/domains",
  current: false
}, {
  name: "Plans & Billing",
  href: "/dashboard/billing",
  current: false
}];



function CustomizeTabs() {
  const router = useRouter();
  const tabIndex = tabs.findIndex(({
    href
  }) => href === router.asPath);

  const onChange = (active, tabKey) => {
    router.push(tabKey);
  };

  return /*#__PURE__*/_jsx(Tabs, {
    active: tabIndex,
    onTabChange: onChange,
    children: tabs.map(({
      name,
      href,
      current
    }) => /*#__PURE__*/_jsx(Tabs.Tab, {
      label: name,
      tabKey: href,
      children: name
    }, href))
  });
}

const DashboardCustomizeLayout = ({
  title,
  children
}) => {
  const router = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const tabIndex = tabs.findIndex(({
    href
  }) => href === router.asPath);

  const onChange = (active, tabKey) => {
    router.push(tabKey);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.Tabs, {
      active: tabIndex,
      onTabChange: onChange,
      children: tabs.map(({
        name,
        href,
        current
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.Tabs.Tab, {
        label: name,
        tabKey: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
          fallback: "Loading Settings LAyout",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_0__.Container, {
            padding: 10,
            children: children
          })
        })
      }, href))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardCustomizeLayout);

/***/ })

};
;