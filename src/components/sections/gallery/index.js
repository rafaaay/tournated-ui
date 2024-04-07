import React from 'react';

function Gallery() {
  return (
    <section className='gallery'>
      <h2 className='section_heading'>Gallery</h2>

      <div className='gallery__content'>
        <div className='gallery__item'>
            <img src='./club/img_gallery.jpg' />
        </div>

        <div className='gallery__item'>
            <img src='./club/img_gallery.jpg' />
        </div>

        <div className='gallery__item'>
            <img src='./club/img_gallery.jpg' />
        </div>

        <div className='gallery__item'>
            <img src='./club/img_gallery.jpg' />
        </div>

        <div className='gallery__item'>
            <img src='./club/img_gallery.jpg' />
        </div>
      </div>
    </section>
  );
}

export default Gallery;