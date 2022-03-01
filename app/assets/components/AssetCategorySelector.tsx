import { Group, Avatar, Text, Select } from "@mantine/core"
import { useQuery } from "blitz"
import { forwardRef } from "react"
import { useField } from "react-final-form"
import getAssetCategories from "../queries/getAssetCategories"

// !important: Forwarding ref is required
const SelectItem = forwardRef(
  (
    { image, label, description, ...others }: { image: string; label: string; description: string },
    ref
  ) => (
    <div ref={ref as any} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
)

export default function AssetTypeSelector({ name }: { name: string }) {
  const [{ assetCategories }] = useQuery(getAssetCategories, {})
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name, {
    parse: (v) => (v === "" ? null : v),
    // ...fieldProps,
  })

  const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

  const data = assetCategories.map((assetCategory) => {
    const metadata = assetCategory.metadata as any
    return {
      label: metadata.label || assetCategory.name,
      description: metadata.description,
      key: assetCategory.id,
      value: assetCategory.id,
    }
  })
  return (
    <Select
      label="Category"
      error={normalizedError}
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data as any}
      searchable
      maxDropdownHeight={400}
      nothingFound="Can't find that boss"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description?.toLowerCase().includes(value.toLowerCase().trim())
      }
      {...input}
    />
  )
}
