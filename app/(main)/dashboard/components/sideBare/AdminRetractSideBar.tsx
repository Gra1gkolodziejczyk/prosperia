import React from 'react'
import { PanelLeft } from 'lucide-react'

type AdminRetractSideBarProps = {
  onChange: (isOpen: boolean) => void
  currentOpen: boolean
}

export const AdminRetractSideBar = ({ onChange, currentOpen }: AdminRetractSideBarProps) => {
  return (
    <button onClick={() => onChange(!currentOpen)}>
      <PanelLeft className='h-4 w-4' />
    </button>
  )
}
export default AdminRetractSideBar
