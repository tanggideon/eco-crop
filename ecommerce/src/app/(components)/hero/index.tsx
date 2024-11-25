import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-[80%] h-[200px] bg-green-100'>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4">
            <div className="w-full h-[200px] flex justify-center items-center">
              <h2>Slide 1</h2>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4">
            <div className="w-full h-[200px] flex justify-center items-center">
              <h2>Slide 2</h2>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-2 md:pl-4">
            <div className="w-full h-[200px] flex justify-center items-center">
              <h2>Slide 3</h2>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Hero