import { useEffect } from 'react';

export const useKeyboardEvent = (
  event: keyof DocumentEventMap,
  key: KeyboardEvent['key'],
  callback: () => void,
  deps?: React.DependencyList
) => {
  const addEvent = (e: KeyboardEvent) => {
    if (e.key === key) callback();
  };

  useEffect(() => {
    document.addEventListener(event, addEvent as EventListenerOrEventListenerObject);

    return () => document.removeEventListener(event, addEvent as EventListenerOrEventListenerObject);
  }, deps);
};
