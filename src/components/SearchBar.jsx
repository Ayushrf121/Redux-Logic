import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

export default function SearchBar() {
    const [data , setData] = useState('');
    const dispatch = useDispatch()
    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(setQuery(data))
        setData('')
    }
    return (
    <div className='bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-14 shadow-2xl'>
      <form onSubmit={(e)=>onSubmit(e)} className='max-w-4xl mx-auto'>
        <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
          <div className='relative flex-1 group'>
            <input 
              required 
              type='text' 
              value={data} 
              className='w-full border-2 border-gray-700 bg-gray-800/50 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 text-base md:text-xl rounded-2xl outline-none text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-800 transition-all duration-300 shadow-lg focus:shadow-blue-500/30' 
              placeholder='Search for photos, videos, or GIFs...'
              onChange={(e)=>setData(e.target.value)} 
            />
            <div className='absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
          </div>
          <button className='group relative overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 active:scale-95 border-2 border-transparent text-base md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-2xl cursor-pointer font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 whitespace-nowrap'>
            <span className='relative z-10'>Search</span>
            <div className='absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300'></div>
          </button>
        </div>
      </form>
    </div>
  )
}