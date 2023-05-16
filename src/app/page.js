import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className='p-8 font-bold text-xl'>Har du en god BOLIG for fremtiden?</h1>
      <p className='p-4 m-4 text-lg w-5/6'>
      Tryggbo AS er Norges første og foreløpig eneste firma som bistår eldre og 
      andre som har behov for bistand med å finne ny og egnet bolig.
      </p>
      <p className='p-4 m-4 text-lg w-5/6'>
      Ved boligkjøp står eldre og personer med forskjellige funksjons-hemminger, 
      overfor større utfordringer og problemstillinger enn befolkningen forøvrig. 
      Dette har vi tatt på alvor, og kan derfor tilby bistand i hele prosessen med det å finne en bolig som er tilpasset ditt behov.
      </p>
    </div>
  )
}
