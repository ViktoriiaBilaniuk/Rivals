import RankLogo from '../../../../../../public/images/rank.png';
import CurrencyLogo from '../../../../../../public/images/currency.png';
import styles from './profile.module.scss';

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__image}>
        <img
          src="https://static.wikia.nocookie.net/brawlstars/images/e/e5/Shelly_Portrait.png/revision/latest?cb=20240718151846"
          alt="Profile"
        />
      </div>
      <div className={styles.profile__content}>
        <div className={styles.profile__content__header}>
          <h4 className={styles.profile__content__header_name}>Mr. Robot</h4>
        </div>

        <div className={styles.profile__content__info}>
          <div className={styles.gems}>
            <img src={CurrencyLogo} alt="" className={styles.gems__logo} />
            <span className={styles.gems__count}>1200</span>
            <button className={styles.gems__add}>+</button>
          </div>
          <div className={styles.rank}>
            <img src={RankLogo} alt="" className={styles.rank__logo} />
          </div>
          <div className={styles.score}>
            <img
              src="https://static.wikia.nocookie.net/brawlstars/images/c/cd/Trophy.png/revision/latest?cb=20191007170317"
              alt=""
              className={styles.score__logo}
            />
            <span className={styles.score__count}>1200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
