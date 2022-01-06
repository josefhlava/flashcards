import { configureStore } from "@reduxjs/toolkit";
import { topicsReducer } from '../features/topics/TopiscSlice'

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
