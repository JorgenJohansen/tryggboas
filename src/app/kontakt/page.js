import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
        <h1 className='p-8 font-bold text-xl'>Kontakt oss</h1>
        <p className='p-8 font-bold text-xl'>Her finner du Tryggbo AS:</p>
        <p className='p-3 m-3 text-lg w-5/6'><span className='font-bold'>Besøksadresse:</span> Falkenborgvegen 35 C, 7044 Trondheim</p>
        <p className='p-3 m-3 text-lg w-5/6'><span className='font-bold'>Telefon:</span> 73 80 95 70</p>
        <p className='p-3 m-3 text-lg w-5/6'><span className='font-bold'>Mobil:</span> 92 44 28 00 / 92 44 27 00</p>
        <p className='p-3 m-3 text-lg w-5/6'><span className='font-bold'>Epost:</span> <Link href="mailto:mona@tryggbo.as">mona@tryggbo.as</Link> / <Link href="mailto:ingeborg@tryggbo.as">ingeborg@tryggbo.as</Link></p>
    </>
  )
}

export default Contact