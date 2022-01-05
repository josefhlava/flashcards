import { configureStore } from "@reduxjs/toolkit";
import { topicsSlice } from '../features/topics/TopiscSlice'

export default configureStore({
  reducer: {
    topics: topicsSlice
  },
});
