import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  flex-direction: column; 
  height: 100vh;  
   

  .login-box {
    background-color: #fff; 
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;  
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    position: absolute; 
    top: 70px;
    width: 100%;
    text-align: center;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  button[type="submit"] {
    background-color: green;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    
  }

  .go-to-home-page {
    width: 100%;
    text-align: center;
    margin-top: 20px;  
    
    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      
      font-size: 1rem;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

export default Wrapper;
