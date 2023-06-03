import { Loader } from '@/shared/ui/Loader';
import cn from 'classnames';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps {
  className?: string;
}

export const LoaderPage = (props: LoaderPageProps) => {
  const { className } = props;

  return (
    <div className={cn(cls.loaderPage, {}, [className])}>
      <Loader />
    </div>
  );
};
