import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

const loginDataSelector = (state: StateSchema) => state.loginForm;

export const [useIsLoadingSelector, isLoadingSelector] = buildSelector((state) => loginDataSelector(state).isLoading);

export const [useErrorSelector, userErrorSelector] = buildSelector((state) => loginDataSelector(state).error);
