"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ showBorder, setShowBorder ] = useState(false);
  
  function toggle(){
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`nav ${showBorder ? "border-gray-200" : ""}`}>
          <div className="flex max-lg:gap-6 gap-8">
              <Link href="/" className="flex gap-3" onClick={() => isOpen ? toggle() : ""}>
                  <Image className="object-contain border border-alphine-gray rounded-full" src="/icon/alphine.svg" alt="Alphine Logo" width={34} height={34} />
                  <h3 className="text-black text-xl my-auto">Alphine</h3>
              </Link>
              <Link className="my-auto hover:underline max-md:hidden" href="/features">Features</Link>
              <Link className="my-auto hover:underline max-md:hidden" href="/pricing">Pricing</Link>
              <Link className="my-auto hover:underline max-md:hidden" href="/contact">Contact</Link>
              <Link className="my-auto hover:underline max-md:hidden" href="/about">About</Link>
          </div>
          <div className="flex max-lg:gap-6 gap-8">
            <Link className="my-auto hover:underline max-md:hidden" href="/login">Log In</Link>
            <Link className="my-auto py-1 px-4 text-white rounded-md bg-blue-600 max-md:hidden" href="/quiz/level-test">Get Started for Free</Link>
            <Image className="hidden max-md:block cursor-pointer" src="/icon/hamburger.svg" alt="hamburger menu" width={26} height={26} onClick={toggle}/>
          </div>
      </nav>
      {
        isOpen ? 
          <>
            <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-black opacity-40 hidden max-md:block" onClick={toggle}></div>
            <div className="z-30 fixed top-[66px] left-0 border-t rounded-b-md bg-white text-gray-600 w-screen hidden max-md:flex flex-col" onClick={toggle}>
              <Link className="hover:underline p-4" href="/features">Features</Link>
              <Link className="hover:underline p-4" href="/pricing">Pricing</Link>
              <Link className="hover:underline p-4" href="/contact">Contact</Link>
              <Link className="hover:underline p-4" href="/about">About</Link>
              <div className="flex justify-between pt-2 pb-4 px-4 text-center">
                <Link className="w-[49%] py-2 px-4 text-white rounded-md bg-blue-600" href="/quiz/level-test">Get Started</Link>
                <Link className="w-[49%] py-2 px-4 rounded-md border border-alphine-gray" href="/login">Log In</Link>
              </div>
            </div>
          </>
        : 
          <>
          </>
      }
    </>
  )
}

export default Nav