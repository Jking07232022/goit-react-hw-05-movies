import { Bars } from 'react-loader-spinner';
import css from './Spiner.module.css';

const Spiner = () => {
  return (
    <div className={css.spiner}>
      <Bars
        visible={true}
        height="150"
        width="150"
        color=" hsl(34, 100%, 65%)"
        ariaLabel="bars-loading"
      />
    </div>
  );
};

export default Spiner;
