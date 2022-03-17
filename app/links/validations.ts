import { LinkModel } from "db/zod"
import isURL from "validator/lib/isURL"
import { ZodObject } from "zod"

// Target has different validations for different types of links
// redirect:
const wrapLinkInput = (object: ZodObject<any>) =>
  object.refine(
    (data) => {
      const target = data.target

      if (target && !isURL(target)) {
        return false
      }

      console.log("dat", { data }, data.type === "embed" && data.provider === "notion")
      if (data.type === "embed" && data.provider === "notion") {
        const validNotionLink = target.includes(".notion.") // @TODO: this is bad and should be fixed
        return validNotionLink
      }

      return false
    },
    (data) => ({
      path: ["target"],
      message: "Target URL is not recognized.",
    })
  )

export const CreateLinkInput = wrapLinkInput(
  LinkModel.pick({
    slug: true,
    type: true,
    target: true,
    provider: true,
    metadata: true,
    domainId: true,
  }).partial({ metadata: true })
)

export const UpdateLinkInput = wrapLinkInput(
  LinkModel.pick({
    id: true,
    slug: true,
    target: true,
    domainId: true,
  })
)
