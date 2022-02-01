import React from "react";
import styled from "styled-components";
import { digitsEnToFa } from "@persian-tools/persian-tools";

import { FaInstagram, FaBehance, FaFacebook } from "react-icons/fa";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <Wrapper>
      <div className="Container">
        <Navbar />
        <div className="firstbox">
          <div className="icon">
            <FaInstagram />
          </div>
          <p className="text">تعداد درخواست ها:</p>
          <h1>{digitsEnToFa(5)}</h1>
        </div>
        <div className="secondbox">
          <div className="icon">
            <FaBehance />
          </div>
          <p className="text">تعداد بازدیدهای امروز:</p>
          <h1>{digitsEnToFa(512)}</h1>
        </div>
        <div className="thirdbox">
          <div className="icon">
            <FaFacebook />
          </div>
          <p className="text">ایمیل شما :</p>
          <p className="email">mohammadmp14@gmail.com</p>
        </div>
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
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(34, 34, 34, 0.16);
    border-radius: 15px;
  }
  .icon {
    margin-right: 3rem;
    font-size: 2rem;
    margin-top: 0.6rem;
  }
  .text {
    font-size: 2rem;
    margin-right: 1rem;
    font-family: "Vazir", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 39px;
    /* identical to box height */

    text-align: right;

    /* Black II */

    color: #2c2c30;
  }
  .firstbox h1 {
    margin-right: 2rem;
    font-family: "Vazir", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 155px;
    /* identical to box height */

    text-align: right;

    /* Blue */

    color: #019cd5;
  }

  .secondbox {
    display: flex;
    align-items: center;
    position: absolute;
    top: 17.5rem;
    right: 3rem;
    width: 32rem;
    height: 8rem;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(34, 34, 34, 0.16);
    border-radius: 15px;
  }
  .secondbox h1 {
    margin-right: 2rem;
    font-family: "Vazir", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 155px;
    /* identical to box height */

    text-align: right;

    /* Blue */

    color: #fd3d39;
  }
  .thirdbox {
    display: flex;
    align-items: center;
    position: absolute;
    top: 27.5rem;
    right: 3rem;
    width: 42rem;
    height: 8rem;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(34, 34, 34, 0.16);
    border-radius: 15px;
  }
  .email {
    margin-right: 5rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-align: center;

    /* Black I */

    color: #222222;
  }
`;
