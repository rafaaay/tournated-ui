import React from 'react';
import EventCard from '../../atoms/eventCard';

function Events() {
  return (
    <section className='events'>
      <h2 className='section_heading'>Upcoming Events</h2>

      <div className='events__content'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
}

export default Events;