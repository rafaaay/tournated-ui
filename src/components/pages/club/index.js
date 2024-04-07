import React from 'react';
import ClubHeader from './clubHeader';
import ClubTabs from './clubTabs';
import Services from '../../sections/services';
import Events from '../../sections/events';
import Gallery from '../../sections/gallery';
import Coaches from '../../sections/coaches';
import Classes from '../../sections/classes';

function Club() {
  return (
    <main className='club'>
      <ClubHeader />
      <ClubTabs />
      <div className='club__content'>
        <Services />
        <Events />
        <Gallery />
        <Coaches />
        <Classes />
      </div>
    </main>
  );
}

export default Club;