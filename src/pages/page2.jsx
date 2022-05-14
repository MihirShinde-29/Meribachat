import React from 'react'
import { Link } from 'react-router-dom'

export const Page2 = () => {
  return (
    <div>
      page2
      <Link to='/1'>Page1</Link>
      <Link to='/'>Logout</Link>
    </div>
  )
}
