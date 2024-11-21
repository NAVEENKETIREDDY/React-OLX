import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/ProductCard";

export const ProductCard = ({ id, title, price, location, images }) => {
  const navigate = useNavigate();
  

  return (
    <Wrapper>
    
    <div
      data-testid="product-card"
      onClick={() => navigate(`/product/${id}/view`)}
    >
      <img src={images[0]} alt={title} />
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>{location}</p>
    </div>
    </Wrapper>
  );
};

export default ProductCard;
