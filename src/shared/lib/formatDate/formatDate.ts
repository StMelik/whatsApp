export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric'
  });
};
