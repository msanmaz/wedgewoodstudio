import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-[50vh]'>
      <div className='flex justify-center flex-col items-center'>
      <Image src={'/Wedgewoodstudio.webp'} width={500} height={500}/>
        <div className='bebas text-xl'>
          Create your silhoutte portrait
        </div>
      </div>
    </div>
  )
}

export default Landing