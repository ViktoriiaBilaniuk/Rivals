import logo from '../../../../public/images/logo.png'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.placeholder}></div>

      <div className={styles.header__logo}>
        <img className={styles.header__logo_image} src={logo} alt="header logo"/>
        <h2 className={styles.header__logo_name}>RIVALS</h2>
      </div>

      <div className={styles.header__actions}>
        {/* TODO: Create shared button */}
        <div className={styles.header__actions_item}>1</div>
        <div className={styles.header__actions_item}>2</div>
      </div>
    </header>
  )
}
