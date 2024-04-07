import React from 'react';
import ClubHeader from './clubHeader';
import ClubTabs from './clubTabs';
import Services from '../../sections/services';
import Events from '../../sections/events';

function Club() {
  return (
    <main className='club'>
      <ClubHeader />
      <ClubTabs />
      <div className='club__content'>
        <Services />
        <Events />
      </div>
    </main>
  );
}

export default Club;