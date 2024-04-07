import React from 'react';
import CoachCard from '../../atoms/coachCard';

function Coaches() {
  return (
    <section className='coaches'>
      <h2 className='section_heading'>Coaches</h2>

      <div className='coaches__content'>
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
      </div>
    </section>
  );
}

export default Coaches;