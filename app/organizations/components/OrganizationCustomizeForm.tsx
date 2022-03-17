import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

import { useRouter, useQuery, useRouterQuery } from "blitz"
import getCurrentOrganization from "app/organizations/queries/getCurrentOrganization"

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
