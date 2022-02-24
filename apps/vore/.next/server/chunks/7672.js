"use strict";
exports.id = 7672;
exports.ids = [7672];
exports.modules = {

/***/ 1246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useCurrentUser)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5223);


const useCurrentUser = () => {
  const [user] = (0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(app_users_queries_getCurrentUser__WEBPACK_IMPORTED_MODULE_1__.default, null);
  return user;
};

/***/ }),

/***/ 7672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_DashboardLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(1921);
// EXTERNAL MODULE: ../../node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(7325);
// EXTERNAL MODULE: ../../node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(6762);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./app/core/components/Logo.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const DEFAULT_FILL = "#00223D"; // @TODO: add other logo types and wrap inside a div

const Logo_Logo = (_ref) => {
  let {
    fill = DEFAULT_FILL
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fill"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
    "aria-hidden": true,
    viewBox: "0 0 3850 720",
    className: "block h-5 w-auto"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M76.4948 41.5477L701.653 258.009C712.643 261.815 720 272.06 720 283.56V395.158C720 413.749 701.461 426.81 683.657 420.761L58.4994 208.361C47.4306 204.6 40 194.316 40 182.758V67.0987C40 48.4405 58.6635 35.3736 76.4948 41.5477ZM438.947 382.38C456.75 376.331 475.289 389.392 475.289 407.984V521.171C475.289 532.671 467.933 542.917 456.942 546.722L76.4947 678.452C58.6635 684.626 40 671.56 40 652.901V537.242C40 525.684 47.4307 515.4 58.4994 511.639L438.947 382.38Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M1108.35 680C1052.05 680 1003.8 666.792 963.584 640.377C923.946 613.961 896.085 577.784 880 531.844L948.935 492.221C972.488 565.15 1026.2 601.615 1110.07 601.615C1151.43 601.615 1183.03 593.288 1204.86 576.635C1226.69 559.408 1237.6 536.725 1237.6 508.587C1237.6 479.874 1226.69 458.34 1204.86 443.984C1183.03 429.628 1146.55 414.41 1095.42 398.331C1070.15 390.292 1050.9 383.975 1037.69 379.381C1024.48 374.213 1007.82 366.747 987.712 356.985C968.18 346.649 953.531 336.312 943.765 325.976C933.999 315.065 925.095 300.996 917.053 283.769C909.585 266.541 905.851 247.017 905.851 225.195C905.851 172.939 924.234 131.593 960.999 101.157C997.765 70.148 1042.57 54.6433 1095.42 54.6433C1143.1 54.6433 1184.46 66.7025 1219.51 90.821C1255.12 114.939 1281.84 146.81 1299.64 186.433L1232.43 225.195C1206.58 163.176 1160.91 132.167 1095.42 132.167C1062.68 132.167 1036.25 140.206 1016.15 156.285C996.041 172.364 985.988 194.186 985.988 221.75C985.988 248.165 995.467 268.264 1014.42 282.046C1033.38 295.828 1066.13 310.184 1112.66 325.114C1129.32 330.283 1141.09 334.015 1147.99 336.312C1154.88 338.609 1165.51 342.629 1179.87 348.371C1194.81 354.114 1205.72 358.708 1212.61 362.153C1219.51 365.599 1228.7 370.48 1240.19 376.797C1252.25 383.114 1261.16 389.143 1266.9 394.886C1272.64 400.628 1279.25 407.806 1286.72 416.42C1294.76 424.459 1300.51 432.786 1303.95 441.4C1307.4 450.013 1310.27 460.063 1312.57 471.548C1315.44 482.458 1316.88 494.231 1316.88 506.864C1316.88 559.695 1297.63 601.902 1259.15 633.486C1220.66 664.495 1170.39 680 1108.35 680Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M1753.62 238.116H1828.59V668.802H1753.62V594.724C1716.28 651.575 1662 680 1590.76 680C1530.44 680 1479.03 658.179 1436.52 614.536C1394.01 570.319 1372.75 516.626 1372.75 453.459C1372.75 390.292 1394.01 336.887 1436.52 293.244C1479.03 249.026 1530.44 226.918 1590.76 226.918C1662 226.918 1716.28 255.343 1753.62 312.194V238.116ZM1600.24 607.645C1643.9 607.645 1680.38 593.001 1709.68 563.715C1738.97 533.854 1753.62 497.102 1753.62 453.459C1753.62 409.816 1738.97 373.351 1709.68 344.065C1680.38 314.204 1643.9 299.273 1600.24 299.273C1557.16 299.273 1520.97 314.204 1491.67 344.065C1462.37 373.351 1447.72 409.816 1447.72 453.459C1447.72 497.102 1462.37 533.854 1491.67 563.715C1520.97 593.001 1557.16 607.645 1600.24 607.645Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M1924.94 668.802V40H1999.91V668.802H1924.94Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M2331.42 310.471H2216.82V543.903C2216.82 565.15 2220.84 580.368 2228.88 589.556C2237.5 598.17 2250.42 602.764 2267.66 603.338C2284.89 603.338 2306.14 602.764 2331.42 601.615V668.802C2265.93 677.416 2217.97 672.248 2187.52 653.297C2157.07 633.773 2141.85 597.308 2141.85 543.903V310.471H2056.54V238.116H2141.85V139.919L2216.82 117.524V238.116H2331.42V310.471Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M2737.8 238.116H2812.77V668.802H2737.8V594.724C2700.46 651.575 2646.18 680 2574.94 680C2514.63 680 2463.21 658.179 2420.7 614.536C2378.19 570.319 2356.94 516.626 2356.94 453.459C2356.94 390.292 2378.19 336.887 2420.7 293.244C2463.21 249.026 2514.63 226.918 2574.94 226.918C2646.18 226.918 2700.46 255.343 2737.8 312.194V238.116ZM2584.42 607.645C2628.08 607.645 2664.56 593.001 2693.86 563.715C2723.16 533.854 2737.8 497.102 2737.8 453.459C2737.8 409.816 2723.16 373.351 2693.86 344.065C2664.56 314.204 2628.08 299.273 2584.42 299.273C2541.34 299.273 2505.15 314.204 2475.85 344.065C2446.55 373.351 2431.9 409.816 2431.9 453.459C2431.9 497.102 2446.55 533.854 2475.85 563.715C2505.15 593.001 2541.34 607.645 2584.42 607.645Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3123.68 226.918C3174.23 226.918 3214.73 242.997 3245.18 275.155C3275.63 306.738 3290.85 349.807 3290.85 404.361V668.802H3215.88V408.668C3215.88 373.638 3206.4 346.649 3187.45 327.699C3168.49 308.174 3142.35 298.412 3109.03 298.412C3071.69 298.412 3041.53 310.184 3018.55 333.728C2995.58 356.698 2984.09 392.301 2984.09 440.538V668.802H2909.12V238.116H2984.09V300.135C3014.53 251.323 3061.06 226.918 3123.68 226.918Z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3735.01 238.116H3809.98V668.802H3735.01V594.724C3697.67 651.575 3643.39 680 3572.15 680C3511.83 680 3460.42 658.179 3417.91 614.536C3375.4 570.319 3354.14 516.626 3354.14 453.459C3354.14 390.292 3375.4 336.887 3417.91 293.244C3460.42 249.026 3511.83 226.918 3572.15 226.918C3643.39 226.918 3697.67 255.343 3735.01 312.194V238.116ZM3581.63 607.645C3625.29 607.645 3661.77 593.001 3691.07 563.715C3720.36 533.854 3735.01 497.102 3735.01 453.459C3735.01 409.816 3720.36 373.351 3691.07 344.065C3661.77 314.204 3625.29 299.273 3581.63 299.273C3538.55 299.273 3502.35 314.204 3473.06 344.065C3443.76 373.351 3429.11 409.816 3429.11 453.459C3429.11 497.102 3443.76 533.854 3473.06 563.715C3502.35 593.001 3538.55 607.645 3581.63 607.645Z",
      fill: fill
    })]
  }));
};
const LogoIcon = ({
  fill = DEFAULT_FILL
}) => {
  return /*#__PURE__*/_jsx("svg", {
    width: "720",
    height: "720",
    viewBox: "0 0 720 720",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M56.4948 41.5477L681.653 258.009C692.643 261.815 700 272.06 700 283.56V395.158C700 413.749 681.461 426.81 663.657 420.761L38.4994 208.361C27.4306 204.6 20 194.316 20 182.758V67.0987C20 48.4405 38.6635 35.3736 56.4948 41.5477ZM418.947 382.38C436.75 376.331 455.289 389.392 455.289 407.984V521.171C455.289 532.671 447.933 542.917 436.942 546.722L56.4947 678.452C38.6635 684.626 20 671.56 20 652.901V537.242C20 525.684 27.4307 515.4 38.4994 511.639L418.947 382.38Z",
      fill: fill
    })
  });
};
const LogoType = ({
  fill = DEFAULT_FILL
}) => {
  return /*#__PURE__*/_jsxs("svg", {
    width: "3008",
    height: "720",
    viewBox: "0 0 3008 720",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M267.349 680C211.051 680 162.797 666.792 122.584 640.377C82.9464 613.961 55.0849 577.784 39 531.844L107.935 492.221C131.488 565.15 185.201 601.615 269.072 601.615C310.433 601.615 342.029 593.288 363.858 576.635C385.688 559.408 396.603 536.725 396.603 508.587C396.603 479.874 385.688 458.34 363.858 443.984C342.029 429.628 305.55 414.41 254.423 398.331C229.147 390.292 209.903 383.975 196.69 379.381C183.477 374.213 166.818 366.747 146.712 356.985C127.18 346.649 112.531 336.312 102.765 325.976C92.9994 315.065 84.0953 300.996 76.0528 283.769C68.5848 266.541 64.8508 247.017 64.8508 225.195C64.8508 172.939 83.2336 131.593 119.999 101.157C156.765 70.148 201.573 54.6433 254.423 54.6433C302.104 54.6433 343.465 66.7025 378.507 90.821C414.124 114.939 440.836 146.81 458.645 186.433L391.433 225.195C365.582 163.176 319.912 132.167 254.423 132.167C221.679 132.167 195.254 140.206 175.148 156.285C155.041 172.364 144.988 194.186 144.988 221.75C144.988 248.165 154.467 268.264 173.424 282.046C192.381 295.828 225.126 310.184 271.657 325.114C288.317 330.283 300.093 334.015 306.987 336.312C313.88 338.609 324.508 342.629 338.869 348.371C353.805 354.114 364.72 358.708 371.614 362.153C378.507 365.599 387.699 370.48 399.188 376.797C411.252 383.114 420.156 389.143 425.9 394.886C431.645 400.628 438.251 407.806 445.719 416.42C453.762 424.459 459.506 432.786 462.953 441.4C466.4 450.013 469.272 460.063 471.57 471.548C474.442 482.458 475.879 494.231 475.879 506.864C475.879 559.695 456.634 601.902 418.145 633.486C379.656 664.495 329.391 680 267.349 680Z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M912.622 238.116H987.59V668.802H912.622V594.724C875.282 651.575 820.996 680 749.762 680C689.444 680 638.029 658.179 595.519 614.536C553.009 570.319 531.754 516.626 531.754 453.459C531.754 390.292 553.009 336.887 595.519 293.244C638.029 249.026 689.444 226.918 749.762 226.918C820.996 226.918 875.282 255.343 912.622 312.194V238.116ZM759.241 607.645C802.9 607.645 839.378 593.001 868.676 563.715C897.974 533.854 912.622 497.102 912.622 453.459C912.622 409.816 897.974 373.351 868.676 344.065C839.378 314.204 802.9 299.273 759.241 299.273C716.156 299.273 679.965 314.204 650.668 344.065C621.37 373.351 606.721 409.816 606.721 453.459C606.721 497.102 621.37 533.854 650.668 563.715C679.965 593.001 716.156 607.645 759.241 607.645Z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M1083.94 668.802V40H1158.91V668.802H1083.94Z",
      fill: "#00223D"
    }), /*#__PURE__*/_jsx("path", {
      d: "M1490.42 310.471H1375.82V543.903C1375.82 565.15 1379.84 580.368 1387.88 589.556C1396.5 598.17 1409.42 602.764 1426.66 603.338C1443.89 603.338 1465.14 602.764 1490.42 601.615V668.802C1424.93 677.416 1376.97 672.248 1346.52 653.297C1316.07 633.773 1300.85 597.308 1300.85 543.903V310.471H1215.54V238.116H1300.85V139.919L1375.82 117.524V238.116H1490.42V310.471Z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M1896.8 238.116H1971.77V668.802H1896.8V594.724C1859.46 651.575 1805.18 680 1733.94 680C1673.63 680 1622.21 658.179 1579.7 614.536C1537.19 570.319 1515.94 516.626 1515.94 453.459C1515.94 390.292 1537.19 336.887 1579.7 293.244C1622.21 249.026 1673.63 226.918 1733.94 226.918C1805.18 226.918 1859.46 255.343 1896.8 312.194V238.116ZM1743.42 607.645C1787.08 607.645 1823.56 593.001 1852.86 563.715C1882.16 533.854 1896.8 497.102 1896.8 453.459C1896.8 409.816 1882.16 373.351 1852.86 344.065C1823.56 314.204 1787.08 299.273 1743.42 299.273C1700.34 299.273 1664.15 314.204 1634.85 344.065C1605.55 373.351 1590.9 409.816 1590.9 453.459C1590.9 497.102 1605.55 533.854 1634.85 563.715C1664.15 593.001 1700.34 607.645 1743.42 607.645Z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M2282.68 226.918C2333.23 226.918 2373.73 242.997 2404.18 275.155C2434.63 306.738 2449.85 349.807 2449.85 404.361V668.802H2374.88V408.668C2374.88 373.638 2365.4 346.649 2346.45 327.699C2327.49 308.174 2301.35 298.412 2268.03 298.412C2230.69 298.412 2200.53 310.184 2177.55 333.728C2154.58 356.698 2143.09 392.301 2143.09 440.538V668.802H2068.12V238.116H2143.09V300.135C2173.53 251.323 2220.06 226.918 2282.68 226.918Z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M2894.01 238.116H2968.98V668.802H2894.01V594.724C2856.67 651.575 2802.39 680 2731.15 680C2670.83 680 2619.42 658.179 2576.91 614.536C2534.4 570.319 2513.14 516.626 2513.14 453.459C2513.14 390.292 2534.4 336.887 2576.91 293.244C2619.42 249.026 2670.83 226.918 2731.15 226.918C2802.39 226.918 2856.67 255.343 2894.01 312.194V238.116ZM2740.63 607.645C2784.29 607.645 2820.77 593.001 2850.07 563.715C2879.36 533.854 2894.01 497.102 2894.01 453.459C2894.01 409.816 2879.36 373.351 2850.07 344.065C2820.77 314.204 2784.29 299.273 2740.63 299.273C2697.55 299.273 2661.35 314.204 2632.06 344.065C2602.76 373.351 2588.11 409.816 2588.11 453.459C2588.11 497.102 2602.76 533.854 2632.06 563.715C2661.35 593.001 2697.55 607.645 2740.63 607.645Z",
      fill: fill
    })]
  });
};
// EXTERNAL MODULE: external "next/stdlib"
var stdlib_ = __webpack_require__(1210);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./app/core/utils/classnames.ts
var classnames = __webpack_require__(4698);
// EXTERNAL MODULE: external "next/data-client"
var data_client_ = __webpack_require__(3136);
;// CONCATENATED MODULE: ./app/auth/components/ShowForRole.tsx




const ShowForRole = ({
  role,
  children
}) => {
  const {
    roles = []
  } = (0,data_client_.useSession)(); // const router = useRouter()

  const show = role ? roles.includes(role) : true;

  if (show == false) {
    return null;
  }

  const renderDirectly = /*#__PURE__*/(0,external_react_.isValidElement)(children) || typeof children !== "function";
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: renderDirectly ? children : children({
      roles
    })
  });
};

const ShowForRole_ShowForRoleWrapped = ({
  role,
  children,
  fallback = "Loading..."
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
    fallback: fallback,
    children: /*#__PURE__*/jsx_runtime_.jsx(ShowForRole, {
      role: role,
      children: children
    })
  });
};

/* harmony default export */ const components_ShowForRole = (ShowForRole_ShowForRoleWrapped);
// EXTERNAL MODULE: ./app/organizations/hooks/useCurrentOrganization.ts
var hooks_useCurrentOrganization = __webpack_require__(4268);
;// CONCATENATED MODULE: ./app/organizations/components/RedirectToOnboarding.tsx


function RedirectToOnboarding_RedirectToOnboarding() {
  const {
    push
  } = useRouter();
  const organization = useCurrentOrganization(); // useEffect(() => {
  //   try {
  //     OnboardedOrganizationSchema.parse(organization)
  //   } catch (error) {
  //     push(Routes.CreatorOnboardingPage())
  //   }
  // }, [organization, push])

  return null;
}
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(5198);
;// CONCATENATED MODULE: ./app/core/layouts/DashboardLayout.tsx











 // import Avatar from 'components/Avatar'

const creatorNavigation = [{
  name: "Links",
  href: "/dashboard/links",
  current: false,
  icon: esm/* LinkIcon */.xPt
}, {
  name: "Assets",
  href: "/dashboard/assets",
  current: false,
  icon: esm/* CashIcon */.NbN
}, {
  name: "Orders",
  href: "/dashboard/assets/orders",
  current: false,
  icon: esm/* CashIcon */.NbN
}, {
  name: "Analytics",
  href: "/dashboard/analytics",
  current: false,
  icon: esm/* TrendingUpIcon */.Zab
}, {
  name: "Workflows & Integrations",
  href: "/dashboard/workflows",
  current: false,
  icon: esm/* SwitchHorizontalIcon */.aK0
}, {
  name: "Customize",
  href: "/dashboard/customize",
  current: false,
  icon: esm/* AdjustmentsIcon */.XgF
}, {
  name: "Payouts",
  href: "/dashboard/payouts",
  current: false,
  icon: esm/* CashIcon */.NbN
}];
const userNavigation = [{
  name: "Purchased Assets",
  href: "/my/assets",
  current: false
}, {
  name: "Wallet",
  href: "/my/payments",
  current: false
}, {
  name: "Security",
  href: "/my/security",
  current: false
}, {
  name: "Settings",
  href: "/my/settings",
  current: false
}, {
  name: "Help",
  href: "/help",
  current: false
} // { name: 'Logout', href: '/logout' }
];





const DashboardLayout = ({
  subHeader,
  title,
  children,
  container
}) => {
  const {
    0: sidebarOpen,
    1: setSidebarOpen
  } = (0,external_react_.useState)(false);
  const router = (0,stdlib_.useRouter)();
  const isRegularUserPath = router.pathname.startsWith("/my/");
  const {
    0: opened,
    1: setOpened
  } = (0,external_react_.useState)(false);
  const theme = (0,core_.useMantineTheme)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(head_.Head, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title || "saltana"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.AppShell // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
    , {
      navbarOffsetBreakpoint: "sm" // fixed prop on AppShell will be automatically added to Header and Navbar
      ,
      fixed: true,
      navbar: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Navbar, {
        padding: "md" // Breakpoint at which navbar will be hidden if hidden prop is true
        ,
        hiddenBreakpoint: "sm" // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
        ,
        hidden: !opened // when viewport size is less than theme.breakpoints.sm navbar width is 100%
        // viewport size > theme.breakpoints.sm – width is 300px
        // viewport size > theme.breakpoints.lg – width is 400px
        ,
        width: {
          sm: 300,
          lg: 400
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Navbar.Section, {
          grow: true,
          component: core_.ScrollArea,
          ml: -10,
          mr: -10,
          sx: {
            paddingLeft: 10,
            paddingRight: 10
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_ShowForRole, {
            children: ({
              roles
            }) => roles !== null && roles !== void 0 && roles.includes("CREATOR") ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "px-3 relative inline-block text-left",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://saltana.com/",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "group w-full rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "flex w-full justify-between items-center",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "flex min-w-0 items-center justify-between space-x-3",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          className: "text-gray-900 text-sm font-medium ",
                          children: ["Go to my space -", ">"]
                        })
                      })
                    })
                  })
                })
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "px-3 relative inline-block text-left",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://saltana.com/request-invite",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "group w-full bg-yellow-200 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "flex w-full justify-between items-center",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "flex min-w-0 items-center justify-between space-x-3",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "text-gray-900 text-sm font-medium ",
                          children: "Apply for a creator account"
                        })
                      })
                    })
                  })
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(components_ShowForRole, {
            role: "CREATOR",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "px-3 mt-5",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "search",
                className: "sr-only",
                children: "Search"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mt-1 relative rounded-md shadow-sm",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                  "aria-hidden": "true",
                  children: /*#__PURE__*/jsx_runtime_.jsx(solid_esm/* SearchIcon */.W1M, {
                    className: "mr-3 h-4 w-4 text-gray-400",
                    "aria-hidden": "true"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  name: "search",
                  id: "search",
                  className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md",
                  placeholder: "Search"
                })]
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: "px-3 mt-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_ShowForRole, {
              role: "CREATOR",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "space-y-1",
                children: creatorNavigation.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.Link, {
                  href: item.href,
                  passHref: true,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: (0,classnames/* default */.Z)(item.current ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50", "group flex items-center px-2 py-2 text-sm font-medium rounded-md"),
                    "aria-current": item.current ? "page" : undefined,
                    children: [/*#__PURE__*/jsx_runtime_.jsx(item.icon, {
                      className: (0,classnames/* default */.Z)(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-3 flex-shrink-0 h-6 w-6"),
                      "aria-hidden": "true"
                    }), item.name]
                  })
                }, item.name))
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-8",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                id: "desktop-myaccount-headline",
                children: "My Account"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mt-1 space-y-1",
                role: "group",
                "aria-labelledby": "desktop-teams-headline",
                children: [userNavigation.map(item => /*#__PURE__*/jsx_runtime_.jsx(next_link.Link, {
                  href: item.href,
                  passHref: true,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: (0,classnames/* default */.Z)(item.current ? "bg-gray-200 text-gray-900" : "text-gray-700  hover:text-gray-900 hover:bg-gray-50", "group flex items-center px-3 py-2 text-sm font-medium  rounded-md "),
                    "aria-current": item.current ? "page" : undefined,
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "truncate",
                      children: item.name
                    })
                  }, item.name)
                }, item.href)), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  onClick: () => console.log("signout"),
                  href: "#",
                  className: "group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "truncate",
                    children: "Logout"
                  })
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Navbar.Section, {
          children: "c"
        })]
      }),
      header: /*#__PURE__*/jsx_runtime_.jsx(core_.Header, {
        height: 70,
        padding: "md",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MediaQuery, {
            largerThan: "sm",
            styles: {
              display: 'none'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.Burger, {
              opened: opened,
              onClick: () => setOpened(o => !o),
              size: "sm",
              color: theme.colors.gray[6],
              mr: "xl"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Logo_Logo, {
            h: "8",
            fill: "#00000"
          })]
        })
      }),
      children: children
    })]
  });
};

const DashboardLayout2 = ({
  subHeader,
  title,
  children,
  container
}) => {
  const {
    0: sidebarOpen,
    1: setSidebarOpen
  } = useState(false);
  const router = useRouter();
  const isRegularUserPath = router.pathname.startsWith("/my/");
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs(Head, {
      children: [/*#__PURE__*/_jsx("title", {
        children: title || "saltana"
      }), /*#__PURE__*/_jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/_jsx(ShowForRoleWrapped, {
      role: "CREATOR",
      children: /*#__PURE__*/_jsx(RedirectToOnboarding, {})
    }), /*#__PURE__*/_jsxs("div", {
      className: "min-h-full",
      children: [/*#__PURE__*/_jsx(Transition.Root, {
        show: sidebarOpen,
        as: Fragment,
        children: /*#__PURE__*/_jsxs(Dialog, {
          as: "div",
          className: "fixed inset-0 flex z-40 lg:hidden",
          onClose: setSidebarOpen,
          children: [/*#__PURE__*/_jsx(Transition.Child, {
            as: Fragment,
            enter: "transition-opacity ease-linear duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "transition-opacity ease-linear duration-300",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/_jsx(Dialog.Overlay, {
              className: "fixed inset-0 bg-gray-600 bg-opacity-75"
            })
          }), /*#__PURE__*/_jsx(Transition.Child, {
            as: Fragment,
            enter: "transition ease-in-out duration-300 transform",
            enterFrom: "-translate-x-full",
            enterTo: "translate-x-0",
            leave: "transition ease-in-out duration-300 transform",
            leaveFrom: "translate-x-0",
            leaveTo: "-translate-x-full",
            children: /*#__PURE__*/_jsxs("div", {
              className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white",
              children: [/*#__PURE__*/_jsx(Transition.Child, {
                as: Fragment,
                enter: "ease-in-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in-out duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/_jsx("div", {
                  className: "absolute top-0 right-0 -mr-12 pt-2",
                  children: /*#__PURE__*/_jsxs("button", {
                    type: "button",
                    className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                    onClick: () => setSidebarOpen(false),
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "sr-only",
                      children: "Close sidebar"
                    }), /*#__PURE__*/_jsx(XIcon, {
                      className: "h-6 w-6 text-white",
                      "aria-hidden": "true"
                    })]
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "flex-shrink-0 flex items-center px-4",
                children: /*#__PURE__*/_jsx("a", {
                  href: "#",
                  className: " w-auto",
                  children: /*#__PURE__*/_jsx(Logo, {
                    h: "8",
                    fill: "#00000"
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "mt-5 flex-1 h-0 overflow-y-auto",
                children: /*#__PURE__*/_jsxs("nav", {
                  className: "px-2",
                  children: [/*#__PURE__*/_jsx(ShowForRoleWrapped, {
                    role: "CREATOR",
                    children: /*#__PURE__*/_jsx("div", {
                      className: "space-y-1",
                      children: creatorNavigation.map(item => /*#__PURE__*/_jsx(Link, {
                        href: item.href,
                        children: /*#__PURE__*/_jsxs("a", {
                          href: "#",
                          className: classNames(item.current ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50", "group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"),
                          "aria-current": item.current ? "page" : undefined,
                          children: [/*#__PURE__*/_jsx(item.icon, {
                            className: classNames(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-3 flex-shrink-0 h-6 w-6"),
                            "aria-hidden": "true"
                          }), item.name]
                        })
                      }, item.name))
                    })
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "mt-8",
                    children: [/*#__PURE__*/_jsx("h3", {
                      className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                      id: "mobile-myaccount-headline",
                      children: "My Account"
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "mt-1 space-y-1",
                      role: "group",
                      "aria-labelledby": "mobile-myaccount-headline",
                      children: [userNavigation.map(item => /*#__PURE__*/_jsx(Link, {
                        href: item.href,
                        children: /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: "group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50",
                          children: /*#__PURE__*/_jsx("span", {
                            className: "truncate",
                            children: item.name
                          })
                        })
                      }, item.name)), /*#__PURE__*/_jsx("a", {
                        onClick: () => console.log("signout"),
                        href: "#",
                        className: "group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50",
                        children: /*#__PURE__*/_jsx("span", {
                          className: "truncate",
                          children: "Logout"
                        })
                      })]
                    })]
                  })]
                })
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "flex-shrink-0 w-14",
            "aria-hidden": "true"
          })]
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100",
        children: [/*#__PURE__*/_jsx("div", {
          className: "flex items-center flex-shrink-0 px-6",
          children: /*#__PURE__*/_jsx("a", {
            href: "#",
            className: "h-8 w-auto",
            children: /*#__PURE__*/_jsx(Logo, {
              h: "8",
              fill: "#00000"
            })
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "mt-6 h-0 flex-1 flex flex-col overflow-y-auto",
          children: [/*#__PURE__*/_jsx(ShowForRoleWrapped, {
            children: ({
              roles
            }) => roles !== null && roles !== void 0 && roles.includes("CREATOR") ? /*#__PURE__*/_jsx("div", {
              className: "px-3 relative inline-block text-left",
              children: /*#__PURE__*/_jsx("a", {
                href: "https://saltana.com/",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/_jsx("div", {
                  className: "group w-full rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500",
                  children: /*#__PURE__*/_jsx("span", {
                    className: "flex w-full justify-between items-center",
                    children: /*#__PURE__*/_jsx("span", {
                      className: "flex min-w-0 items-center justify-between space-x-3",
                      children: /*#__PURE__*/_jsx("span", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: /*#__PURE__*/_jsxs("span", {
                          className: "text-gray-900 text-sm font-medium ",
                          children: ["Go to my space -", ">"]
                        })
                      })
                    })
                  })
                })
              })
            }) : /*#__PURE__*/_jsx("div", {
              className: "px-3 relative inline-block text-left",
              children: /*#__PURE__*/_jsx("a", {
                href: "https://saltana.com/request-invite",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/_jsx("div", {
                  className: "group w-full bg-yellow-200 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500",
                  children: /*#__PURE__*/_jsx("span", {
                    className: "flex w-full justify-between items-center",
                    children: /*#__PURE__*/_jsx("span", {
                      className: "flex min-w-0 items-center justify-between space-x-3",
                      children: /*#__PURE__*/_jsx("span", {
                        className: "flex-1 flex flex-col min-w-0",
                        children: /*#__PURE__*/_jsx("span", {
                          className: "text-gray-900 text-sm font-medium ",
                          children: "Apply for a creator account"
                        })
                      })
                    })
                  })
                })
              })
            })
          }), /*#__PURE__*/_jsx(ShowForRoleWrapped, {
            role: "CREATOR",
            children: /*#__PURE__*/_jsxs("div", {
              className: "px-3 mt-5",
              children: [/*#__PURE__*/_jsx("label", {
                htmlFor: "search",
                className: "sr-only",
                children: "Search"
              }), /*#__PURE__*/_jsxs("div", {
                className: "mt-1 relative rounded-md shadow-sm",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                  "aria-hidden": "true",
                  children: /*#__PURE__*/_jsx(SearchIcon, {
                    className: "mr-3 h-4 w-4 text-gray-400",
                    "aria-hidden": "true"
                  })
                }), /*#__PURE__*/_jsx("input", {
                  type: "text",
                  name: "search",
                  id: "search",
                  className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md",
                  placeholder: "Search"
                })]
              })]
            })
          }), /*#__PURE__*/_jsxs("nav", {
            className: "px-3 mt-6",
            children: [/*#__PURE__*/_jsx(ShowForRoleWrapped, {
              role: "CREATOR",
              children: /*#__PURE__*/_jsx("div", {
                className: "space-y-1",
                children: creatorNavigation.map(item => /*#__PURE__*/_jsx(Link, {
                  href: item.href,
                  passHref: true,
                  children: /*#__PURE__*/_jsxs("a", {
                    className: classNames(item.current ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50", "group flex items-center px-2 py-2 text-sm font-medium rounded-md"),
                    "aria-current": item.current ? "page" : undefined,
                    children: [/*#__PURE__*/_jsx(item.icon, {
                      className: classNames(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-3 flex-shrink-0 h-6 w-6"),
                      "aria-hidden": "true"
                    }), item.name]
                  })
                }, item.name))
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "mt-8",
              children: [/*#__PURE__*/_jsx("h3", {
                className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                id: "desktop-myaccount-headline",
                children: "My Account"
              }), /*#__PURE__*/_jsxs("div", {
                className: "mt-1 space-y-1",
                role: "group",
                "aria-labelledby": "desktop-teams-headline",
                children: [userNavigation.map(item => /*#__PURE__*/_jsx(Link, {
                  href: item.href,
                  passHref: true,
                  children: /*#__PURE__*/_jsx("a", {
                    className: classNames(item.current ? "bg-gray-200 text-gray-900" : "text-gray-700  hover:text-gray-900 hover:bg-gray-50", "group flex items-center px-3 py-2 text-sm font-medium  rounded-md "),
                    "aria-current": item.current ? "page" : undefined,
                    children: /*#__PURE__*/_jsx("span", {
                      className: "truncate",
                      children: item.name
                    })
                  }, item.name)
                }, item.href)), /*#__PURE__*/_jsx("a", {
                  onClick: () => console.log("signout"),
                  href: "#",
                  className: "group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50",
                  children: /*#__PURE__*/_jsx("span", {
                    className: "truncate",
                    children: "Logout"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "flex-shrink-0 flex border-t border-gray-200 p-4 mt-5",
            children: /*#__PURE__*/_jsxs("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/_jsx("div", {
                children: "serButton"
              }), /*#__PURE__*/_jsx("div", {
                className: "ml-3",
                children: /*#__PURE__*/_jsx("p", {
                  className: "text-sm font-medium text-gray-700 group-hover:text-gray-900",
                  children: "name"
                })
              })]
            })
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "lg:pl-64 flex flex-col",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden",
          children: [/*#__PURE__*/_jsxs("button", {
            type: "button",
            className: "px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden",
            onClick: () => setSidebarOpen(true),
            children: [/*#__PURE__*/_jsx("span", {
              className: "sr-only",
              children: "Open sidebar"
            }), /*#__PURE__*/_jsx(MenuAlt1Icon, {
              className: "h-6 w-6",
              "aria-hidden": "true"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex-1 flex justify-between px-4 sm:px-6 lg:px-8",
            children: [/*#__PURE__*/_jsx("div", {
              className: "flex-1 flex",
              children: /*#__PURE__*/_jsxs("form", {
                className: "w-full flex md:ml-0",
                action: "#",
                method: "GET",
                children: [/*#__PURE__*/_jsx("label", {
                  htmlFor: "search-field",
                  className: "sr-only",
                  children: "Search"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "relative w-full text-gray-400 focus-within:text-gray-600",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "absolute inset-y-0 left-0 flex items-center pointer-events-none",
                    children: /*#__PURE__*/_jsx(SearchIcon, {
                      className: "h-5 w-5",
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/_jsx("input", {
                    id: "search-field",
                    name: "search-field",
                    className: "block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",
                    placeholder: "Search",
                    type: "search"
                  })]
                })]
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "flex items-center",
              children: /*#__PURE__*/_jsxs(Menu, {
                as: "div",
                className: "ml-3 relative",
                children: [/*#__PURE__*/_jsx("div", {
                  children: /*#__PURE__*/_jsxs(Menu.Button, {
                    className: "max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500",
                    children: [/*#__PURE__*/_jsx("span", {
                      className: "sr-only",
                      children: "Open user menu"
                    }), /*#__PURE__*/_jsx(Image, {
                      className: "h-8 w-8 rounded-full",
                      src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                      alt: "",
                      height: 80,
                      width: 80
                    })]
                  })
                }), /*#__PURE__*/_jsx(Transition, {
                  as: Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /*#__PURE__*/_jsxs(Menu.Items, {
                    className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "py-1",
                      children: [/*#__PURE__*/_jsx(Menu.Item, {
                        children: ({
                          active
                        }) => /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                          children: "View profile"
                        })
                      }), /*#__PURE__*/_jsx(Menu.Item, {
                        children: ({
                          active
                        }) => /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                          children: "Settings"
                        })
                      }), /*#__PURE__*/_jsx(Menu.Item, {
                        children: ({
                          active
                        }) => /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                          children: "Notifications"
                        })
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "py-1",
                      children: [/*#__PURE__*/_jsx(Menu.Item, {
                        children: ({
                          active
                        }) => /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                          children: "Get desktop app g"
                        })
                      }), /*#__PURE__*/_jsx(Menu.Item, {
                        children: ({
                          active
                        }) => /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                          children: "Support"
                        })
                      })]
                    }), /*#__PURE__*/_jsx("div", {
                      className: "py-1",
                      children: /*#__PURE__*/_jsx(Menu.Item, {
                        children: ({
                          active
                        }) => /*#__PURE__*/_jsx("a", {
                          href: "#",
                          className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                          children: "Logout"
                        })
                      })
                    })]
                  })
                })]
              })
            })]
          })]
        }), /*#__PURE__*/_jsx("main", {
          className: "flex-1",
          children: /*#__PURE__*/_jsx(Suspense, {
            fallback: "Loading...",
            children: children
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const layouts_DashboardLayout = (DashboardLayout);

/***/ }),

/***/ 4698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/***/ }),

/***/ 4268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useCurrentOrganization)
/* harmony export */ });
/* harmony import */ var app_core_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1246);

const useCurrentOrganization = () => {
  var _user$memberships$;

  const user = (0,app_core_hooks_useCurrentUser__WEBPACK_IMPORTED_MODULE_0__/* .useCurrentUser */ .x)();
  const organization = user === null || user === void 0 ? void 0 : (_user$memberships$ = user.memberships[0]) === null || _user$memberships$ === void 0 ? void 0 : _user$memberships$.organization;
  return organization;
};

/***/ })

};
;