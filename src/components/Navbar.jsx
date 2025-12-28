import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-50 backdrop-blur-md bg-linear-to-r from-blue-900/95 via-indigo-900/95 to-purple-900/95 shadow-lg border-b border-white/10'>
            <div className='flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-6'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg tracking-tight'>
                    Media Search
                </h2>
                <div className='flex gap-2 sm:gap-3 md:gap-5 items-center'>
                    <Link 
                        to='/' 
                        className='group relative px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm sm:text-base cursor-pointer font-medium bg-linear-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-blue-500/50 overflow-hidden'
                    >
                        <span className='relative z-10'>Search</span>
                        <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                    </Link>
                    <Link 
                        to='/collection' 
                        className='group relative px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm sm:text-base cursor-pointer font-medium bg-linear-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-purple-500/50 overflow-hidden'
                    >
                        <span className='relative z-10'>Collection</span>
                        <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}