import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActionTab } from '../redux/features/searchSlice';

export default function Tabs() {
    const tabs = [
        'photos',
        'videos',
        'gifs'
    ]
    const dispatch = useDispatch();
    const activeTab = useSelector(
        (state) => state.search.activeTab
    )
    const tabHandler = (data) => {
        dispatch(setActionTab(data))
    }
    return (
        <div className='flex flex-wrap gap-3 md:gap-6 lg:gap-10 p-4 md:p-8 lg:p-10 justify-center md:justify-start bg-linear-to-b from-gray-900 to-transparent'>
            {
                tabs.map((data, i) => {
                    return (
                        <button 
                            onClick={() => tabHandler(data)} 
                            className={`
                                ${activeTab == data 
                                    ? 'bg-linear-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 scale-105' 
                                    : 'bg-linear-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 shadow-md'
                                } 
                                active:scale-95 cursor-pointer uppercase rounded-2xl px-5 md:px-7 py-2.5 md:py-3 font-bold text-sm md:text-base tracking-wide transition-all duration-300 hover:shadow-lg border border-white/10
                            `} 
                            key={i}
                        >
                            {data}
                        </button>
                    )
                })
            }
        </div>
    )
}