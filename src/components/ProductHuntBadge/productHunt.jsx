import React from 'react'
import styled from 'styled-components';

const ProductHunt = () => {

    const ProductHuntStyled = styled.div`
      width: 100%;
      display: flex;
      img {
        margin: auto;
      }

      @media screen and (max-width: 768px) {
        width: 150px;
        transform: rotate(90deg);
        transform-origin: left bottom;
        position: absolute;
        left: -9px;
      }
    `;
  return (
    <ProductHuntStyled>
      <a
        className="product_hunt"
        href="https://www.producthunt.com/posts/daily-stoic-reminders?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-daily&#0045;stoic&#0045;reminders"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=397280&theme=light"
          alt="Daily&#0032;Stoic&#0032;Reminders - A&#0032;new&#0032;stoic&#0032;teaching&#0032;everyday&#0032;to&#0032;help&#0032;you&#0032;lead&#0032;a&#0032;better&#0032;life | Product Hunt"
          style={{ width: "200px"}}
          width="200"
          height="54"
        />
      </a>
    </ProductHuntStyled>
  );
}

export default ProductHunt