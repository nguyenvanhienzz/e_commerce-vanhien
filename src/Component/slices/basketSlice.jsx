import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    favourite: [],
    productdetails: [],
    data: []
}
export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const product = state.items.find((x) => x.id === action.payload.id && x.imgOne === action.payload.imgOne && x.updateSize === action.payload.updateSize);
            if (product) {
                state.items = state.items.map((item) =>
                    item.id === action.payload.id && item.imgOne === action.payload.imgOne && item.updateSize === action.payload.updateSize
                        ? { ...item, countInStock: item.countInStock === 10 ? 10 : item.countInStock + 1 } : { ...item })
            }
            else {
                state.items = [...state.items, action.payload]
            }
        },
        removeToBasket: (state, action) => {
            const index = state.items.findIndex((basketItem) => (basketItem.id === action.payload.id && basketItem.imgOne === action.payload.imgOne && basketItem.updateSize === action.payload.updateSize));
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id:${action.payload})`)
            }
            state.items = newBasket;
        },
        Removes: (state, action) => {
            state.items = [];
        },
        UpdateToBasket: (state, action) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id && item.imgOne === action.payload.imgOne
                    ? { ...item, updateSize: action.payload.updateSize } : { ...item })
        },
        AddToFavourite: (state, action) => {

            const product = state.favourite.find((x) => x.id === action.payload.id && x.imgOne === action.payload.imgOne);
            if (product) {
                state.favourite = state.favourite.map((item) => item.id === action.payload.id && item.imgOne === action.payload.imgOne ?
                    { ...item }
                    : { ...item })
            }
            else {
                state.favourite = [...state.favourite, action.payload]
            }

        },
        RemoveToFavourite: (state, action) => {

            const index = state.favourite.findIndex((favourite) => favourite.id === action.payload.id && favourite.imgOne === action.payload.imgOne);
            let newFavourite = [...state.favourite];
            if (index >= 0) {
                newFavourite.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id:${action.payload})`)
            }
            state.favourite = newFavourite;
        },
        AddProductDetails: (state, action) => {
            state.productdetails = [action.payload];
        },
        RemoveOneBasket: (state, action) => {
            const product = state.items.find((x) => x.id === action.payload.id && x.imgOne === action.payload.imgOne);
            if (product) {
                state.items = state.items.map((item) =>
                    item.id === action.payload.id && item.imgOne === action.payload.imgOne
                        ? { ...item, countInStock: item.countInStock === 1 ? 1 : item.countInStock - 1 } : { ...item })
            }
            else {
                state.items = [...state.items, action.payload]
            }
        },
        DataProducts: (state, action) => {
            state.data = action.payload;
        }
    }

});
export const { addToBasket, removeToBasket, Removes, AddToFavourite,
    RemoveToFavourite, AddProductDetails, RemoveOneBasket,
    UpdateToBasket, DataProducts } = basketSlice.actions;
export const selectItems = state => state.basket.items;
export const selectfavourite = state => state.basket.favourite;
export const selectproductdetails = state => state.basket.productdetails;
export const selectData = state => state.basket.data;

export default basketSlice.reducer;