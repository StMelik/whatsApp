import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

const rootReducer: ReducersMapObject<StateSchema> = {};

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__
});

export type AppDispatch = (typeof store)['dispatch'];
