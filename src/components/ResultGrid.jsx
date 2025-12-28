import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGif, fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setError, setLoading, setQuery, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

export default function ResultGrid() {
    const {
        query, activeTab, results, loading, error
    } = useSelector(
        (store) => store.search
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if(!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
            if (activeTab === 'photos') {
                let res = await fetchPhotos(query)
                data = res.results.map((items) => ({
                    id: items.id,
                    title: items.alt_description,
                    type: 'photo',
                    src: items.urls.full,
                    thumbnail: items.urls.small,
                    url: items.links.html
                }))
            }
            if (activeTab === 'videos') {
                let res = await fetchVideos(query)
                data = res.videos.map((items) => ({
                    id: items.id,
                    title: 'Video',
                    url: items.url,
                    type: 'video',
                    src: items.video_files[0].link,
                    image: items.image
                }))
            }
            if (activeTab === 'gifs') {
                let res = await fetchGif(query)
                data = res.results.map((items) => ({
                    id: items.id,
                    title: items.content_description,
                    type: 'gif',
                    src: items.media_formats.gif.url,
                    url: items.url
                }))
            }
            dispatch(setResults(data))
        } catch (error) {
            console.log("Error to fetch API : ",error.message);
                dispatch(setError(error.message))
            }
        }
        getData()
    }, [query, activeTab])
    
    if(error) return (
        <div className='flex items-center justify-center min-h-[400px] px-4'>
            <div className='bg-red-500/10 border-2 border-red-500 rounded-2xl p-6 md:p-8 max-w-md'>
                <h1 className='text-xl md:text-2xl font-bold text-red-400'>Error: {error}</h1>
            </div>
        </div>
    )
    
    if(loading) return (
        <div className='flex items-center justify-center min-h-[400px]'>
            <div className='text-center space-y-4'>
                <div className='w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
                <h1 className='text-xl md:text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Loading...</h1>
            </div>
        </div>
    )
    
    return (
        <div className='flex justify-center lg:justify-start w-full flex-wrap gap-4 md:gap-6 overflow-auto px-4 sm:px-6 md:px-10 lg:px-18 py-6 md:py-8'>
            {
               results.map((item,i)=>{
                return <div key={i} className='w-full sm:w-auto'>
                        <ResultCard item={item}/>
                </div>
               }) 
            }
        </div>
    )
}