import Link from 'next/link'
import React from 'react'

const ViTilbyr = () => {
  return (
    <>
        <h1 className='p-8 font-bold text-xl'>Vi kan tilby følgende:</h1>
        <p className='p-4 m-4 text-lg w-5/6'>Vi vet av erfaring at det er en vanskelig og krevende oppgave å skaffe seg en god bolig for alderdommen. 
            Vi tilbyr deg vår kompetanse og hjelp til å gjennomføre dette.</p>
        <p className='p-4 m-4 text-lg w-5/6'>
        De fleste ønsker å bo hjemme så lenge som mulig når de blir gamle. 
        Boligens egnethet er avgjørende for hvor lenge dette er mulig. 
        Gode boliger bidrar til større selvhjulpenhet og reduserer behovet for hjelp.
        </p>
        <h2 className='p-4 m-4 text-lg font-bold'>Hva kjennetegner en god bolig?</h2>
        <ul>
            <li className='px-8 m-2'>God tilgjengelighet</li>
            <li className='px-8 m-2'>Romslig bad og kjøkken</li>
            <li className='px-8 m-2'>Alt på et plan</li>
            <li className='px-8 m-2'>Nærheten til butikk, post/bank og offentlig kommunikasjon</li>
            <li className='px-8 m-2'>Begrenset ansvar for hagearbeid, snømåking, vedlikehold m.m.</li>
        </ul>
        <h2 className='p-4 m-4 text-lg font-bold'>Tryggbo AS tilbyr deg følgende:</h2>
        <ul>
            <li className='px-8 m-2'>Gratis og uforpliktende førstegangsamtale på vårt kontor eller hjemme hos deg</li>
            <li className='px-8 m-2'>Kartlegging av økonomi, helse, ønsker og behov</li>
            <li className='px-8 m-2'>Innhenting av forslag til egnede boliger</li>
            <li className='px-8 m-2'>Bistand ved budgivning og kjøp av ny bolig</li>
            <li className='px-8 m-2'>Hjelp til søknad om offentlig godkjenninger, melding til folkeregister, post og telefon-omadressering m.m.</li>
            <li className='px-8 m-2'>Organisering og koordinering av flytting</li>
        </ul>
        <Link href='/pricing' className='px-8 m-2 underline'>Klikk her for å se priser på våre tjenester</Link>
    </>
  )
}

export default ViTilbyr