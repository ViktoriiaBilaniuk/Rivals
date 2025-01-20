import clsx from 'clsx';
import styles from './action.module.scss';

export function Actions() {
  return (
    <div className={styles.actions}>
      <div
        className={clsx(
          styles.action,
          styles['action--create-custom-tournament']
        )}
      >
        <div className={styles.action__image}>
          <img
            src="https://wallpapers.com/images/hd/brawl-stars-character-shelly-1e7yfzcjdafcxfl5.jpg"
            alt=""
          />
        </div>
        <div className={styles.action__content}>
          <span className={styles.action__content_name}>
            Create Custom Tournament
          </span>
        </div>
      </div>

      <div className={clsx(styles.action, styles['action--join-tournament'])}>
        <div className={styles.action__image}>
          <img
            src="https://preview.redd.it/colt-is-one-of-the-coolest-brawlers-fight-me-v0-62mvvampydsa1.png?auto=webp&s=9e53b360c97d8205d69fe962d34ced6bf7b08cb4"
            alt=""
          />
        </div>
        <div className={styles.action__content}>
          <span className={styles.action__content_name}>Join Tournament</span>
        </div>
      </div>
    </div>
  );
}
