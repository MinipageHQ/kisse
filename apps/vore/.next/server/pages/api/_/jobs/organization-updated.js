"use strict";
(() => {
var exports = {};
exports.id = 9079;
exports.ids = [9079,8999,8147,4257];
exports.modules = {

/***/ 1351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3659);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__);



// Make sure this can be run multiple times
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)((0,quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__.Queue)("api/_/jobs/organization-updated", // the path of this API route
async ({
  organizationId
}) => {
  var _organization$members, _organization$members2, _organization$members3, _organization$members4, _organization$members5, _organization$members6;

  const promises = [// organizationCreateStripeConnect.enqueue({ organizationId })
  ];
  const organization = await db__WEBPACK_IMPORTED_MODULE_1__.default.organization.findFirst({
    where: {
      id: organizationId
    },
    select: {
      name: true,
      platformFeatures: true,
      slug: true,
      description: true,
      stripeCustomerId: true,
      stripeSellerId: true,
      memberships: {
        select: {
          user: {
            select: {
              prefersEmail: {
                select: {
                  emailSafe: true,
                  clerkEmailId: true
                }
              }
            }
          }
        }
      }
    }
  });
  const email = organization === null || organization === void 0 ? void 0 : (_organization$members = organization.memberships[0]) === null || _organization$members === void 0 ? void 0 : (_organization$members2 = _organization$members.user) === null || _organization$members2 === void 0 ? void 0 : (_organization$members3 = _organization$members2.prefersEmail) === null || _organization$members3 === void 0 ? void 0 : _organization$members3.emailSafe;
  const emailClerkId = organization === null || organization === void 0 ? void 0 : (_organization$members4 = organization.memberships[0]) === null || _organization$members4 === void 0 ? void 0 : (_organization$members5 = _organization$members4.user) === null || _organization$members5 === void 0 ? void 0 : (_organization$members6 = _organization$members5.prefersEmail) === null || _organization$members6 === void 0 ? void 0 : _organization$members6.clerkEmailId;

  if (!(organization !== null && organization !== void 0 && organization.stripeSellerId)) {// promises.push(
    //   stripe.accounts
    //     .update({
    //       email: email || `${organizationId}@organizations.saltana.net`, // make sure this takes the email and sends it to all emails for an organization
    //     })
    //     .then((stripeAccount) =>
    //       db.organization.update({
    //         where: {
    //           id: organizationId,
    //         },
    //         data: {
    //           stripeSellerId: stripeAccount.id,
    //         },
    //       })
    //     )
    // )
  }

  if (!(organization !== null && organization !== void 0 && organization.stripeCustomerId)) {// promises.push(
    //   stripe.customers
    //     .create({
    //       email: email || `${organizationId}@organizations.saltana.net`, // make sure this takes the email and sends it to all emails for an organization
    //     })
    //     .then((stripeCustomer) =>
    //       db.organization.update({
    //         where: {
    //           id: organizationId,
    //         },
    //         data: {
    //           stripeCustomerId: stripeCustomer.id,
    //         },
    //       })
    //     )
    // )
  }

  await Promise.all(promises);
})));

/***/ }),

/***/ 3659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1210);
/* harmony import */ var next_stdlib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_stdlib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _prisma_client__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


const EnhancedPrisma = (0,next_stdlib__WEBPACK_IMPORTED_MODULE_0__.enhancePrisma)(_prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EnhancedPrisma());

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 1210:
/***/ ((module) => {

module.exports = require("next/stdlib");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 963:
/***/ ((module) => {

module.exports = require("quirrel/blitz");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [733], () => (__webpack_exec__(1351)));
module.exports = __webpack_exports__;

})();