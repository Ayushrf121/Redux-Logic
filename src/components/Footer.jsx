import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-auto bg-linear-to-r from-blue-900 via-indigo-900 to-purple-900 text-white w-full py-8 md:py-10 border-t border-white/10'>
      <div className='container mx-auto px-4'>
        <div className='text-center space-y-4'>
          <h3 className='font-bold text-2xl md:text-3xl bg-linear-to-r from-white to-blue-200 bg-clip-text text-transparent'>
            Media Search Platform
          </h3>
          <p className='text-sm md:text-base text-blue-200/80 max-w-md mx-auto'>
            Discover and collect amazing photos, videos, and GIFs
          </p>
          <div className='flex justify-center gap-4 pt-2'>
            <div className='w-12 h-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-full'></div>
          </div>
        </div>
      </div>
    </footer>
  )
}