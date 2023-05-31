import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
