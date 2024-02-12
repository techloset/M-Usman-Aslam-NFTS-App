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

export const fetchCollectionImages = createAsyncThunk('collectionImages', async () => {

    const collection_slug = useParams()

  const response = await axios.get(`{https://api.opensea.io/api/v2/collection/${collection_slug}}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }

    }
  )
  console.log(response.data);
  
  const result = response.data.collections.filter((images: any) => {
    return images.image_url !== '';
  });
  const filteredImages = result


  const imageUrls = filteredImages.map((image: any) => {
    return image.image_url;
  });
  return response.data
});


const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCollectionImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCollectionImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchCollectionImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const selectImages = (state: RootState) => state.images.images;
export default collectionSlice.reducer;
