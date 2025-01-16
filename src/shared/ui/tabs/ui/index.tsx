import {NavLink, NavLinkRenderProps} from "react-router-dom";
import styles from './tabs.module.scss'

interface Tab {
  name: string;
  link: string;
}

interface Props {
  tabs: Tab[]
}

export function Tabs({tabs}: Props) {
  const checkIsActive = ({isActive}: NavLinkRenderProps): string => {
    return `${styles.tab__link} ${isActive ? styles.active : styles.inactive}`
  }

  return (
    <ul className={styles.tabs}>
      {
        tabs.map((tab: Tab) => (
          <li className={styles.tab}>
            <NavLink to={tab.link} className={checkIsActive}>{tab.name}</NavLink>
          </li>
        ))
      }
    </ul>
  )
}
