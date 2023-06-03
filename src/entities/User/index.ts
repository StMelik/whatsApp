export { userReducer, userActions } from './model/slice/userSlice';

export { useAuthDataSelector, useUserInitedSelector, authDataSelector } from './model/selectors/userDataSelector/userDataSelector';

export { initAuthData } from './model/services/initAuthData';

export type { User, UserSchema } from './model/types/UserSchema';
