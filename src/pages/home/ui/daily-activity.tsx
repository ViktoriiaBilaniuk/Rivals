interface Activity {
  logo: string;
  description: string;
}

interface DailyActivityProps {
  title: string;
  activities: Activity[];
}

export function DailyActivity({ title }: DailyActivityProps) {
  return (
    <div className="container">
      <div className="header">
        <div className="header__title">{title}</div>
      </div>

      <div className="list">
        {/*{activities.map((activity) => (*/}
        {/*  <div className="list__item">*/}
        {/*    <div className="list__item_logo">*/}
        {/*      <img src={} alt="" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
}
