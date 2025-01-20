import { Activities } from '../components/activities';
import { Award } from '../components/award';
import { Profile } from '../components/profile';
import { Actions } from '../components/actions';

import styles from './home.module.scss';
import { Tournaments } from '../components/tournaments';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Profile />
      </div>

      <div className={styles.my__daily__activities}>
        <Activities title="My Daily Activities" />
      </div>

      <div className={styles.award}>
        <Award />
      </div>

      <div className={styles.actions}>
        <Actions />
      </div>

      <div className={styles.activities}>
        <Activities title="Daily Activities" />
      </div>

      <div className={styles.tournaments}>
        <Tournaments />
      </div>
    </div>
  );
}
