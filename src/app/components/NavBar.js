import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='m-4 p-4'>
        <Link className='hover:underline text-xl' href='/'>TRYGGBO AS - Boligkompetanse -</Link> 
        <Link className='hover:underline text-xl m-2 p-2' href="/om-oss">Om Oss</Link>
        <Link className='hover:underline text-xl m-2 p-2' href="/vi-tilbyr">Vi tilbyr</Link>
        <Link className='hover:underline text-xl m-2 p-2' href="/priser">Priser</Link>
        <Link className='hover:underline text-xl m-2 p-2' href="/kontakt">Kontakt oss</Link>
    </nav>
  )
}

export default NavBar