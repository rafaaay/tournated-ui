import React from 'react';
import ServiceCard from '../../atoms/serviceCard';

function Services() {
  return (
    <section className='services'>
        <h2 className='section_heading'>Services</h2>

        <nav className='tabs'>
            <a href='#' className='tab active'>
                <span>List view</span>
            </a>

            <a href='#' className='tab'>
                <span>Calendar view</span>
            </a>
        </nav>

        <div className='services__content'>
            <ServiceCard title="Tennis" price="€10-15" />
            <ServiceCard title="Tennis" price="€10-15" />
            <ServiceCard title="Tennis" price="€10-15" />
            <ServiceCard title="Tennis" price="€10-15" />
            <ServiceCard title="Tennis" price="€10-15" />
            <ServiceCard title="Tennis" price="€10-15" />
        </div>
    </section>
  );
}

export default Services;