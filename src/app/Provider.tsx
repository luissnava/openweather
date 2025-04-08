"use client"
import React from 'react'
import GlobalProviderState from './context/GlobalProvider'
interface PropsChildren {
    children: React.ReactNode
}
const Provider = ({ children }: PropsChildren) => {
  return (
    <GlobalProviderState>
      {
        children
      }
    </GlobalProviderState>
  )
}

export default Provider 