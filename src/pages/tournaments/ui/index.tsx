import { Tabs } from '../../../shared/ui/tabs';
import { useEffect, useState } from 'react';
import { Tournament } from '../../../entities/tournament';
import styles from './tournaments.module.scss';
import { Input } from '../../../shared/ui/input/input.tsx';
import { InputNumber } from '../../../shared/ui/input-number/input-number.tsx';
import firebaseConfig from '../../../../firebase.config.ts';
import {
  collection,
  getFirestore,
  getDocs,
  where,
  query
} from 'firebase/firestore';
import { TournamentProp } from '../../../entities/tournament/ui';
import { Link } from 'react-router-dom';

interface TournamentsProps {
  type?: string;
}

export function Tournaments({ type }: TournamentsProps) {
  const [tournaments, setTournaments] = useState<TournamentProp[]>([]);
  const [tournamentsLoading, setTournamentsLoading] = useState<boolean>(false);

  const [search, setSearch] = useState('');
  const [award, setAward] = useState({ from: 0, to: 0 });

  const tabs = [
    {
      name: 'All',
      link: '/tournaments/all'
    },
    {
      name: 'Ongoing',
      link: '/tournaments/ongoing'
    },
    {
      name: 'Finished',
      link: '/tournaments/finished'
    }
  ];

  useEffect(() => {
    const database = getFirestore(firebaseConfig);
    const conditions = [];

    if (type !== 'all') {
      conditions.push(where('type', '==', type?.toLowerCase()));
    }

    const tournamentsQuery = query(
      collection(database, 'tournaments'),
      where('prize', '>=', award.from || -Infinity),
      where('prize', '<=', award.to || Infinity)
    );

    setTournamentsLoading(true);
    getDocs(tournamentsQuery)
      .then((querySnapshot) => {
        const formattedData = querySnapshot.docs
          .map(
            (doc) =>
              ({
                ...doc.data(),
                id: doc.id
              }) as TournamentProp
          )
          .filter(
            (tournament) =>
              tournament.name.toLowerCase().includes(search.toLowerCase()) &&
              (type === 'all' || tournament.type === type) // Case-insensitive substring match
          );

        setTournaments(formattedData);
      })
      .finally(() => setTournamentsLoading(false));
  }, [search, award, type]);

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onAwardFromChange = (value: number) => {
    setAward((award) => ({ ...award, from: +value }));
  };

  const onAwardToChange = (value: number) => {
    setAward((award) => ({ ...award, to: +value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Tabs tabs={tabs} />

        <div className={styles.header__actions}>
          <Link to="/tournaments/create">Create Tournament</Link>
        </div>
      </div>
      <div className={styles.tournaments}>
        <div className={styles.tournaments__list}>
          {tournamentsLoading
            ? 'Loading...'
            : tournaments.map((tournament, index) => (
                <Tournament key={index} tournament={tournament} />
              ))}
        </div>

        <div className={styles.tournaments__filters}>
          <div>
            Search
            <Input
              value={search}
              onChange={onSearchInputChange}
              placeholder={'Search'}
            />
          </div>
          <br />
          <div>
            Award From:
            <InputNumber
              onValueChange={onAwardFromChange}
              placeholder={'Award From'}
            />
            To:
            <InputNumber
              onValueChange={onAwardToChange}
              placeholder={'Award To'}
            />
          </div>

          {/*<Button disabled={false} title="Search" />*/}
        </div>
      </div>
    </div>
  );
}
