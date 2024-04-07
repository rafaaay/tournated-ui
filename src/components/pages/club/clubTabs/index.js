import React from 'react';

function ClubTabs() {
  return (
    <nav className='tabs'>
      <a href='#' className='tab active'>
        <img src='./club/icon_device.svg' alt='club picture' />
        <span>Online booking</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>Classes</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>Events</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>Coaches</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>Members</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>Gallery</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>News</span>
      </a>

      <a href='#' className='tab'>
        <img src='./club/icon_class.svg' alt='club picture' />
        <span>Contacts</span>
      </a>
    </nav>
  );
}

export default ClubTabs;