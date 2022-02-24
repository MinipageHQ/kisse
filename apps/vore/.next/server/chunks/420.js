"use strict";
exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3136);
/* harmony import */ var next_data_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_data_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9986);
/* harmony import */ var next_stdlib_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9438);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_data_client__WEBPACK_IMPORTED_MODULE_0__.buildRpcResolver)(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.pipe(next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.zod(_validations__WEBPACK_IMPORTED_MODULE_2__/* .CreateAssetSchema */ .k), next_stdlib_server__WEBPACK_IMPORTED_MODULE_1__.resolver.authorize(), async ({
  name
}, {
  session: {
    defaultOrgId
  }
}) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  // const asset = await db.asset.create({ data: { name, organizationId: defaultOrgId as string } })
  // return asset
  return {
    id: "test"
  };
}), {
  "resolverName": "createAsset",
  "resolverType": "mutation",
  "routePath": "/api/rpc/createAsset"
}));

/***/ }),

/***/ 9438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ CreateAssetSchema)
/* harmony export */ });
/* unused harmony export UpdateAssetSchema */
/* harmony import */ var db_zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9454);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7242);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_1__);


const CreateAsset = zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
  organizationId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().cuid().optional(),
  name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().max(255),
  description: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().max(3000),
  status: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum(["DRAFT", "ARCHIVED", "LIVE", "SUSPENDED"]),
  categoryId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().cuid().optional(),
  assetTypeId: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().cuid().optional(),
  quantity: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(-1).default(-1),
  price: zod__WEBPACK_IMPORTED_MODULE_1__.z.number().min(0),
  currency: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum(["USD", "EUR", "TRY"]).default("USD")
});
const CreateAssetSchema = db_zod__WEBPACK_IMPORTED_MODULE_0__/* .AssetModel.pick */ .xG.pick({
  organizationId: true,
  name: true,
  description: true
}).extend({// inviteCode: z.string().min(1).max(24),
}).partial({});
const UpdateAssetSchema = db_zod__WEBPACK_IMPORTED_MODULE_0__/* .AssetModel.pick */ .xG.pick({}).extend({// inviteCode: z.string().min(1).max(24),
}).partial({});

/***/ })

};
;