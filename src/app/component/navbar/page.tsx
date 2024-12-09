import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
<div className="text-white body-font  bg-pink-800">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

     <Image src={'/xx.jpg'}
     alt='picture'
     height={60}
     width={60}
     className='rounded-full'
    ></Image>


      <span className="ml-3 text-2xl text-white font-serif">GlamOurous Salon</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold ">
      <Link href={'/component/hero'} className="mr-5 hover:text-black">HOME</Link>
      <Link href={'/component/contact'} className="mr-5 hover:text-black">CONTACT</Link>
      <Link href={'/component/service'} className="mr-5 hover:text-black">SERVICES</Link>
      
    </nav><a href='/component/pics'>
    <button className="inline-flex items-center bg-purple-900 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0">
      Signature Makeup<svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button></a>
  </div>
</div>




    </div>
  )
}

export default Navbar