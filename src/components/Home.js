import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <Wrapper>
      <div className="Container">
        {/* <Navbar /> */}
        <div className="firstbox"></div>
        <div className="secondbox"></div>
        <div className="thirdbox"></div>
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
  .firstbox {
    position: absolute;
    top: 8rem;
    right: 3rem;
    width: 25rem;
    height: 8rem;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(34, 34, 34, 0.16);
    border-radius: 15px;
  }
  .secondbox {
    position: absolute;
    top: 17.5rem;
    right: 3rem;
    width: 35rem;
    height: 8rem;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(34, 34, 34, 0.16);
    border-radius: 15px;
  }
  .thirdbox {
    position: absolute;
    top: 27.5rem;
    right: 3rem;
    width: 42rem;
    height: 8rem;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(34, 34, 34, 0.16);
    border-radius: 15px;
  }
`;
