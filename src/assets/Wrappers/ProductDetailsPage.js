import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  height: 100vh;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin: 10px 0;
  }

  .images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default Wrapper;
