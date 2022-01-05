import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: {}
}


export const topicsSlice = createSlice({
    name: "topics",
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        }
    }
});

export const selectTopic = state => state.topics.topics;

export const {addTopic} = topicsSlice.actions;