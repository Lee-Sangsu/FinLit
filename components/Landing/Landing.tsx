import React from 'react';
import LandingIndex from './LandingIndex'
import LandingPerInfo from './LandingPerlInfo';

export default function Landing ({styles}: any) {
  const [landingIndex, setLandingIndex] = React.useState(0);

  const nextLandingIndex = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === "0-next") {
      setLandingIndex(1);
    } else if (event.currentTarget.name === "1-next") {
      setLandingIndex(2);
    }
  };

  return (<>
      <main className={styles.main_landing}>
        {landingIndex === 0 ? <LandingIndex nextLandingIndex={nextLandingIndex} styles={styles} />
        : <LandingPerInfo nextLandingIndex={nextLandingIndex} styles={styles} />}
      </main>
    </>)
};