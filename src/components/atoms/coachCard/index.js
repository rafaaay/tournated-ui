import React from 'react';

function CoachCard() {
    return (
        <article className='coach'>
            <div className='coach__avatar'>
                <img src='./club/img_coach.jpg' alt='coach picture' />
                <span className='badge'>Rising talent</span>
            </div>

            <div className='coach__info'>
                <h5 className='coach__name'>Courtney Lewis</h5>
                <div className='coach__location'>
                    <img src='./club/img_usa.svg' />
                    <span>USA, New Your</span>
                </div>
            </div>

            <div className='coach__sports'>
                <div className='sports'>
                    <img src='./club/icon_tennis.svg' />
                    <span>Beach Volleyball</span>
                </div>

                <div className='sports'>
                    <img src='./club/icon_tennis.svg' />
                    <span>Tennis</span>
                </div>
            </div>

            <footer className='coach__footer'>
                <div className='students'>
                    <span className='number'>45</span>
                    <span className='title'>Students</span>
                </div>

                <div className='website'>
                    <a href='#' className='btn'>Personal page<img src='./club/icon_chevron-fwd.svg' /></a>
                </div>
            </footer>
        </article>
    );
}

export default CoachCard;