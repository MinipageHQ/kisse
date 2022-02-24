"use strict";
exports.id = 4276;
exports.ids = [4276];
exports.modules = {

/***/ 4276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3659);
/* harmony import */ var app_auth_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6602);
/* harmony import */ var _clerk_clerk_sdk_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8670);
/* harmony import */ var _clerk_clerk_sdk_node__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_clerk_sdk_node__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7798);
/* harmony import */ var app_api_jobs_user_created__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8575);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function getClerkUser(userId) {
  return _clerk_clerk_sdk_node__WEBPACK_IMPORTED_MODULE_4___default().users.getUser(userId);
}

function convertClerkUserObjectToInternalUserObject(clerkUser) {
  const {
    id,
    username,
    firstName,
    lastName
  } = clerkUser;
  const name = `${firstName} ${lastName}`.trim(); // 'id',
  // 'username',
  // 'firstName',
  // 'lastName',
  // 'gender',
  // 'birthday',
  // 'profileImageUrl',
  // 'primaryEmailAddressId',
  // 'primaryEmailAddressId',
  // 'primaryPhoneNumberId',
  // 'primaryWeb3WalletId',
  // 'passwordEnabled',
  // 'twoFactorEnabled',
  // 'passwordEnabled',
  // 'passwordEnabled',
  // 'passwordEnabled',
  // 'twoFactorEnabled',
  // 'publicMetadata',
  // 'privateMetadata',
  // 'unsafeMetadata',
  // 'createdAt',
  // 'updatedAt',

  const emails = {
    connectOrCreate: clerkUser.emailAddresses.map(({
      emailAddress = undefined,
      id = undefined
    }) => ({
      where: {
        clerkEmailId: id
      },
      create: {
        email: emailAddress,
        emailSafe: emailAddress,
        clerkEmailId: id
      }
    }))
  };
  const commonData = {
    name,
    clerkDataSnapshot: {
      publicMetadata: clerkUser.publicMetadata,
      privateMetadata: clerkUser.privateMetadata,
      unsafeMetadata: clerkUser.unsafeMetadata,
      gender: clerkUser.gender,
      birthday: clerkUser.birthday,
      profileImageUrl: clerkUser.profileImageUrl
    },
    emails
  };
  return {
    where: {
      clerkId: clerkUser.id
    },
    create: _objectSpread(_objectSpread({
      clerkId: clerkUser.id
    }, commonData), {}, {
      roles: ["USER"]
    }),
    update: _objectSpread({}, commonData)
  };
} //@TODO: check if the request comes from an internal service


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(app_auth_validations__WEBPACK_IMPORTED_MODULE_3__/* .SyncWithClerkInput */ .rN), async ({
  clerkUserId
}, ctx) => {
  const [clerkUser, doesExists] = await Promise.all([getClerkUser(clerkUserId), db__WEBPACK_IMPORTED_MODULE_2__.default.user.count({
    where: {
      clerkId: clerkUserId
    }
  }).then(count => count !== 0)]);
  const upserArgs = convertClerkUserObjectToInternalUserObject(clerkUser);
  const user = await db__WEBPACK_IMPORTED_MODULE_2__.default.user.upsert(_objectSpread(_objectSpread({}, upserArgs), {}, {
    select: _objectSpread({}, _defaults__WEBPACK_IMPORTED_MODULE_5__/* .defaultUserSelect */ .H)
  }));

  if (doesExists === false) {
    // it's a new user
    await app_api_jobs_user_created__WEBPACK_IMPORTED_MODULE_6__.default.enqueue({
      userId: user.id
    });
  }

  return user;
}), {
  "resolverName": "syncWithClerk",
  "resolverType": "mutation",
  "routePath": "/api/rpc/syncWithClerk"
}));

/***/ })

};
;