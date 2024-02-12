// // store.ts
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './Imageslice';
import collection from './collectionSlice';
import nft from './nftCollectionSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
    collection:collection,
    nftcollection:nft
  },
 
 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

