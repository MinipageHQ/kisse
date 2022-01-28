import { forwardRef, ComponentPropsWithoutRef, PropsWithoutRef } from "react"
import { FieldInputProps, useField, UseFieldConfig } from "react-final-form"

export interface LabeledProfileMediaFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
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

import { Dashboard } from "@uppy/react"
import React from "react"

const defOpts = {
  companionUrl: Transloadit.COMPANION,
  companionAllowedHosts: Transloadit.COMPANION_PATTERN,
}

const transloadItKey = process.env.NEXT_PUBLIC_TRANSLOADIT_AUTH_KEY as string

export const LabeledMediaField = forwardRef<HTMLInputElement, LabeledProfileMediaFieldProps>(
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
    const uppy = React.useMemo(
      () =>
        new Uppy({
          id: name,
          restrictions: {
            maxNumberOfFiles: 1,
            minNumberOfFiles: 1,
            allowedFileTypes: ["image/*", "video/*"],
          },
          autoProceed: true,
        })
          .use(Transloadit, {
            params: {
              auth: {
                key: transloadItKey,
              },
              template_id: "01ca9f9145bb4134ab5eaa553265b055",
            },
            waitForEncoding: true,
          })
          .use(Instagram, defOpts)
          .use(Webcam, {
            modes: ["video-audio", "picture"],
            countdown: 3,
            showRecordingLength: true,
            videoConstraints: {
              aspectRatio: {
                max: 1.1,
              },
            },
          })
          .use(DragDrop)
          .use(Dropbox, defOpts)
          .use(GoogleDrive, defOpts)
          .use(Facebook, defOpts)
          .use(Zoom, defOpts)
          .use(Url, defOpts)
          .use(ImageEditor, {})
          .on("complete", (result) => {
            const uploadedMedia = result.successful[0]
            console.log("uploadedMedia", uploadedMedia)
          })
          .on("transloadit:result", (stepName, result) => {
            console.log("transloadit:result", result, uppy.getFile(result.localId as string))
            // if (props.onTransloaditResult) {
            //   props.onTransloaditResult(uppy.getFile(result.localId as string))
            // }
          }),
      [name]
    )
    React.useEffect(() => () => uppy.close(), [uppy])

    return (
      <div {...outerProps}>
        <label {...labelProps}>
          {label}

          {/* <input {...input} disabled={submitting} {...props} ref={ref} /> */}
        </label>
        <p>You can use an image (avatar) or a short (30 seconds max) video</p>
        {/* <Uploader disabled={submitting} input={input} /> */}

        <Dashboard
          uppy={uppy}
          // theme="dark"
          width={"100%"}
          proudlyDisplayPoweredByUppy={false}
          autoOpenFileEditor={true}
          closeAfterFinish={false}
          plugins={["Webcam", "Instagram", "DragDrop", "Url", "ImageEditor"]}
          // {...props}
        />
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
