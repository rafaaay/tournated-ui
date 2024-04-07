import React from 'react';

function ServiceCard(props) {
    const title = props.title;
    const price = props.price;

    return (
        <article className='service'>
            <div className='service__img'>
                <img src='./club/img_service-bg.jpg' alt='service picture' />
                <span className='service__price'>{price}</span>
            </div>

            <div className='service__info'>
                <div className='service__title'>
                    <img src='./club/icon_tennis.svg' alt='service picture' />
                    <h3 className='card_heading'>{title}</h3>
                </div>

                <div className='service__btn'>
                    <a href='#' className='btn'>Booking</a>
                </div>
            </div>
        </article>
    );
}

export default ServiceCard;