import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"
import linkTypes from "app/links/link-types"

import { useMemo } from "react"
import { useRouter, useQuery, useRouterQuery } from "blitz"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"
import LabeledLinkSlugField from "app/links/components/LabeledLinkSlugField"
import { Container } from "@mantine/core"

export default function OrganizationCustomizeForm<S extends z.ZodType<any, any>>(
  props: FormProps<S>
) {
  const [currentOrganization] = useQuery(getCurrentOrganization, {})

  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="name" placeholder="name" type="url" />
    </Form>
  )
}
