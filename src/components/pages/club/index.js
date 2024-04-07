import React from 'react';

function Club() {
  return (
    <main className='club'>
      <section className='club__header'>
        <div className='info'>
          <div className='picture'>
            <img src='./club/img_club.png' alt='club picture' />
            <span>Academy</span>
          </div>
        </div>

        <div className='tags'></div>
      </section>
    </main>
  );
}

export default Club;