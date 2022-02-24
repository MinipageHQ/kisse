"use strict";
exports.id = 4669;
exports.ids = [4669];
exports.modules = {

/***/ 4669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3659);
/* harmony import */ var integrations_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2647);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(963);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quirrel_blitz__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _send_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2487);





// Make sure this can be run multiple times
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)((0,quirrel_blitz__WEBPACK_IMPORTED_MODULE_3__.Queue)("api/_/jobs/organization-created", // the path of this API route
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

  if (!(organization !== null && organization !== void 0 && organization.stripeSellerId)) {
    promises.push(integrations_stripe__WEBPACK_IMPORTED_MODULE_2__/* .default.accounts.create */ .Z.accounts.create({
      type: "express",
      email: email || `${organizationId}@organizations.saltana.net` // make sure this takes the email and sends it to all emails for an organization

    }).then(stripeAccount => db__WEBPACK_IMPORTED_MODULE_1__.default.organization.update({
      where: {
        id: organizationId
      },
      data: {
        stripeSellerId: stripeAccount.id
      }
    })));
  }

  if (!(organization !== null && organization !== void 0 && organization.stripeCustomerId)) {
    promises.push(integrations_stripe__WEBPACK_IMPORTED_MODULE_2__/* .default.customers.create */ .Z.customers.create({
      email: email || `${organizationId}@organizations.saltana.net` // make sure this takes the email and sends it to all emails for an organization

    }).then(stripeCustomer => db__WEBPACK_IMPORTED_MODULE_1__.default.organization.update({
      where: {
        id: organizationId
      },
      data: {
        stripeCustomerId: stripeCustomer.id
      }
    })));
  }

  if (emailClerkId) {
    promises.push(_send_email__WEBPACK_IMPORTED_MODULE_4__.default.enqueue({
      clerkEmailId: emailClerkId,
      type: "organization-welcome",
      data: {
        name: organization.name
      }
    }));
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

/***/ })

};
;