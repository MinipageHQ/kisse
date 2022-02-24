"use strict";
(() => {
var exports = {};
exports.id = 4363;
exports.ids = [4363,2840,2813,5026,6950];
exports.modules = {

/***/ 7304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var app_core_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7672);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3659);
/* harmony import */ var integrations_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const getServerSideProps = (0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)(async ({
  req,
  res
}) => {
  const session = await (0,next_stdlib_server__WEBPACK_IMPORTED_MODULE_2__.getSession)(req, res);
  const returnUrl = `${"http://localhost:3000"}/dashboard`;

  if (session.defaultOrgId) {
    const organization = await db__WEBPACK_IMPORTED_MODULE_3__.default.organization.findFirst({
      where: {
        id: session.defaultOrgId
      },
      select: {
        stripeSellerId: true
      }
    });

    if (organization && organization.stripeSellerId) {
      try {
        const links = await integrations_stripe__WEBPACK_IMPORTED_MODULE_4__/* .default.accounts.createLoginLink */ .Z.accounts.createLoginLink(organization.stripeSellerId, {
          redirect_url: returnUrl
        });
        return {
          redirect: {
            destination: links.url,
            permanent: false
          }
        };
      } catch (error) {
        if (error && error.type === "StripeInvalidRequestError") {
          const rawMessage = error.raw.message;

          if (rawMessage === "Cannot create a login link for an account that has not completed onboarding.") {
            const links = await integrations_stripe__WEBPACK_IMPORTED_MODULE_4__/* .default.accountLinks.create */ .Z.accountLinks.create({
              account: organization.stripeSellerId,
              type: "account_onboarding",
              return_url: returnUrl,
              refresh_url: returnUrl
            });
            return {
              redirect: {
                destination: links.url,
                permanent: false
              }
            };
          }
        } else {
          console.error("Unknown error", error);
        }
      }
    }
  }

  return {
    props: {}
  };
});

const DashboardPayoutsPage = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: "Something went wrong and we can't connect you to our payment provider."
  });
};

DashboardPayoutsPage.authenticate = true;

DashboardPayoutsPage.getLayout = page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(app_core_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
  children: page
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPayoutsPage);

/***/ }),

/***/ 2647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(464);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())('sk_test_51IpyZzCzDOw5R4whxk0jrB3j2tDCr4OHHrbjsz4L2bRI05G0Ku3m3k264fL5GmMKQQIa2PROW9UDZn8ptmIKTXRu00kcmgys8T', {
  apiVersion: '2020-08-27'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripe);

/***/ }),

/***/ 1921:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 5198:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 3136:
/***/ ((module) => {

module.exports = require("next/data-client");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 654:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1210:
/***/ ((module) => {

module.exports = require("next/stdlib");

/***/ }),

/***/ 9986:
/***/ ((module) => {

module.exports = require("next/stdlib-server");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 464:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 5071:
/***/ ((module) => {

module.exports = require("superjson");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,6762,733,5675,7325,5223,7672], () => (__webpack_exec__(7304)));
module.exports = __webpack_exports__;

})();