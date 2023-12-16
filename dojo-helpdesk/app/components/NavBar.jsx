import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav> 
    <h1>Help Desk</h1>
    <Link href="/">Dashbord</Link>
    <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
