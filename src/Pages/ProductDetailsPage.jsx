import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "../Components/Loading";
import Wrapper from "../assets/Wrappers/ProductDetailsPage";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5008/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <Wrapper>

    
    <div>
      <h2>{product.title}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Location: {product.location}</p>
      <p>Seller Name: {product.seller.name}</p>
      <p>Seller Email: {product.seller.email}</p>
      <p>Created At: {product.createdAt}</p>
      <h3>Images</h3>
      <div className="images">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={`Product image ${index + 1}`}/>
        ))}
      </div>
    </div>
    </Wrapper>
  );
};

export default ProductDetailsPage;