export enum ChatMessageType {
  outgoing = 'outgoing',
  incoming = 'incoming'
}

export enum TypeNotification {
  incomingMessageReceived = 'incomingMessageReceived', // входящее сообщение
  outgoingMessageReceived = 'outgoingMessageReceived', // исходящее сообщение с телефона
  outgoingAPIMessageReceived = 'outgoingAPIMessageReceived', // исходящее сообщение с API
}

export interface IChatSchema {
  items: ChatType[];
  isLoading: boolean;
  error?: string;
  selectedChatId?: string;
}

export interface ChatType {
  id: string;
  phone: string;
  messages: IChatMessageType[];
}

export interface IChatMessageType {
  id: string;
  text: string;
  time: string;
  isOwner: boolean;
}

