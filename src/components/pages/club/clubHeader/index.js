import React from 'react';

function ClubHeader() {
  return (
    <section className='club__header'>

        {/* info */}
        <div className='info'>
          <div className='picture'>
            <img src='./club/img_club.png' alt='club picture' />
            <span>Academy</span>
          </div>

          <div className='text'>
            <h1>Dynamic Force Sports Club</h1>

            <div className='location'>
              <img src='./club/img_usa.svg' alt='USA' />
              <span>USA, New Your, 123 Main Street</span>
              <a href='' className=''>Show on map</a>
            </div>

            <div className='timings'>
              <span className='status'>Open</span>
              <span className='time'>Closes at 9:00 p.m</span>
              <img src='./club/icon_caret-down.svg' alt='down arrow' />
            </div>
          </div>
        </div>

        {/* tags */}
        <div className='tags'>
          <ul>
            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>Equipment rental</span>
            </li>

            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>Free parking</span>
            </li>

            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>Changing rooms</span>
            </li>

            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>Kids playground</span>
            </li>

            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>WiFi</span>
            </li>

            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>Lockers</span>
            </li>

            <li className='tags__pill'>
              <img src='./club/icon_smiley.svg' alt='proper description' />
              <span>Free parking</span>
            </li>

            <li className='tags__view-all'>
              <a href='#'>view all</a>
            </li>
          </ul>
        </div>
      </section>
  );
}

export default ClubHeader;