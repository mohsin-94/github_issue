import React from "react";
import { GoMarkGithub } from "react-icons/go";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper className="container-fluid pt-4 pt-3">
      <div className="row">
        <div className="d-flex flex-wrap flex-items-center border-top">
          <ul className="list-style-none d-flex flex-wrap col-sm-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0 justify-content-between">
            <li className="mr-2 mr-lg-0">
              <a href="#">Terms</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Privacy</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Security</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Status</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Docs</a>
            </li>
          </ul>
          <ul className="list-style-none d-flex flex-wrap col-sm-2 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0 justify-content-center">
            <li className="mr-2 mr-lg-0">
              <a href="#" className="githubIcon">
                <GoMarkGithub />
              </a>
            </li>
          </ul>
          <ul className="list-style-none d-flex flex-wrap col-sm-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0 justify-content-between">
            <li className="mr-2 mr-lg-0">
              <a href="#">Contact GitHub</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Pricing</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">API</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Training</a>
            </li>
            <li className="mr-2 mr-lg-0">
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

export default Footer;
