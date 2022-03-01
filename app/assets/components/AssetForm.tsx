import { Group } from "@mantine/core"
import { Form, FormProps } from "app/core/components/Form"
import LabeledNumberField from "app/core/components/LabeledNumberField"
import LabeledTextAreaField from "app/core/components/LabeledTextAreaField"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
import AssetCategorySelector from "./AssetCategorySelector"
import LabeledPriceField from "./AssetPriceField"
import AssetTypeSelector from "./AssetTypeSelector"
export { FORM_ERROR } from "app/core/components/Form"

export function AssetForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <Group position="center" direction="column" grow>
        <LabeledTextField
          name="name"
          label="Name"
          placeholder="Name"
          helpText="Keep it short and clear, this appears on invoices."
        />
        <LabeledTextAreaField name="description" label="Description" placeholder="Description" />
        <LabeledPriceField
          name="price"
          label="Price"
          placeholder="Name"
          helpText="We only support U.S. Dollars at the moment"
        />

        <AssetTypeSelector name="assetTypeId" />
        <AssetCategorySelector name="assetCategoryId" />
      </Group>
    </Form>
  )
}
