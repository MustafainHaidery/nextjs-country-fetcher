import Link from 'next/link'
import React from 'react'
import { countriesdata } from './data'

function Home() {
  return (
    <div className='p-5 flex flex-col gap-y-2'>
      <h1 className="text-3xl text-center font-bold underline">Countries</h1>
      {/* <Link href={"/countries/pakistan"}>Pakistan</Link> */}
      {countriesdata.map((country,index)=>{
        return(
          <Link className='text-center px-3 uppercase'  key={index} href={`/countries/${country.name}`}>{country.name}</Link>
        )
      })}
      
    </div>
  )
}

export default Home
