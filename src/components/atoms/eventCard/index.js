import React from 'react';

function EventCard(props) {
    const title = props.title;
    const price = props.price;

    return (
        <article className='event'>
            <header className='event__header'>
                <div className='event__header-content'>
                    <div className='event__img'>
                        <img src='./club/img_event.jpg' alt='event picture' />
                    </div>

                    <div className='event__info'>
                        <h3 className='card_heading'>WaveWarrior Challenge</h3>
                        <div className='event__tags'>
                            <span>Upcoming</span>
                            <span>Event</span>
                        </div>
                    </div>

                    <img src='./club/icon_tennis.svg' alt='service picture' className='event__icon' />
                </div>
                
                <div className='event__address'>
                    <img src='./club/img_usa.svg' alt='usa flag picture' />
                    <span>USA, New Your, 123 Main Street</span>
                </div>
            </header>

            <div className='event__instructor'>
                <div className='instructor'>
                    <img src='./club/img_usa.svg' alt='usa flag picture' />
                    <span>Courtney Lewis</span>
                </div>

                <div className='rating'>
                    <span>4/12</span>
                </div>
            </div>

            <div className='event__timing'>
                <div className='date'>
                    <span className='value'>01.04.24</span>
                    <span className='title'>Date</span>
                </div>

                <div className='start'>
                    <span className='value'>15:30</span>
                    <span className='title'>Start</span>
                </div>

                <div className='duration'>
                    <span className='value'>1 day</span>
                    <span className='title'>Duration</span>
                </div>
            </div>

            <footer className='event__footer'>
                <div className='event__price'>
                    <span>€15-50</span>
                </div>

                <div className='event__btn'>
                    <a href='#' className='btn'>Join</a>
                </div>
            </footer>
        </article>
    );
}

export default EventCard;