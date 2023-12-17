import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem</h2>
        <p>We Could not find the page you were looking for</p>
        <Link href="/"><p>Go Back to the Dashbord </p></Link>
    </main>
  )
}
