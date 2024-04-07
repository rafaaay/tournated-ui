import React from 'react';

function SideNav() {

  return (
    <aside className='sidenav'>
        <header className='sidenav__header'>
            <img src='./tournated_logo.svg' alt='story image' />
        </header>

        <div className='sidenav__content'>
            <nav className='sidenav__nav'>
                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_dashboard.svg' alt='dashboard icon'></img>
                    <span>Dashboard</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_leagues.svg' alt='leagues icon'></img>
                    <span>Leagues</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_tournaments.svg' alt='tournaments icon'></img>
                    <span>Tournaments</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_athletes.svg' alt='athletes icon'></img>
                    <span>Athletes</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_teams.svg' alt='teams icon'></img>
                    <span>Teams</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_coaches.svg' alt='coaches icon'></img>
                    <span>Coaches</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_clubs.svg' alt='clubs icon'></img>
                    <span>Clubs</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_federations.svg' alt='federations icon'></img>
                    <span>Federations</span>
                </a>

                <a href='#' className='sidenav__link'>
                    <img src='./sidenav/icon_news.svg' alt='news icon'></img>
                    <span>News</span>
                </a>
            </nav>
        </div>

        <footer className='sidenav__footer'>
            <a href='#' className='btn'>Get Licence</a>
        </footer>
    </aside>
  );
}

export default SideNav;