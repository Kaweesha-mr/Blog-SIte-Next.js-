import Link from 'next/link'
import React from 'react'
import logo from '../components/dojo-logo.png'

export default function NavBar() {
  return (
    <nav> 
      <Image 
        src = {logo}
        alt = 'Dojo helpdesk logo'
        width = {70}
        quality = {100}
        placeholder = 'blur'
        />

    <h1>Help Desk</h1>
    <Link href="/">Dashbord</Link>
    <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
