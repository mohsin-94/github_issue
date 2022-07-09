import React, { useState } from "react";
import { GoRepo, GoBell, GoStar, GoRepoForked } from "react-icons/go";
import { listItem } from "./data";

import styled from "styled-components";
function Header() {
  return (
    <Wrapper className="container-fluid pt-3">
      <div className="row mb-3">
        <div className="col-sm-6">
          <div className="d-flex mb-3 px-3 px-md-4 px-lg-5">
            <div className="d-flex flex-wrap flex-items-center">
              <GoRepo className="mr-2" />
              <strong>
                <span className="author blue-color">facebook</span>
                <span className="mx-2">/</span>
                <span className="mr-2 blue-color">react</span>
                <span className="Label Label--secondary v-align-middle mr-1">
                  Public
                </span>
              </strong>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <ul className="d-flex flex-wrap justify-content-end">
            <li className="mr-2 mb-2">
              <div className="btn-sm btn p-0">
                <span className="px-2 py-1 d-inline-block">
                  <GoBell className="mr-2" />
                  <strong>Notification</strong>
                  <span className="notify-count">
                    <strong>0</strong>
                  </span>
                </span>
              </div>
            </li>
            <li className="mr-2 mb-2">
              <div className="btn-sm btn p-0">
                <span className="px-2 py-1 d-inline-block">
                  <GoStar className="mr-2" />
                  <strong>Star</strong>
                </span>
                <span className="btn-right-side px-2 py-1 d-inline-block">
                  <strong>178.5k</strong>
                </span>
              </div>
            </li>
            <li className="mr-2 mb-2">
              <div className="btn-sm btn p-0">
                <span className="px-2 py-1 d-inline-block">
                  <GoRepoForked className="mr-2" />
                  <strong>Fork</strong>
                </span>
                <span className="btn-right-side px-2 py-1 d-inline-block">
                  <strong>35k</strong>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <ul className="list-style-none d-flex flex-wrap justify-content-between mb-0 issue_list">
            {listItem.map((item) => {
              const { id, name, icon, issue } = item;
              return (
                <li key={id}>
                  <a href="#">
                    <span className="mr-1">{icon}</span>
                    {name}
                    {issue ? issue : ""}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #f6f8fa;
  border-bottom: 1px solid #dee2e6;
  a {
    text-decoration: none;
    color: #57606a;
  }
  .blue-color {
    color: #0d6efd;
  }
  .notify-count {
    width: 18px;
    height: 18px;
    background: #ddd;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-left: 0.25rem;
  }
  .icon__issue {
  }
  .issue_list {
    padding: 0 0 1rem 0;
    margin-left: 2rem;
  }
  .icon__issue {
    background: #ddd;
    margin-left: 0.5rem;
    border-radius: 28px;
    padding: 0 5px;
  }
`;

export default Header;
