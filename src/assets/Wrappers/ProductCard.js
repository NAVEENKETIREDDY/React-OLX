
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: #fff;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  width: 250px;
  margin: 10px;
  padding: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center; 

  img {
    width: 100%; 
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #555;
  }



 
  p.price {
    font-weight: bold;
    color: #d9534f; 
  }
`;

export default Wrapper;
