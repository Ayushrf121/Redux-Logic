import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice(
    {
        name: 'search slice',
        initialState: {
            query: '',
            activeTab: 'photos',
            results: [],
            loading: false,
            error: null
        },
        reducers: {
            setQuery: (state, action) => {
                state.query = action.payload
                console.log("Query Written: ",state.query);
            },
            setActionTab: (state, action) => {
                state.activeTab = action.payload
                console.log("Active tab: ",state.activeTab)
            },
            // jb sb kuch visible ho gya so tb kya loading ni ikhna chahiye.
            setResults: (state, action) => {
                state.results = action.payload
                state.loading = false
            },
            setLoading: (state, action) => {
                state.loading = true
                state.error = null

            },
            setError: (state, action) => {
                state.error = action.payload
                state.loading = false 
            },
            clearResult: (state,action)=>{
                state.results = []
            }

        }
    }
)
export const
    {
        setQuery, setActionTab, setResults, setLoading, setError,clearResult
    } = searchSlice.actions;
export default searchSlice.reducer