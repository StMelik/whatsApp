import { chatReducer } from '@/entities/Chat';
import { userReducer } from '@/entities/User';
import { loginReducer } from '@/features/authByApi';
import { $api } from '@/shared/api/api';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

const rootReducer: ReducersMapObject<StateSchema> = {
  loginForm: loginReducer,
  user: userReducer,
  chat: chatReducer
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    })
});

export type AppDispatch = (typeof store)['dispatch'];
