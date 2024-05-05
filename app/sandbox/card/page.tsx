import React from 'react'
import { CustomCard } from '@/components/card'

const Card = () => {
  return (
    // <div className='grid grid-cols-2 gap-8 md:grid-cols-5 py-4 px-8'>
    // <div className='flex md:flex-row md:flex-wrap md:gap-8 gap-1 md:grid-cols-5 md:py-4 md:px-8 p-4 justify-center max-w-[1200px] m-auto'>
    <div className='grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 md:py-4 md:px-8 p-4 justify-center max-w-[1200px] m-auto'>
      {
        Array.from({ length: 12 }).map((_, index) => (
          <CustomCard key={index} />
        ))
      }
    </div>
  )
}

export default Card