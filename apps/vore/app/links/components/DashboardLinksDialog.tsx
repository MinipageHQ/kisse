import { Fragment, Suspense, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useRouter } from 'blitz'
import DashboardLinksNew from './DashboardLinksNew'
import DashboardLinksShow from './DashboardLinksShow'
import { Modal, Skeleton } from '@mantine/core'
import linkTypes from '../link-types'

export default function DashboardLinksDialog() {
  const [open, setOpen] = useState(true)

  const { query, back, push } = useRouter()

  const [linkId = null, linkType = null] = query.linkQueries || []

  const typeData = linkTypes.find(({ type }) => type === linkType)

  if (!linkId) {
    return null
  }

  return (
    <Modal
      opened={typeof linkId === 'string'}
      onClose={() => push("/dashboard/links")}
      title={typeData?.createTitle || "Create a new link..."}
    >
      <Suspense fallback={<Skeleton visible />}>
        {linkId === 'new' ? <DashboardLinksNew linkType={linkType!} /> : <DashboardLinksShow linkId={linkId} />}
      </Suspense>
    </Modal>
  )
}
