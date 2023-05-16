import React from 'react'

const Pricing = () => {
  return (
    <>
        <h1 className='p-8 font-bold text-xl'>Priser for våre tjenester</h1>
        <h2 className='p-8 font-bold text-xl'>Gratis førstegangsbesøk</h2>
        <p className='p-4 m-4 text-lg w-5/6'>I forbindelse med henvendelser, foretar vi gjerne et hjemmebesøk.</p>
        <p className='p-4 m-4 text-lg w-5/6'>Hjemmebesøket er gratis, og uforpliktende.
            Formålet med hjemmebesøket er at det her kan bli klarere for kunden 
            om hva vi kan være behjelpelig med, slik at kunden enklere skal kunne 
            avgjøre om våre tjenester er aktuelle.
        </p>
        <p className='p-4 m-4 text-lg w-5/6'>
        Hjemmebesøket klargjør også våre muligheter for anskaffe den ønskede boligen. 
        Vi får da muligheten til å se hvordan kunden bor i dag, og kan bruke dette 
        som et utgangspunkt. Vi kan bedre få kartlagt kundens forventinger til ny bolig 
        og med egne øyne se de positive og negative sidene ved det eksisterende boforholdet.
        </p>
        <p className='p-4 m-4 text-lg w-5/6'>Vi tar også imot kunder på vårt kontor for en samtale angående deres boligsituasjon.</p>

        <h2 className='p-8 font-bold text-xl'>Oppdragsavtale</h2>
        <p className='p-4 m-4 text-lg w-5/6'>Oppdragspris er et fast beløp på kr 35 000,-. 
            Ingen gebyrer eller andre utgifter kommer i tillegg. 
            Vi har valgt å operere med fastbeløp i stedet for timepris, 
            fordi dette gir større forutsigbarhet for kunden.</p>
        <p className='p-4 m-4 text-lg w-5/6'>Dersom forhold hos kunden endrer seg eller oppdraget viser seg å være 
            umulig å gjennomføre, belastes kunden med et beløp på kun kr 10.000,-.</p>
    </>
  )
}

export default Pricing