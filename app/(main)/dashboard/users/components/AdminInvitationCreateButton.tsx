'use client'

import { useState } from 'react'
import AdminInvitationCreateDialog from './AdminInvitationCreateDialog'

const AdminInvitationCreateButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <AdminInvitationCreateDialog open={isOpen} setOpen={setIsOpen} />
}

export default AdminInvitationCreateButton
