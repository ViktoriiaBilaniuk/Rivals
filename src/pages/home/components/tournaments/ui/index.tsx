import { Tournament } from '../../../../../entities/tournament';
import styles from './tournaments.module.scss';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { TournamentProp } from '../../../../../entities/tournament/ui';
import firebaseConfig from '../../../../../../firebase.config.ts';

export function Tournaments() {
  const [tournaments, setTournaments] = useState<TournamentProp[]>([]);

  useEffect(() => {
    const database = getFirestore(firebaseConfig);

    getDocs(collection(database, 'tournaments')).then((querySnapshot) => {
      const formattedData = querySnapshot.docs.map(
        (doc) =>
          ({
            ...doc.data(),
            id: doc.id
          }) as TournamentProp
      );

      setTournaments(formattedData);
    });
  }, []);

  return (
    <div className={styles.tournaments}>
      <div className={styles.tournaments__list}>
        {tournaments.map((tournament, index) => (
          <Tournament key={index} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}
