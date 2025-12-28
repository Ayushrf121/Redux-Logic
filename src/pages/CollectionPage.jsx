import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection, toastMessage3 } from '../redux/features/collection'

export default function CollectionPage() {
    const collection = useSelector(
        (state) => state.collection.items
    )
    const dispatch = useDispatch()
    const clearAllCollection = ()=>{
        setTimeout(()=>{
            dispatch(clearCollection())
            dispatch(toastMessage3())
        },1500)
    }
    return (
        <div className='min-h-screen overflow-auto px-4 sm:px-6 md:px-10 py-6 md:py-10 bg-linear-to-b from-gray-950 to-gray-900'>
            {
                collection.length>0 ?
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                        Your Collection
                    </h1>
                    <button 
                        className='w-full sm:w-auto group relative overflow-hidden active:scale-95 px-6 md:px-8 py-3 md:py-3.5 rounded-xl text-sm md:text-base cursor-pointer font-bold bg-linear-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-red-500/50' 
                        onClick={()=>clearAllCollection()}
                    >
                        <span className='relative z-10'>Clear Collection</span>
                        <div className='absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300'></div>
                    </button>
                </div> :
                <div className='flex items-center justify-center min-h-[60vh]'>
                    <div className='text-center space-y-6'>
                        
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400'>
                            Collection is Empty
                        </h1>
                    </div>
                </div>
            }

            <div className='flex justify-center lg:justify-start w-full flex-wrap gap-4 md:gap-6'>
                {
                    collection.map((items, i) => {
                        return <div key={i} className='w-full sm:w-auto'>
                            <CollectionCard item={items} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}