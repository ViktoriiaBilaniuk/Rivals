import styles from './create-tournament.module.scss';
import { useState } from 'react';
import { Input } from '../../../shared/ui/input/input.tsx';
import { Datepicker } from '../../../shared/ui/datepicker/datepicker.tsx';
import { InputNumber } from '../../../shared/ui/input-number/input-number.tsx';
import { Button } from '../../../shared/ui/button/button.tsx';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import firebaseConfig from '../../../../firebase.config.ts';

export function CreateTournament() {
  const [form, setForm] = useState({
    name: '',
    games: ['FORTNITE'],
    maxPlayers: 0,
    prize: 0,
    startAt: new Date(),
    type: 'not_started',
    players: []
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.maxPlayers || !form.startAt || !form.prize) {
      alert('Please fill all the fields');
      return;
    }

    const database = getFirestore(firebaseConfig);
    const collectionRef = collection(database, 'tournaments');

    setSubmitLoading(true);
    addDoc(collectionRef, form)
      .then(() => alert('Tournament created successfully'))
      .finally(() => setSubmitLoading(false));
  };

  const onChange = (key: string, value: string | number) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleFormSubmit} className="content__form">
          <Input
            label={'Name'}
            value={form.name}
            onChange={(event) => onChange('name', event.target.value)}
          />
          <br />
          <InputNumber
            label={'Max Players'}
            onValueChange={(event) => onChange('maxPlayers', event)}
          />
          <br />
          <Datepicker
            label={'Start At'}
            min={new Date().toISOString().split('T')[0]}
            onValueChange={(event) => onChange('startAt', event)}
          />
          <br />
          <InputNumber
            label={'Prize'}
            onValueChange={(event) => onChange('prize', event)}
          />

          <Button type={'submit'} disabled={submitLoading} title={'Submit'} />
        </form>
      </div>
    </div>
  );
}
