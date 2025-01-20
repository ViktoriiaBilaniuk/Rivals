import { Button } from '../../../shared/ui/button/button.tsx';
import styles from './tournament.module.scss';
import { Timestamp } from 'firebase/compat';

interface Props {
  tournament: TournamentProp;
}

export interface TournamentProp {
  id: string;
  name: string;
  prize: number;
  startAt: Timestamp;
  games: string[];
  maxPlayers: number;
  players: unknown[];
  type: string;
}

export function Tournament({ tournament }: Props) {
  const formattedDate = new Date(
    tournament.startAt.seconds || tournament.startAt
  ).toLocaleDateString();

  return (
    <div className={styles.tournament}>
      <div className={styles.tournament__header}>
        <div className={styles.tournament__header_prize}>
          <span className={styles.tournament__header_prize_name}>Prize: </span>
          <span className={styles.tournament__header_prize_value}>
            {tournament.prize}
          </span>
        </div>
      </div>

      <div className={styles.tournament__content}>
        <p className={styles['tournament__content_start-date']}>
          {formattedDate}
        </p>
        <p className={styles.tournament__content_name}>{tournament.name}</p>
      </div>

      <div className={styles.tournament__games}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Logo_of_Brawl_Stars.svg/800px-Logo_of_Brawl_Stars.svg.png"
          alt=""
        />
      </div>

      <div className={styles.tournament__footer}>
        <span className={styles.tournament__footer_count}>
          <span className={styles.tournament__footer_count_highlighted}>
            {tournament.players.length}
          </span>
          /{tournament.maxPlayers}
        </span>

        <div className={styles.tournament__footer_buttons}>
          <Button disabled={false} title={'Join'} />

          <div className={styles.ournament__footer_buttons_favourite}>
            <Button disabled={false} title={'Add to favourite'} />
          </div>
        </div>
      </div>
    </div>
  );
}
