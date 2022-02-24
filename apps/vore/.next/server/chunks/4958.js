"use strict";
exports.id = 4958;
exports.ids = [4958];
exports.modules = {

/***/ 4958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3659);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var quirrel_blitz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_server_utils__WEBPACK_IMPORTED_MODULE_0__/* .withFixNodeFileTrace */ .sw)((0,quirrel_blitz__WEBPACK_IMPORTED_MODULE_2__.Queue)("api/_/jobs/handle-clerk-event", // the path of this API route
async ({
  data,
  type
}) => {
  switch (type) {
    case "user.created":
      const user = await db__WEBPACK_IMPORTED_MODULE_1__.default.user.create({
        data: {
          // username: data.username,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          // emails: {
          // },
          privateMetadata: {
            isClerk: true,
            clerk: {}
          }
        }
      });
      break;

    default:
  }

  console.log(`Recieved a Clerk event: ${JSON.stringify(data, null, 2)}`);
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

/***/ })

};
;