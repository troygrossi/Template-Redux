import {configureStore, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, title: 'ToolKit Counter App'},
    reducers: {
        increment(state, action) {
            state.counter += 1;
        },
        decrement(state, action) {
            state.counter -= 1;
        },

    }

})

const store = configureStore({
    reducer: counterSlice.reducer
});

const actions = counterSlice.actions;
export {actions, store};