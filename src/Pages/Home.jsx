import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../Components/ProductCard";
import { Loading } from "../Components/Loading";
import Wrapper from "../assets/Wrappers/Home";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5008/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Wrapper>
    <div className="product-list">
      {loading ? (
        <Loading />
      ) : (
        <div className="home-page-products">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div> 
      )}
    </div>
    </Wrapper>
  );
};


export default Home;
