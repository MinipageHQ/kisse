"use strict";
exports.id = 9454;
exports.ids = [9454];
exports.modules = {

/***/ 9454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xG": () => (/* reexport */ AssetModel),
  "KW": () => (/* reexport */ LinkModel),
  "wz": () => (/* reexport */ OrganizationModel),
  "lg": () => (/* reexport */ RelatedApiKeyModel),
  "Yp": () => (/* reexport */ RelatedAssetCategoryModel),
  "oU": () => (/* reexport */ RelatedAssetModel),
  "nO": () => (/* reexport */ RelatedAssetTypeModel),
  "hX": () => (/* reexport */ RelatedAuditLogModel),
  "fJ": () => (/* reexport */ RelatedDocumentModel),
  "ig": () => (/* reexport */ RelatedDomainModel),
  "eo": () => (/* reexport */ RelatedEmailModel),
  "F3": () => (/* reexport */ RelatedExternalProfilesModel),
  "oH": () => (/* reexport */ RelatedInviteCodeModel),
  "rG": () => (/* reexport */ RelatedLinkModel),
  "tE": () => (/* reexport */ RelatedMembershipModel),
  "de": () => (/* reexport */ RelatedOrderModel),
  "_7": () => (/* reexport */ RelatedOrganizationModel),
  "Wl": () => (/* reexport */ RelatedSessionModel),
  "xA": () => (/* reexport */ RelatedTokenModel),
  "PE": () => (/* reexport */ RelatedTransactionModel),
  "Kt": () => (/* reexport */ RelatedUserModel),
  "jK": () => (/* reexport */ RelatedWebhookModel)
});

// UNUSED EXPORTS: ApiKeyModel, AssetCategoryModel, AssetTypeModel, AuditLogModel, DocumentModel, DomainModel, EmailModel, ExternalProfilesModel, InviteCodeModel, MembershipModel, OrderModel, SessionModel, TokenModel, TransactionModel, UserModel, WebhookModel

// EXTERNAL MODULE: external "zod"
var external_zod_ = __webpack_require__(7242);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(212);
;// CONCATENATED MODULE: ./db/zod/organization.ts


 // Helper schema for JSON fields

const literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const jsonSchema = external_zod_.lazy(() => external_zod_.union([literalSchema, external_zod_.array(jsonSchema), external_zod_.record(jsonSchema)]));
const OrganizationModel = external_zod_.object({
  id: external_zod_.string(),
  name: external_zod_.string(),
  slug: external_zod_.string().nullish(),
  description: external_zod_.string().nullish(),
  profileMedia: jsonSchema,
  metadata: jsonSchema,
  privateMetadata: jsonSchema,
  stripeSellerId: external_zod_.string().nullish(),
  stripeCustomerId: external_zod_.string().nullish(),
  defaultDomainId: external_zod_.string().nullish(),
  platformFeatures: external_zod_.nativeEnum(client_.PlatformFeatures).array()
});

/**
 * RelatedOrganizationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedOrganizationModel = external_zod_.lazy(() => OrganizationModel.extend({
  memberships: RelatedMembershipModel.array(),
  documents: RelatedDocumentModel.array(),
  assets: RelatedAssetModel.array(),
  orders: RelatedOrderModel.array(),
  transactions: RelatedTransactionModel.array(),
  links: RelatedLinkModel.array(),
  defaultDomain: RelatedDomainModel.nullish(),
  domains: RelatedDomainModel.array(),
  externalProfiles: RelatedExternalProfilesModel.array(),
  ApiKey: RelatedApiKeyModel.array(),
  AuditLog: RelatedAuditLogModel.array(),
  Webhook: RelatedWebhookModel.array(),
  AssetCategory: RelatedAssetCategoryModel.array()
}));
;// CONCATENATED MODULE: ./db/zod/membership.ts



const MembershipModel = external_zod_.object({
  id: external_zod_.string(),
  role: external_zod_.nativeEnum(client_.MembershipRole),
  organizationId: external_zod_.string(),
  userId: external_zod_.string().nullish(),
  invitedName: external_zod_.string().nullish(),
  invitedEmail: external_zod_.string().nullish()
});

/**
 * RelatedMembershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedMembershipModel = external_zod_.lazy(() => MembershipModel.extend({
  organization: RelatedOrganizationModel,
  user: RelatedUserModel.nullish()
}));
;// CONCATENATED MODULE: ./db/zod/invitecode.ts


const InviteCodeModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  usedAt: external_zod_.date().nullish(),
  name: external_zod_.string().nullish(),
  referrer: external_zod_.string(),
  code: external_zod_.string(),
  userId: external_zod_.string().nullish()
});

/**
 * RelatedInviteCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedInviteCodeModel = external_zod_.lazy(() => InviteCodeModel.extend({
  usedBy: RelatedUserModel.nullish()
}));
;// CONCATENATED MODULE: ./db/zod/user.ts


 // Helper schema for JSON fields

const user_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const user_jsonSchema = external_zod_.lazy(() => external_zod_.union([user_literalSchema, external_zod_.array(user_jsonSchema), external_zod_.record(user_jsonSchema)]));
const UserModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  name: external_zod_.string().nullish(),
  hashedPassword: external_zod_.string().nullish(),
  prefersEmailId: external_zod_.string().nullish(),
  notificationEmail: external_zod_.nativeEnum(client_.NotificationEmail),
  countryCode: external_zod_.string(),
  timezone: external_zod_.string(),
  roles: external_zod_.nativeEnum(client_.GlobalRole).array(),
  active: external_zod_.boolean(),
  metadata: user_jsonSchema,
  privateMetadata: user_jsonSchema,
  clerkId: external_zod_.string().nullish(),
  clerkDataSnapshot: user_jsonSchema,
  stripeCustomerId: external_zod_.string().nullish()
});

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedUserModel = external_zod_.lazy(() => UserModel.extend({
  prefersEmail: RelatedEmailModel.nullish(),
  emails: RelatedEmailModel.array(),
  tokens: RelatedTokenModel.array(),
  sessions: RelatedSessionModel.array(),
  memberships: RelatedMembershipModel.array(),
  inviteCodes: RelatedInviteCodeModel.array(),
  ApiKey: RelatedApiKeyModel.array(),
  AuditLog: RelatedAuditLogModel.array()
}));
;// CONCATENATED MODULE: ./db/zod/email.ts


const EmailModel = external_zod_.object({
  createdAt: external_zod_.date(),
  email: external_zod_.string(),
  emailSafe: external_zod_.string(),
  id: external_zod_.string(),
  isVerified: external_zod_.boolean(),
  updatedAt: external_zod_.date(),
  userId: external_zod_.string(),
  clerkEmailId: external_zod_.string().nullish()
});

/**
 * RelatedEmailModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedEmailModel = external_zod_.lazy(() => EmailModel.extend({
  user: RelatedUserModel,
  users: RelatedUserModel.array()
}));
;// CONCATENATED MODULE: ./db/zod/session.ts


const SessionModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  expiresAt: external_zod_.date().nullish(),
  handle: external_zod_.string(),
  hashedSessionToken: external_zod_.string().nullish(),
  antiCSRFToken: external_zod_.string().nullish(),
  publicData: external_zod_.string().nullish(),
  privateData: external_zod_.string().nullish(),
  userId: external_zod_.string().nullish()
});

/**
 * RelatedSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedSessionModel = external_zod_.lazy(() => SessionModel.extend({
  user: RelatedUserModel.nullish()
}));
;// CONCATENATED MODULE: ./db/zod/token.ts


const TokenModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  hashedToken: external_zod_.string(),
  type: external_zod_.string(),
  expiresAt: external_zod_.date(),
  sentTo: external_zod_.string(),
  userId: external_zod_.string()
});

/**
 * RelatedTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedTokenModel = external_zod_.lazy(() => TokenModel.extend({
  user: RelatedUserModel
}));
;// CONCATENATED MODULE: ./db/zod/link.ts


 // Helper schema for JSON fields

const link_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const link_jsonSchema = external_zod_.lazy(() => external_zod_.union([link_literalSchema, external_zod_.array(link_jsonSchema), external_zod_.record(link_jsonSchema)]));
const LinkModel = external_zod_.object({
  id: external_zod_.string().cuid().optional(),
  slug: external_zod_.string(),
  type: external_zod_.nativeEnum(client_.LinkType),
  target: external_zod_.string().url({
    message: "Target must be a valid URL"
  }),
  provider: external_zod_.nativeEnum(client_.LinkProvider).nullish(),
  organizationId: external_zod_.string(),
  domainId: external_zod_.string(),
  metadata: link_jsonSchema,
  privateMetadata: link_jsonSchema,
  statsSnapshot: link_jsonSchema,
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date()
});

/**
 * RelatedLinkModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedLinkModel = external_zod_.lazy(() => LinkModel.extend({
  organization: RelatedOrganizationModel,
  domain: RelatedDomainModel
}));
;// CONCATENATED MODULE: ./db/zod/transaction.ts


 // Helper schema for JSON fields

const transaction_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const transaction_jsonSchema = external_zod_.lazy(() => external_zod_.union([transaction_literalSchema, external_zod_.array(transaction_jsonSchema), external_zod_.record(transaction_jsonSchema)]));
const TransactionModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  organizationId: external_zod_.string(),
  assetSnapshot: transaction_jsonSchema,
  assetTypeId: external_zod_.string(),
  assetType: transaction_jsonSchema,
  status: external_zod_.string(),
  statusHistory: transaction_jsonSchema,
  metadata: transaction_jsonSchema,
  privateMetadata: transaction_jsonSchema,
  cancellationReason: external_zod_.string(),
  ownerId: external_zod_.number().int(),
  takerId: external_zod_.number().int(),
  quantity: external_zod_.number().int(),
  startDate: external_zod_.date(),
  endDate: external_zod_.date(),
  duration: transaction_jsonSchema,
  timeunit: external_zod_.string(),
  unitPrice: external_zod_.number(),
  value: external_zod_.number(),
  ownerAmount: external_zod_.number(),
  takerAmount: external_zod_.number(),
  platformAmount: external_zod_.number(),
  ownerFees: external_zod_.number(),
  takerFees: external_zod_.number(),
  currency: external_zod_.nativeEnum(client_.Currency),
  completedAt: external_zod_.date(),
  cancelledAt: external_zod_.date(),
  assetId: external_zod_.string()
});

/**
 * RelatedTransactionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedTransactionModel = external_zod_.lazy(() => TransactionModel.extend({
  organization: RelatedOrganizationModel,
  asset: RelatedAssetModel
}));
;// CONCATENATED MODULE: ./db/zod/order.ts


 // Helper schema for JSON fields

const order_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const order_jsonSchema = external_zod_.lazy(() => external_zod_.union([order_literalSchema, external_zod_.array(order_jsonSchema), external_zod_.record(order_jsonSchema)]));
const OrderModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  organizationId: external_zod_.string(),
  lines: order_jsonSchema,
  moves: order_jsonSchema,
  amountDue: external_zod_.number(),
  amountPaid: external_zod_.number(),
  amountRemaining: external_zod_.number(),
  currency: external_zod_.nativeEnum(client_.Currency),
  payerId: external_zod_.string(),
  paymentAttempted: external_zod_.number().int(),
  metadata: order_jsonSchema,
  platformMetadata: order_jsonSchema
});

/**
 * RelatedOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedOrderModel = external_zod_.lazy(() => OrderModel.extend({
  organization: RelatedOrganizationModel
}));
;// CONCATENATED MODULE: ./db/zod/webhook.ts


const WebhookModel = external_zod_.object({
  contentType: external_zod_.string(),
  createdAt: external_zod_.date(),
  event: external_zod_.string(),
  id: external_zod_.string(),
  isActive: external_zod_.boolean(),
  lastFiredAt: external_zod_.date().nullish(),
  organizationId: external_zod_.string(),
  secret: external_zod_.string().nullish(),
  updatedAt: external_zod_.date(),
  url: external_zod_.string()
});

/**
 * RelatedWebhookModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedWebhookModel = external_zod_.lazy(() => WebhookModel.extend({
  organization: RelatedOrganizationModel
}));
;// CONCATENATED MODULE: ./db/zod/asset.ts


 // Helper schema for JSON fields

const asset_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const asset_jsonSchema = external_zod_.lazy(() => external_zod_.union([asset_literalSchema, external_zod_.array(asset_jsonSchema), external_zod_.record(asset_jsonSchema)]));
const AssetModel = external_zod_.object({
  id: external_zod_.string(),
  name: external_zod_.string().nullish(),
  description: external_zod_.string().nullish(),
  status: external_zod_.nativeEnum(client_.AssetStatus),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  organizationId: external_zod_.string(),
  assetCategoryId: external_zod_.string().nullish(),
  assetTypeId: external_zod_.string(),
  price: external_zod_.number(),
  currency: external_zod_.nativeEnum(client_.Currency),
  metadata: asset_jsonSchema,
  quantity: external_zod_.number().int()
});

/**
 * RelatedAssetModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedAssetModel = external_zod_.lazy(() => AssetModel.extend({
  organization: RelatedOrganizationModel,
  assetCategory: RelatedAssetCategoryModel.nullish(),
  assetType: RelatedAssetTypeModel,
  transactions: RelatedTransactionModel.array()
}));
;// CONCATENATED MODULE: ./db/zod/assettype.ts


 // Helper schema for JSON fields

const assettype_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const assettype_jsonSchema = external_zod_.lazy(() => external_zod_.union([assettype_literalSchema, external_zod_.array(assettype_jsonSchema), external_zod_.record(assettype_jsonSchema)]));
const AssetTypeModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  timeBased: external_zod_.boolean(),
  infiniteStock: external_zod_.boolean(),
  name: external_zod_.string(),
  pricing: assettype_jsonSchema,
  timing: assettype_jsonSchema,
  unavailableWhen: assettype_jsonSchema,
  transactionProcess: assettype_jsonSchema,
  isDefault: external_zod_.boolean(),
  active: external_zod_.boolean(),
  requiredFeatures: external_zod_.nativeEnum(client_.PlatformFeatures).array(),
  metadata: assettype_jsonSchema,
  privateMetadata: assettype_jsonSchema
});

/**
 * RelatedAssetTypeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedAssetTypeModel = external_zod_.lazy(() => AssetTypeModel.extend({
  assets: RelatedAssetModel.array()
}));
;// CONCATENATED MODULE: ./db/zod/assetcategory.ts

 // Helper schema for JSON fields

const assetcategory_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const assetcategory_jsonSchema = external_zod_.lazy(() => external_zod_.union([assetcategory_literalSchema, external_zod_.array(assetcategory_jsonSchema), external_zod_.record(assetcategory_jsonSchema)]));
const AssetCategoryModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  name: external_zod_.string(),
  metadata: assetcategory_jsonSchema,
  privateMetadata: assetcategory_jsonSchema,
  organizationId: external_zod_.string().nullish()
});

/**
 * RelatedAssetCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedAssetCategoryModel = external_zod_.lazy(() => AssetCategoryModel.extend({
  assets: RelatedAssetModel.array(),
  organization: RelatedOrganizationModel.nullish()
}));
;// CONCATENATED MODULE: ./db/zod/domain.ts


 // Helper schema for JSON fields

const domain_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const domain_jsonSchema = external_zod_.lazy(() => external_zod_.union([domain_literalSchema, external_zod_.array(domain_jsonSchema), external_zod_.record(domain_jsonSchema)]));
const DomainModel = external_zod_.object({
  id: external_zod_.string(),
  domain: external_zod_.string(),
  vercelId: external_zod_.string().nullish(),
  status: external_zod_.string().nullish(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  organizationId: external_zod_.string().nullish(),
  provider: external_zod_.nativeEnum(client_.DomainProvider),
  vercelDataSnapshot: domain_jsonSchema,
  isVerified: external_zod_.boolean(),
  verificationCode: external_zod_.string().nullish()
});

/**
 * RelatedDomainModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedDomainModel = external_zod_.lazy(() => DomainModel.extend({
  organization: RelatedOrganizationModel.nullish(),
  links: RelatedLinkModel.array(),
  organizations: RelatedOrganizationModel.array()
}));
;// CONCATENATED MODULE: ./db/zod/document.ts

 // Helper schema for JSON fields

const document_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const document_jsonSchema = external_zod_.lazy(() => external_zod_.union([document_literalSchema, external_zod_.array(document_jsonSchema), external_zod_.record(document_jsonSchema)]));
const DocumentModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  organizationId: external_zod_.string(),
  content: document_jsonSchema,
  metadata: document_jsonSchema,
  privateMetadata: document_jsonSchema
});

/**
 * RelatedDocumentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedDocumentModel = external_zod_.lazy(() => DocumentModel.extend({
  organization: RelatedOrganizationModel
}));
;// CONCATENATED MODULE: ./db/zod/apikey.ts

 // Helper schema for JSON fields

const apikey_literalSchema = external_zod_.union([external_zod_.string(), external_zod_.number(), external_zod_.boolean()]);
const apikey_jsonSchema = external_zod_.lazy(() => external_zod_.union([apikey_literalSchema, external_zod_.array(apikey_jsonSchema), external_zod_.record(apikey_jsonSchema)]));
const ApiKeyModel = external_zod_.object({
  id: external_zod_.string(),
  createdAt: external_zod_.date(),
  description: external_zod_.string().nullish(),
  ipRestrictions: apikey_jsonSchema,
  apiKey: external_zod_.string(),
  name: external_zod_.string().nullish(),
  organizationId: external_zod_.string().nullish(),
  referrerRestrictions: apikey_jsonSchema,
  scopes: apikey_jsonSchema,
  updatedAt: external_zod_.date(),
  userId: external_zod_.string().nullish()
});

/**
 * RelatedApiKeyModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedApiKeyModel = external_zod_.lazy(() => ApiKeyModel.extend({
  auditLogs: RelatedAuditLogModel.array(),
  organization: RelatedOrganizationModel.nullish(),
  user: RelatedUserModel.nullish()
}));
;// CONCATENATED MODULE: ./db/zod/auditlog.ts


const AuditLogModel = external_zod_.object({
  createdAt: external_zod_.date(),
  event: external_zod_.string(),
  rawEvent: external_zod_.string(),
  id: external_zod_.string(),
  organizationId: external_zod_.string().nullish(),
  updatedAt: external_zod_.date(),
  userId: external_zod_.string().nullish(),
  apiKeyId: external_zod_.string().nullish(),
  ipAddress: external_zod_.string().nullish(),
  userAgent: external_zod_.string().nullish(),
  city: external_zod_.string().nullish(),
  region: external_zod_.string().nullish(),
  timezone: external_zod_.string().nullish(),
  countryCode: external_zod_.string().nullish(),
  browser: external_zod_.string().nullish(),
  operatingSystem: external_zod_.string().nullish()
});

/**
 * RelatedAuditLogModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedAuditLogModel = external_zod_.lazy(() => AuditLogModel.extend({
  organization: RelatedOrganizationModel.nullish(),
  user: RelatedUserModel.nullish(),
  apiKey: RelatedApiKeyModel.nullish()
}));
;// CONCATENATED MODULE: ./db/zod/externalprofiles.ts



const ExternalProfilesModel = external_zod_.object({
  id: external_zod_.string(),
  externalId: external_zod_.string(),
  service: external_zod_.nativeEnum(client_.ExternalProfileService),
  createdAt: external_zod_.date(),
  updatedAt: external_zod_.date(),
  verificationLastCheckedAt: external_zod_.date(),
  verificationPassed: external_zod_.string(),
  verificationEntity: external_zod_.string(),
  organizationId: external_zod_.string()
});

/**
 * RelatedExternalProfilesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
const RelatedExternalProfilesModel = external_zod_.lazy(() => ExternalProfilesModel.extend({
  organization: RelatedOrganizationModel
}));
;// CONCATENATED MODULE: ./db/zod/index.ts




















/***/ })

};
;