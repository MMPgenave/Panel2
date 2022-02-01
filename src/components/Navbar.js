import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="Container">
        <h1>منوی پنل شماره 1</h1>
        <p>امروز پنج شنبه 25 دی ماه سال 1400 ساعت 11:10 </p>
        <div className="exit">exit</div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.div`
  .Container {
    position: absolute;
    top: 0;
    right: 0;

    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .Container h1 {
    margin-right: 4rem;

    font-family: "Vazir", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 58px;
    /* identical to box height */

    text-align: right;

    /* Gray I */

    color: #797877;
  }
  .Container p {
    margin-right: 25rem;

    font-family: "Vazir", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 31px;
    /* identical to box height */

    text-align: right;

    /* Gray II */

    color: #b2b2b2;
  }
  .exit {
    margin-left: 4rem;

    margin-right: 1.5rem;
    width: 8rem;
    height: 2rem;
    background: #e5e5e5;
    border-radius: 10px;
  }
`;
