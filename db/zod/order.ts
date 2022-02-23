import * as z from "zod"
import { Currency } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
)

export const OrderModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.string(),
  lines: jsonSchema,
  moves: jsonSchema,
  amountDue: z.number(),
  amountPaid: z.string().cuid(),
  amountRemaining: z.number(),
  currency: z.nativeEnum(Currency),
  payerId: z.string(),
  paymentAttempted: z.number().int(),
  metadata: jsonSchema,
  platformMetadata: jsonSchema,
})

export interface CompleteOrder extends z.infer<typeof OrderModel> {
  organization: CompleteOrganization
}

/**
 * RelatedOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderModel: z.ZodSchema<CompleteOrder> = z.lazy(() =>
  OrderModel.extend({
    organization: RelatedOrganizationModel,
  })
)
