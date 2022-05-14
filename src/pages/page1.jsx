import React from 'react'
import { Link } from 'react-router-dom'

export const Page1 = () => {
  return (
    <div>
      page1
      <Link to='/2'>Page2</Link>
      <Link to='/'>Logout</Link>
    </div>
  )
}
