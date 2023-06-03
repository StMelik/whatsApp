import { ChatSchema } from '@/entities/Chat';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/authByApi';
import { AxiosInstance } from 'axios';

export interface StateSchema {
  loginForm: LoginSchema;
  user: UserSchema;
  chat: ChatSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
