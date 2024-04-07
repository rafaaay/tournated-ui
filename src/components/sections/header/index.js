import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='header__content'>

        {/* Header Block */}
        <div className='header__block'>
          <div className='item'>
            <img src='./header/icon_volleyball.svg' alt='volleyball icon'></img>
          </div>

          <div className='item'>
            <img src='./header/icon_tennis.svg' alt='tennis icon'></img>
          </div>

          <div className='item'>
            <img src='./header/icon_union.svg' alt='union icon'></img>
          </div>

          <div className='location'>
            <img src='./header/icon_location.svg' alt='union icon'></img>
            <span>Latvia</span>
          </div>
        </div>

        {/* Header Search */}
        <div className='header__search'>
          <img src='./header/icon_search.svg' alt='search icon'></img>
          <input placeholder='Search' />
        </div>

        {/* Header Buttons */}
        <div className='header__buttons'>
          <a href='#' className='btn accent icon'>
            <img src='./header/icon_caret-down.svg' alt='dashboard icon' />
            <span>Booking</span>
          </a>

          <a href='#' className='btn light gradient-border icon'>
            <img src='./header/icon_add.svg' alt='dashboard icon' />
            <span>Create</span>
          </a>

          <a href='#' className='btn light icon'>
            <img src='./header/icon_dashboard.svg' alt='dashboard icon' />
            <span>Dashboard</span>
          </a>

          <a href='#' className='btn gradient icon'>
            <img src='./header/icon_pricing.svg' alt='pricing icon' />
            <span>Pricing</span>
          </a>
        </div>

        {/* Header Block */}
        <div className='header__block'>
          <a href='#' className='lang_select'>
            <img src='./header/icon_latvia.svg' alt='pricing icon' />
            <span>Latvian</span>
            <img src='./header/icon_caret-down-dark.svg' alt='caret icon' />
          </a>

          <a href='#'>
            <img src='./header/icon_notification.svg' alt='notification icon' />
          </a>
        </div>

      </div>  
    </header>
  );
}

export default Header;