import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { useField, UseFieldConfig } from "react-final-form"

export interface LabeledMediaFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}
import Uppy from "@uppy/core"
import Webcam from "@uppy/webcam"
import Instagram from "@uppy/instagram"
import Url from "@uppy/url"
import Dropbox from "@uppy/dropbox"
import GoogleDrive from "@uppy/google-drive"
import Facebook from "@uppy/facebook"
import Zoom from "@uppy/zoom"
import DragDrop from "@uppy/drag-drop"
import UppyDashboard from "@uppy/dashboard"

import ImageEditor from "@uppy/image-editor"
import Transloadit from "@uppy/transloadit"
import "@uppy/core/dist/style.css"
import "@uppy/dashboard/dist/style.css"
import "@uppy/webcam/dist/style.css"

import { DashboardModal } from "@uppy/react"
import React from "react"

const defOpts = {
  companionUrl: Transloadit.COMPANION,
  companionAllowedHosts: Transloadit.COMPANION_PATTERN,
}

function Uploader(props) {
  const { name } = props
  const uppy = React.useMemo(
    () =>
      new Uppy()
        .use(Transloadit, {
          params: {
            auth: {
              key: process.env.NEXT_PUBLIC_TRANSLOADIT_AUTH_KEY,
            },
            // It’s more secure to use a template_id and enable
            // Signature Authentication
            steps: {
              resize: {
                robot: "/image/resize",
                width: 250,
                height: 250,
                resize_strategy: "fit",
                text: [
                  {
                    text: "© Transloadit.com",
                    size: 12,
                    font: "Ubuntu",
                    color: "#eeeeee",
                    valign: "bottom",
                    align: "right",
                    x_offset: 16,
                    y_offset: -10,
                  },
                ],
              },
            },
          },
          waitForEncoding: true,
        })
        .use(Instagram, defOpts)
        .use(Webcam)
        .use(DragDrop)
        .use(Dropbox, defOpts)
        .use(GoogleDrive, defOpts)
        .use(Facebook, defOpts)
        .use(Zoom, defOpts)
        .use(Url, defOpts)
        .use(ImageEditor, defOpts)
        .on("transloadit:result", (stepName, result) => {
          console.log(result, uppy.getFile(result.localId))
          if (props.onTransloaditResult) {
            props.onTransloaditResult(uppy.getFile(result.localId))
          }
        }),
    [props]
  )
  React.useEffect(() => () => uppy.close(), [uppy])

  return (
    <DashboardModal
      uppy={uppy}
      open
      theme="dark"
      proudlyDisplayPoweredByUppy={false}
      plugins={[
        "Webcam",
        "Instagram",
        "DragDrop",
        "Dropbox",
        "Facebook",
        "Zoom",
        "Url",
        "ImageEditor",
        "GoogleDrive",
      ]}
      {...props}
    />
  )
}

export const LabeledMediaField = forwardRef<HTMLInputElement, LabeledMediaFieldProps>(
  ({ name, label, outerProps, fieldProps, labelProps, ...props }, ref) => {
    const {
      input,

      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse:
        props.type === "number"
          ? (Number as any)
          : // Converting `""` to `null` ensures empty values will be set to null in the DB
            (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps}>
        <label {...labelProps}>
          {label}
          <Uploader />
          <input {...input} disabled={submitting} {...props} ref={ref} />
        </label>

        {touched && normalizedError && (
          <div role="alert" style={{ color: "red" }}>
            {normalizedError}
          </div>
        )}
      </div>
    )
  }
)

export default LabeledMediaField
