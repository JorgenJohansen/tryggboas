import Image from 'next/image'
import Link from 'next/link'

export default function Om() {
  return (
    <div>
      <h1 className='p-8 font-bold text-xl'>Om Tryggbo AS</h1>
      <p className='p-4 m-4 text-lg w-5/6'>
      Tryggbo AS ble etablert i 2000 og har to heltidsansatte. 
      Vi har gjennom lang og variert yrkeserfaring opparbeidet 
      god kompetanse innen offentlig boligforvaltning, ergonomisk 
      tilpasning av boliger, samt fått en god oversikt over det private boligmarkedet.
      </p>
      <p className='p-4 m-4 text-lg w-5/6'>
      Vi samarbeider med erfarne eiendomsmeglere og andre aktører i boligmarkedet. 
      Vi har også kontakt med advokater for bistand i juridiske spørsmål, 
      samt øvrige instanser som kan tilby økonomisk rådgivning og formidling 
      av gunstige finansierings- og plasseringsløsninger.
      </p>
      <div className='flex justify-center'>
        <div className='m-4 p-4'>
          <Image src={'/mona.jpeg'} width={150} height={150}></Image>
          <p className='p-2 m-2 font-bold'>Mona Ødegård</p>
          <p className='p-2 m-2'>Ergoterapeut/Boligkonsulent</p>
          <Link className='p-2 m-2 hover:underline' href="mailto:mona@tryggbo.as">mona@tryggbo.as</Link>
        </div>
        <div className='m-4 p-4'>
          <Image src={'/ingeborg.jpeg'} width={150} height={150}></Image>
          <p className='p-2 m-2 font-bold'>Ingeborg Nalsund</p>
          <p className='p-2 m-2'>Sosionom/Bedriftsøkonom</p>
          <Link className='p-2 m-2 hover:underline' href="mailto:ingeborg@tryggbo.as">ingeborg@tryggbo.as</Link>
        </div>
      </div>
      
    </div>
  )
}