'use client'

import { useState } from 'react'
import AdminFAQCreateDialog from './AdminFAQCreateDialog'

const AdminFAQCreateButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <AdminFAQCreateDialog isOpen={isOpen} setIsOpen={setIsOpen} />
}

export default AdminFAQCreateButton
