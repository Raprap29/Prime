import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from '../SliceGames/gameSlice';
import { gameApi } from '../AppApi/Api';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  user: authSlice,
  [gameApi.reducerPath]: gameApi.reducer
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [gameApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, gameApi.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };