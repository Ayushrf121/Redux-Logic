Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and node.js with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequest.
npm i axios (kisi bhi api ko fetch krne ke liye...)

API key generated for upsplash ,pexels
.env starts with 
VITE_ prefix hona chahiye.

params me query page aur per_page share krna hai.
try {
        const res = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query,page,per_page
            },
            headers:{
                Authorization : `Client-ID ${UNSPLASH_KEY}`
            }
        })
        console.log(res)
    } catch (error) {
        console.log("Error to fetch api from unsplash",error);
    }

redux settle store, actions ,reducers,slicers
frontend connect search bar,tabs section,resultgrid..



    <!-- topic uncovered -->
    action creation 