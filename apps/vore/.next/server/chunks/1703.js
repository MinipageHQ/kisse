"use strict";
exports.id = 1703;
exports.ids = [1703];
exports.modules = {

/***/ 6602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pf": () => (/* binding */ SsoWithClerkInput),
/* harmony export */   "rN": () => (/* binding */ SyncWithClerkInput),
/* harmony export */   "m3": () => (/* binding */ Login)
/* harmony export */ });
/* unused harmony exports organizationName, email, inviteCode, password, Signup, ForgotPassword, ResetPassword, ChangePassword */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);

const organizationName = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().transform(str => str.trim());
const email = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email().transform(str => str.toLowerCase().trim());
const inviteCode = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().transform(str => str.toUpperCase().trim());
const password = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(8).max(100).transform(str => str.trim());
const Signup = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email,
  password
});
const SsoWithClerkInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  sessionId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const SyncWithClerkInput = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  clerkUserId: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
});
const Login = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email,
  password
});
const ForgotPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  email
});
const ResetPassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  password: password,
  passwordConfirmation: password,
  token: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
}).refine(data => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"] // set the path of the error

});
const ChangePassword = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
  currentPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
  newPassword: password
});

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