import { createSlice } from "@reduxjs/toolkit";
import { toast,Zoom } from "react-toastify";


export const collectionSlice = createSlice(
    {
        name: 'Collection',
        initialState: {
            items: JSON.parse(localStorage.getItem('collection')) || []

        },
        reducers: {
            addCollection: (state, action) => {
                //New elements to add to the array.
                // Appends new elements to the end of an array, and returns the new length of the array.
                // state.items.push(action.payload);
                // localStorage.setItem('collection',JSON.stringify(state.items));

                const alreadyExist = state.items.find(
                    items => items.id == action.payload.id
                )
                if (!alreadyExist) {
                    //New elements to add to the array.
                    // Appends new elements to the end of an array, and returns the new length of the array.
                    state.items.push(action.payload);
                    localStorage.setItem('collection', JSON.stringify(state.items));
                    console.log('Data collected')
                }
            },
            removeCollection: (state, action) => {
                state.items = state.items.filter(
                    items => items.id !== action.payload.id
                )
                console.log('Data deleted')
            },
            clearCollection: (state) => {
                state.items = []
                localStorage.removeItem('collection')
            },
            toastMessage: () => {
                toast('🦄 Added to Collection !', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
                });
            },
            toastMessage2: () => {
                toast('🦄 Removed from Collection !', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
                });
            },
            toastMessage3: () => {
                toast('🦄 Collections Removed !', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Zoom,
                });
            }
        }
    }
)
export const
    {
        addCollection, removeCollection, toastMessage3, toastMessage2, toastMessage, clearCollection
    } = collectionSlice.actions;
export default collectionSlice.reducer;