import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';
import { createSelector } from '@reduxjs/toolkit';

const chatDataSelector = (state: StateSchema) => state.chat;

export const [useChatItemsSelector, chatItemsSelector] = buildSelector(
  (state) => chatDataSelector(state).items
);

export const [useChatIsLoadingSelector, chatIsLoadingSelector] = buildSelector(
  (state) => chatDataSelector(state).isLoading
);

export const [useChatErrorSelector, chatErrorSelector] = buildSelector(
  (state) => chatDataSelector(state).error
);

export const [useSelectedChatIdSelector, selectedChatIdSelector] = buildSelector(
  (state) => chatDataSelector(state).selectedChatId ?? ''
);

const activeChatSelector = createSelector(
  chatItemsSelector,
  selectedChatIdSelector,
  (items, selectedId) => {
    return items.find(({ id }) => id === selectedId)
  }
);

export const [useChatMessagesSelector, chatMessagesSelector] = buildSelector(
  (state) => activeChatSelector(state)?.messages ?? []
);

export const [useChatIdSelector, chatIdSelector] = buildSelector(
  (state) => activeChatSelector(state)?.id
);

export const [useChatPhoneSelector, chatPhoneSelector] = buildSelector(
  (state) => activeChatSelector(state)?.phone
);
