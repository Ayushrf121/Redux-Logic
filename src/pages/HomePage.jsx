import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

export default function HomePage() {
    const { query } = useSelector(
        (store) => store.search
    )
    return (
        <div className='min-h-screen'>
            <div>
                <SearchBar />
            {
                query != '' ?
                    <div className='animate-fadeIn'>
                        <Tabs />
                        <ResultGrid />
                    </div> : ''
            }
            </div>
            <div>
                {
          query == '' ? 
          <div className='flex items-center justify-center min-h-[60vh] px-4'>
            <div className='text-center space-y-6 max-w-2xl'>
              <div className='w-20 h-20 md:w-24 md:h-24 mx-auto bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse'>
                <svg className='w-10 h-10 md:w-12 md:h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </div>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight'>
                Discover Amazing Content
              </h1>
              <p className='text-base md:text-xl text-gray-400'>
                Search for stunning photos, captivating videos, and creative GIFs
              </p>
            </div>
          </div> : ''
        }
            </div>
        </div>
    )
}
