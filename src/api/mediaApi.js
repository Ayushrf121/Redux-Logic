import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

// one page data chahiye and one page me 20 photos hogi.
export async function fetchPhotos(query,page=1,per_page=20)
{
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query,page,per_page
            },
            headers:{
                Authorization : `Client-ID ${UNSPLASH_KEY}`
            }
        })
        return res.data;
        // console.log(res.data.results)
    } catch (error) {
        console.log("Error to fetch api from unsplash",error.message);
    }
}

export async function fetchVideos(query,page=2,per_page=20) {
    try {
        const res = await axios.get('https://api.pexels.com/videos/search',{
            params : {
                query,page,per_page
            },
            headers : {
                Authorization : PEXELS_KEY
            }
        })
        return res.data;
        // console.log(res.data.videos)

    } catch (error) {
        console.log("Error to fetch Pexels API",error.message);
    }
    
}

export async function fetchGif(query,pages=2,limit=40) {
    try {
        const res = await axios.get('https://tenor.googleapis.com/v2/search',{
            params:{
                q:query,
                key:TENOR_KEY,
                pages:pages,
                limit
            }

        })        
        return res.data;
        // console.log(res.data.results)

    } catch (error) {
        console.log("Error to fetch Tenor API",error.message);
    }
}