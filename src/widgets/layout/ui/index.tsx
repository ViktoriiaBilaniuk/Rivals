import {Outlet} from "react-router";
import styles from './layout.module.scss'
import {Header} from "../../header";
import {Sidebar} from "../../sidebar";

export function Layout() {
  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Header/>
        </div>

        <div className={styles.content}>
          <div className={styles.content__sidebar}>
            <Sidebar/>
          </div>

          <main className={styles.content__main}>
            <Outlet/>
          </main>
        </div>
      </div>
  )
}
