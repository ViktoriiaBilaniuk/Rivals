import styles from './activities.module.scss';

export interface Props {
  title: string;
}

export function Activities({ title }: Props) {
  return (
    <div className={styles.activities}>
      <div className={styles.activities__header}>
        <h4 className={styles.activities__header_title}>{title}</h4>
      </div>

      <ul className={styles.activities__list}>
        <li className={styles.activity}>
          <div className={styles.activity__image}>
            <img
              src="https://static.wikia.nocookie.net/brawlstars/images/c/cd/Trophy.png/revision/latest?cb=20191007170317"
              alt=""
            />
          </div>
          <div className={styles.activity__content}>
            <span className={styles.activity__content_description}>
              You won a lot
            </span>
          </div>
        </li>
        <li className={styles.activity}>
          <div className={styles.activity__image}>
            <img
              src="https://static.wikia.nocookie.net/brawlstars/images/c/cd/Trophy.png/revision/latest?cb=20191007170317"
              alt=""
            />
          </div>
          <div className={styles.activity__content}>
            <span className={styles.activity__content_description}>
              You won a lot
            </span>
          </div>
        </li>
        <li className={styles.activity}>
          <div className={styles.activity__image}>
            <img
              src="https://static.wikia.nocookie.net/brawlstars/images/c/cd/Trophy.png/revision/latest?cb=20191007170317"
              alt=""
            />
          </div>
          <div className={styles.activity__content}>
            <span className={styles.activity__content_description}>
              You won a lot
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
