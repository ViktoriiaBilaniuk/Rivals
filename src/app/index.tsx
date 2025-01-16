import { Tabs } from '../shared/ui/tabs';

function App() {
  return (
    <>
      <Tabs
        tabs={[
          { name: 'Home', link: '/' },
          { name: 'Tournaments', link: '/tournaments' }
        ]}
      />
      App works fine!
    </>
  );
}

export default App;
