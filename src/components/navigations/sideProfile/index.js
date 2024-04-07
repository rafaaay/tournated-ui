import React from 'react';

function SideProfile() {

  return (
    <aside className='sidenav closed'>
        <header className='sidenav__header'>
            <img src='./sideProfile/avatar.png' alt='Shahid Miah' />
        </header>

        <div className='sidenav__content'>
            <nav className='sidenav__nav'>
                <a href='#' className='sidenav__link'>
                    <img src='./sideProfile/icon_entries.svg' alt='entries icon'></img>
                    <span>My Entries</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sideProfile/icon_license.svg' alt='license icon'></img>
                    <span>My Licenses</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sideProfile/icon_teams.svg' alt='tournaments icon'></img>
                    <span>My Teams</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sideProfile/icon_get-license.svg' alt='athletes icon'></img>
                    <span>Get License</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sideProfile/icon_apply.svg' alt='teams icon'></img>
                    <span>Apply for New Role</span>
                </a>

                <a href='#' className='sidenav__link active'>
                    <img src='./sideProfile/icon_tournaments.svg' alt='coaches icon'></img>
                    <span>Tournaments</span>
                </a>
            </nav>
        </div>

        <footer className='sidenav__footer'>
            <a href='#' className='sidenav__link'>
                <img src='./sideProfile/icon_settings.svg' alt='settings icon'></img>
                <span>Settings</span>
            </a>

            <a href='#' className='sidenav__link'>
                <img src='./sideProfile/icon_logout.svg' alt='logout icon'></img>
                <span>Logout</span>
            </a>
        </footer>
    </aside>
  );
}

export default SideProfile;