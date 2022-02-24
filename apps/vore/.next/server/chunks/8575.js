"use strict";
exports.id = 8575;
exports.ids = [8575];
exports.modules = {

/***/ 8575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var _auth_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7798);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3659);
/* harmony import */ var integrations_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2647);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(963);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quirrel_blitz__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _send_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2487);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)((0,quirrel_blitz__WEBPACK_IMPORTED_MODULE_4__.Queue)("api/_/jobs/user-created", // the path of this API route
async ({
  userId
}) => {
  var _user$prefersEmail, _user$prefersEmail2;

  const user = await db__WEBPACK_IMPORTED_MODULE_2__.default.user.findFirst({
    where: {
      id: userId
    },
    select: _objectSpread(_objectSpread({}, _auth_defaults__WEBPACK_IMPORTED_MODULE_1__/* .defaultUserSelect */ .H), {}, {
      prefersEmail: true
    })
  });
  console.log("got user", user);
  const promises = []; // if the user doesn't have a prefered email, assign one

  let preferredEmail = user === null || user === void 0 ? void 0 : (_user$prefersEmail = user.prefersEmail) === null || _user$prefersEmail === void 0 ? void 0 : _user$prefersEmail.email;
  let preferredEmailClerkId = user === null || user === void 0 ? void 0 : (_user$prefersEmail2 = user.prefersEmail) === null || _user$prefersEmail2 === void 0 ? void 0 : _user$prefersEmail2.clerkEmailId;

  if (!preferredEmail) {
    const firstEmailInEmails = user === null || user === void 0 ? void 0 : user.emails[0];
    preferredEmail = firstEmailInEmails === null || firstEmailInEmails === void 0 ? void 0 : firstEmailInEmails.email;
    preferredEmailClerkId = firstEmailInEmails === null || firstEmailInEmails === void 0 ? void 0 : firstEmailInEmails.clerkEmailId;
    console.log("setting a preffered email", firstEmailInEmails);

    if (firstEmailInEmails) {
      promises.push(db__WEBPACK_IMPORTED_MODULE_2__.default.user.update({
        where: {
          id: userId
        },
        data: {
          prefersEmailId: firstEmailInEmails.id
        }
      }));
    }
  }

  const stripeUserObject = {
    email: preferredEmail,
    metadata: {
      internalUserId: userId
    }
  };

  if (user !== null && user !== void 0 && user.name) {
    stripeUserObject.name = user.name;
  }

  console.log("created a stripe customer with object", stripeUserObject);
  promises.push(integrations_stripe__WEBPACK_IMPORTED_MODULE_3__/* .default.customers.create */ .Z.customers.create(stripeUserObject));

  if (preferredEmailClerkId) {
    console.log("queued a welcome email");
    promises.push(_send_email__WEBPACK_IMPORTED_MODULE_5__.default.enqueue({
      clerkEmailId: preferredEmailClerkId,
      type: "user-welcome",
      data: {
        user
      }
    }));
  }

  await Promise.all(promises); // create stripe user
})));

/***/ }),

/***/ 7798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ defaultUserSelect)
/* harmony export */ });
const defaultUserSelect = {
  id: true,
  name: true,
  emails: {
    select: {
      email: true,
      id: true,
      clerkEmailId: true
    }
  },
  roles: true,
  memberships: {
    select: {
      role: true,
      organization: {
        select: {
          id: true,
          slug: true,
          name: true,
          description: true,
          profileMedia: true,
          platformFeatures: true,
          privateMetadata: true,
          domains: {
            select: {
              id: true,
              domain: true
            }
          },
          defaultDomain: true,
          externalProfiles: true
        }
      }
    }
  }
};

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