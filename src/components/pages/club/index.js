import React from 'react';
import ClubHeader from './clubHeader';
import ClubTabs from './clubTabs';
import Services from '../../sections/services';
import Events from '../../sections/events';
import Gallery from '../../sections/gallery';
import Coaches from '../../sections/coaches';

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
      </div>
    </main>
  );
}

export default Club;