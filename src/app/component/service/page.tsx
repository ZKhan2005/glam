import React from 'react'
import Image from 'next/image'

function Service() {
  return (
    <div>
        <section className="text-black body-font bg-red-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full  mb-20">
      <h1 className="sm:text-3xl text-2xl font-serif title-font mb-4 text-black text-bold">
        OUR SERVICES
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Over the span of 15 years, we have been monumental in launching and
      crafting professional careers of hundreds of female models who have later
      been or are presently considered highly successful in the entertainment
      industry all over the world.
        
      </p>
    </div>
    <div className="flex flex-wrap m-4">
    <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/salon.jpg"}
            height={200}
            width={480}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
              FACILITIES
              <p className="leading-relaxed  "><br/>
              At our salon, we prioritize your comfort and satisfaction  top-notch facilities.
               we serene environment featuring stylish waiting areas.. 
               
    
              </p>
            </h2> 
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/hair.jpg"}
            height={200}
            width={480}
          />
          <div className="px-8 py-9 relative z-10 w-full border-4 border-gray-200 bg-pink-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
              BLOW DRY
            </h2>
            <p className="leading-relaxed"><br/>
              Blow dry , our expert artist are dedicated to enhancing your
              natural beauty.we have personalized looks good reflect glowing and bounce
              hair..
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/nail.jpg"}
            height={200}
            width={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-red-200 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
          NAILS EXTENSION
            </h2>
            <p className="leading-relaxed"><br/>
            Nail art, our expert  nail artist are dedicated to enhancing your natural beauty. 
            With personalized looks that reflect..
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/mask.png"
            height={200}
            width={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-red-200 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
              WHITINIG FACIAL
            </h2>
            <p className="leading-relaxed"><br/>
            Facial , our expert facial artist are dedicated to enhancing your natural beauty. 
            With personalized looks that reflect..
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/bri.jpg"
            height={200}
            width={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-rose-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
            VALIMA BRIDAL
            </h2>
            <p className="leading-relaxed"><br/>
             Valima Bridal, our expert makeup artists are dedicated to enhancing your natural beauty. 
            With personalized looks that reflect....
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/girl.jpg"
            height={200}
            width={400}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-rose-400 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-black mb-1">
              NIKKAH BRIDAL
            </h2>
            <p className="leading-relaxed"><br/>
             Nikkah Bridal, our expert makeup artists are dedicated to enhancing your natural beauty. 
            With personalized looks that reflect...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Service