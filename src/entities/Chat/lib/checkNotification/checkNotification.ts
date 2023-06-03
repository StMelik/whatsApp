import { TypeNotification } from "../../model/types/ChatSchema";

export const isMessageNotification = (typeWebhook: TypeNotification) => {
  const isIncomingMessageReceived = typeWebhook === TypeNotification.incomingMessageReceived
  const isOutgoingAPIMessageReceived = typeWebhook === TypeNotification.outgoingAPIMessageReceived
  const isOutgoingMessageReceived = typeWebhook === TypeNotification.outgoingMessageReceived

  return isIncomingMessageReceived || isOutgoingAPIMessageReceived || isOutgoingMessageReceived;
}

export const isOutgoingMessageNotification = (typeWebhook: TypeNotification) => {
  const isOutgoingAPIMessageReceived = typeWebhook === TypeNotification.outgoingAPIMessageReceived
  const isOutgoingMessageReceived = typeWebhook === TypeNotification.outgoingMessageReceived

  return isOutgoingAPIMessageReceived || isOutgoingMessageReceived;
}
