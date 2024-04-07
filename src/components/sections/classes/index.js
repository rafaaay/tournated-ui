import React from 'react';
import EventCard from '../../atoms/eventCard';

function Classes() {
  return (
    <section className='events'>
      <h2 className='section_heading'>Upcomings classes in Riga</h2>

      <div className='events__content'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
}

export default Classes;