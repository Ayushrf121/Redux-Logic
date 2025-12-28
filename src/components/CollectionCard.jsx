import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, toastMessage2 } from '../redux/features/collection'

export default function CollectionCard({item}) {
    const dispatch = useDispatch()
    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item))
        dispatch(toastMessage2())
    }
    
    return (
    <div className='group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[18vw] min-w-[280px] h-80 sm:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-[1.02] border border-gray-700/50'>
        <a href={item.url} target='_blank' className='block h-full relative z-0'>
            {
            item.type == 'photo'? 
            <img className='h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700' src={item.src} alt="" /> :''
        }
        {
            item.type == 'video'? 
            <video className='h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700' src={item.src} autoPlay muted loop />:''
        }
        {
            item.type == 'gif'? 
            <img className='h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700' src={item.src} alt="" /> :''
        }
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none'></div>
        </a>
        <div id='bottom' className='flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 items-start sm:items-center w-full px-4 sm:px-6 py-4 sm:py-6 absolute bottom-0 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10'>
            <h2 className='text-sm sm:text-base md:text-lg font-semibold capitalize h-auto sm:h-14 overflow-hidden line-clamp-2 drop-shadow-lg flex-1'>
                {item.title}
            </h2>
            <button 
                onClick={()=> removeFromCollection(item)} 
                className='w-full sm:w-auto active:scale-95 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2 sm:py-2.5 cursor-pointer font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-red-500/50 whitespace-nowrap'
            >
                Remove
            </button>
        </div>
    </div>
  )
}
