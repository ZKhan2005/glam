import React from 'react'
import Image from 'next/image'
function Pics() {
  return (
    <div>
        <section className=" bg-pink-800 text-black body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-4xl   first:font-serif title-font text-black lg:w-1/3 lg:mb-0 mb-4 font-bold ">
        BEST BRIDALS
      </h1>
      
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        
       
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className=" object-cover h-full w-full object-center block"
            src="/bridal.jpg"
            height={500}
            width={700}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image
            alt="gallery"
            className="w-full h-full  object-center block"
            src="/girl.jpg"
            height={100}
            width={700}
          />
        </div>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Pics





