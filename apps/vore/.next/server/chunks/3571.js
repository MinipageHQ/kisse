"use strict";
exports.id = 3571;
exports.ids = [3571];
exports.modules = {

/***/ 3571:
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
/* harmony import */ var app_organizations_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2197);
/* harmony import */ var app_api_jobs_organization_created__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4669);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(app_organizations_validations__WEBPACK_IMPORTED_MODULE_3__/* .CreateOrganizationWithInviteCodeSchema */ .Pq), async ({
  inviteCode,
  name,
  slug,
  defaultDomainId
}, ctx) => {
  const isValidInviteCode = await db__WEBPACK_IMPORTED_MODULE_2__.default.inviteCode.findFirst({
    where: {
      code: inviteCode,
      userId: null
    }
  });

  if (!isValidInviteCode) {
    throw new Error("INVALID_CODE");
  }

  const user = await db__WEBPACK_IMPORTED_MODULE_2__.default.user.update({
    where: {
      id: ctx.session.userId
    },
    data: {
      roles: ["CREATOR", "USER"],
      memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: name || "a new creator",
              slug,
              defaultDomainId
            }
          }
        }
      }
    },
    include: {
      memberships: true
    }
  });
  const createdMembership = user.memberships[0];
  await Promise.all([db__WEBPACK_IMPORTED_MODULE_2__.default.inviteCode.update({
    where: {
      id: isValidInviteCode.id
    },
    data: {
      userId: user.id,
      usedAt: new Date()
    }
  }), ctx.session.$setPublicData({
    roles: [...user.roles, createdMembership.role],
    defaultOrgId: createdMembership.organizationId
  }), app_api_jobs_organization_created__WEBPACK_IMPORTED_MODULE_4__.default.enqueue({
    organizationId: createdMembership.organizationId
  })]);
  return user;
}), {
  "resolverName": "createOrganization",
  "resolverType": "mutation",
  "routePath": "/api/rpc/createOrganization"
}));

/***/ })

};
;