import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <Wrapper>
      <div className="Container">
        <Navbar />
      </div>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  .Container {
    position: absolute;
    right: 18rem;
    top: 2rem;
    width: 80rem;
    height: 45rem;
    background-color: #e5e5e5;

    background: #f8f9fb;
    border-radius: 30px 30px 0px 0px;
  }
`;
