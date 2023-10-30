import {configureStore, createSlice} from '@reduxjs/toolkit';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, title: 'Persist Counter App'},
    reducers: {
        increment(state, action) {
            state.counter += 1;
        },
        decrement(state, action) {
            state.counter -= 1;
        },

    }

})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [PERSIST],
        }
      }),
});

const persistor = persistStore(store)

const actions = counterSlice.actions;

export {actions, store, persistor};