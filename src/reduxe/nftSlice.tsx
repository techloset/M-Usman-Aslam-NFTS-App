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

export const nftSlice = createAsyncThunk('nftSlice', async () => {

  const {chain, address,identifier} =useParams()
  const URL = `{https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${identifier}}`
  const response = await axios.get(URL,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }

    }
  )
  console.log(response.data);
  
  const result = response.data.collections
  const filteredImages = result.filter((images: any) => {
    return images.image_url !== '';
  });


  const imageUrls = filteredImages.map((image: any) => {
    return image.image_url;
  });
  return response.data
});


const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(nftSlice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(nftSlice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(nftSlice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectImages = (state: RootState) => state.images.images;
export default imageSlice.reducer;
