import { Button } from '../../../../../shared/ui/button/button.tsx';
import styles from './award.module.scss';

export function Award() {
  return (
    <div className={styles.award}>
      <div className={styles.award__content}>
        <h4 className={styles.award__content_name}>Daily Login</h4>
        <div className={styles.award__content_button}>
          <Button disabled={false} title="Collect" />
        </div>
      </div>
      <div className={styles.award__image}>
        <img
          src="https://preview.redd.it/now-thats-what-i-call-a-dead-box-v0-2ihmgcbo9hvd1.png?auto=webp&s=2879b5c43bc9767ee37e14f1bafab836ba080368"
          alt=""
        />
      </div>
    </div>
  );
}
