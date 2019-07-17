import React from 'react';

const CarouselItem = ({ image, idx }) => {
  console.log('Image Data:', image);

  var calculatePrice = (offer, min, max) => { // expected algorithm to break
    // if 0 no special deal
    if (offer === 0) {
      return (
        <span>
          <p>
            ${min} - ${max}
          </p>
        </span>
      )
    } else if (offer === 1) { // if 1 then limited time offer
      return (
        // css test

        <span className="price-special">
          <p className="strikethrough">${min} - ${max}</p>
          Limited Time Offer ${min - Math.floor(min * .2)} - ${max - Math.floor(max * .2)}
        </span>
      )
    } else { // if 2 then on sale
      return (
        <span className="price-special">
          <p className="strikethrough">${min} - ${max}</p>
          On Sale ${min - Math.floor(min * .15)} - ${max - Math.floor(max * .15)}
        </span>
      )
    }
  }

  return (
    <div className="swiper-slide">
      <span id={`img ${idx}`}>
        <img src={image['url']} />
        <p>{image['name']}</p>
        <p>
          {
            image['limited_offer'] ? calculatePrice(1, image['min_price'], image['max_price']) :
              (image['on_sale'] ? calculatePrice(2, image['min_price'], image['max_price']) :
                (calculatePrice(0, image['min_price'], image['max_price'])))
          }
        </p>
      </span>
    </div>
  )
}

export default CarouselItem;