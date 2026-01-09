import styles from './index.module.scss';

console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Not found ;(</h1>
    </div>
  );
};

export default NotFoundBlock;
