import { initAuthData, useAuthDataSelector, useUserInitedSelector } from '@/entities/User';
import { AuthPage } from '@/pages/AuthPage';
import { MainPage } from '@/pages/MainPage';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { LoaderPage } from '@/widgets/LoaderPage';
import { Sidebar } from '@/widgets/sidebar';
import { useEffect } from 'react';

const App = () => {
  const isAuth = useAuthDataSelector();
  const inited = useUserInitedSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initAuthData());
  }, []);

  if (!inited) {
    return <LoaderPage />;
  }

  return (
    <div className='app'>
      {isAuth ? (
        <MainLayout
          sidebar={<Sidebar />}
          content={<MainPage />}
        />
      ) : (
        <AuthPage />
      )}
    </div>
  );
};

export default App;
