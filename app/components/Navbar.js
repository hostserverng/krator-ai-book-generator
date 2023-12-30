import Link from 'next/link'
import React from 'react'
// import writebook from '../pages/writebook'


const Navbar = () => {
  return (
    <>
        <nav className="bg-white">
            <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-1'>
                            <a href='/' className='text-logo text-2xl font-bold'>
                                Krator
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link href='/' className='text-black opacity-70 rounded-lg p-2'>
                                Home
                            </Link>
                            <Link href="/bookcoverdesign" className='text-black opacity-70 rounded-lg p-2'>
                                Generate Book Cover
                            </Link>
                            <Link href='/createillustration' className='text-black opacity-70 rounded-lg p-2'>
                                Generate Illustrations
                            </Link>
                            <Link href='/writebookcontent' className='text-black opacity-70 rounded-lg p-2'>
                                Generate Painting
                            </Link>
                            <Link href='/' className='text-black opacity-70 rounded-lg p-2'>
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button className='w-40 h-12 bg-btn text-primary text-sm rounded-lg'
                        onClick="/">
                            Login/Signup
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar