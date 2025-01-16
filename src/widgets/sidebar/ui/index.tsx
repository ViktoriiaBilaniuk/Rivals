import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import styles from './sidebar.module.scss';
import rankLogo from '../../../../public/images/rank.png';
import currencyLogo from '../../../../public/images/currency.png';
import profileLogo from '../../../../public/images/profile-logo.png';

// Icons
import { HomeIcon } from './home-icon.tsx';
import { JoystickIcon } from './joystick-icon.tsx';
import { GroupIcon } from './group-icon.tsx';
import { LeaderboardIcon } from './leaderboard-icon.tsx';
import { BasketIcon } from './basket-icon.tsx';
import { CogIcon } from './cog-icon.tsx';

export function Sidebar() {
  const NAVIGATION_ITEMS = [
    {
      name: 'Home',
      link: '/',
      icon: <HomeIcon />
    },
    {
      name: 'Tournaments',
      link: '/tournaments',
      icon: <JoystickIcon />
    },
    {
      name: 'Friends',
      link: '/friends',
      icon: <GroupIcon />
    },
    {
      name: 'Leaderboard',
      link: '/leaderboard',
      icon: <LeaderboardIcon />
    },
    {
      name: 'Shop',
      link: '/shop',
      icon: <BasketIcon />
    },
    {
      name: 'Settings',
      link: '/settings',
      icon: <CogIcon />
    }
  ];

  const checkIsActive = ({ isActive }: NavLinkRenderProps): string => {
    return `${styles['sidebar-navigation__link']} ${isActive ? styles.active : styles.inactive}`;
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <div
          className={`${styles['sidebar-header__user']} ${styles['sidebar-user']}`}
        >
          <div className={styles['sidebar-user__logo']}>
            <img
              src={profileLogo}
              alt="User"
              className={styles['sidebar-user__logo_img']}
            />
            <span className={styles['sidebar-user__logo_status']}></span>
          </div>

          <div className={styles['sidebar-user__name']}>Test</div>
        </div>

        <div
          className={`${styles['sidebar-header__currency']} ${styles['sidebar-currency']}`}
        >
          <div className={styles['sidebar-currency__amount']}>
            <img
              src={currencyLogo}
              alt="Currecy"
              className={styles['sidebar-currency__amount_logo']}
            />
            <span className={styles['sidebar-currency__amount_value']}>
              {1500}
            </span>
          </div>

          {/* TODO: Make button shared */}
          <button className={styles['sidebar-currency__deposit']}>
            <span className={styles['sidebar-currency__deposit_label']}>+</span>
          </button>
        </div>

        <div
          className={`${styles['sidebar-header__rank']} ${styles['sidebar-rank']}`}
        >
          <h3 className={styles['sidebar-rank__title']}>Rank</h3>
          <img
            src={rankLogo}
            alt="Rank"
            className={styles['sidebar-rank__logo']}
          />
        </div>
      </div>

      <hr className={styles['sidebar-hr']} />

      <nav className={styles['sidebar-navigation']}>
        <ul className={styles['sidebar-navigation__list']}>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.link} className={styles['sidebar-navigation__item']}>
              <NavLink to={item.link} className={checkIsActive}>
                <span className={styles['sidebar-navigation__link_icon']}>
                  {item.icon}
                </span>
                <span className={styles.tab__label}>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
