// imageSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './Store';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface ImageState {
  images: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
const initialState: ImageState = {
  images: [],
  status: 'idle',
  error: null,
};

export const fetchnftCollection = createAsyncThunk('collectionImages', async () => {
  
  const collection_slug = useParams()

  const nft = await axios.get(`{https://api.opensea.io/api/v2/collection/${collection_slug}/nfts}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }

    }
  )
  console.log(nft.data);
  
  const result = nft.data.nfts
  const filteredImages = result.filter((images: any) => {
    return images.image_url !== '';
  });


  const imageUrls = filteredImages.map((image: any) => {
    return image.image_url;
  });
  return nft.data
});


const nftcollectionSlice = createSlice({
  name: 'nftcollection',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchnftCollection.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchnftCollection.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchnftCollection.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectImages = (state: RootState) => state.images.images;
export default nftcollectionSlice.reducer;
