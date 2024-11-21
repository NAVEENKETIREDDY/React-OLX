import styled from "styled-components";

const Wrapper = styled.div`
/* Navbar Container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
 
}

/* React-OLX as a link */
.navbar .name {
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: #3498db; 
 
}

.navbar .name:hover {
  text-decoration: underline;
}

/* Links and buttons */
.navbar a,
.navbar button {
 
  color: white;
  background-color: green;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}





`

export default Wrapper;