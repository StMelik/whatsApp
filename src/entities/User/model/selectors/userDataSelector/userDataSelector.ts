import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

const userDataSelector = (state: StateSchema) => state.user;

export const [useAuthDataSelector, authDataSelector] = buildSelector((state) => userDataSelector(state).authData);

export const [useUserInitedSelector, userInitedSelector] = buildSelector((state) => userDataSelector(state)._inited);
