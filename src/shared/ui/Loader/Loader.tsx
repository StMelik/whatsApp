import cn from 'classnames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={cn('lds-circle', {}, [className])}>
      <div />
    </div>
  );
};
