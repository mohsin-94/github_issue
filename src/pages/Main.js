import React from "react";
import styled from "styled-components";
import {
  GoIssueOpened,
  GoCheck,
  GoReport,
  GoGitPullRequest,
} from "react-icons/go";
import profile from "../images/avatar.jpg";
import { useGlobelContext } from "../context";
import { innerList } from "./data";
import Loading from "./Loading";
function Main() {
  const { data, isLoading } = useGlobelContext();
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper className="container-fluid py-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="box">
            <div className="box__head d-flex justify-content-between">
              <div className="col-sm-4">
                <GoIssueOpened className="mr-2" />
                <strong className="mr-2">625 Open</strong>
                <GoCheck className="mx-2" />
                <span>10104 Closed</span>
              </div>
              <div className="col-sm-6">
                <ul className="list-style-none d-flex flex-wrap justify-content-between m-0">
                  {innerList.map((item) => {
                    const { id, name } = item;
                    return (
                      <li key={id}>
                        <a href="#" className="dropdown">
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="box__body">
            {data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className="box_issue--list w-100">
                    <div className="row w-100">
                      <div className="col-sm-9 d-flex">
                        <GoIssueOpened className="mx-2 issue--icon" />
                        <a href={item.html_url} className="box__body--link">
                          <h4>
                            {item.title}
                            {item.labels.map((dataItem) => {
                              const { id, name, color } = dataItem;
                              return (
                                <span
                                  className="status"
                                  key={id}
                                  style={{
                                    backgroundColor: `#${color}`,
                                    color: `${
                                      name === "Type: Bug" ||
                                      name === "dependencies" ||
                                      name === "React Core Team" ||
                                      name === "Type: Question"
                                        ? "#fff"
                                        : ""
                                    }`,
                                  }}
                                >
                                  {name}
                                </span>
                              );
                            })}
                          </h4>

                          <p className="m-0">
                            #{item.number} {item.state}{" "}
                            {(new Date(item.updated_at).getSeconds() <= 60 &&
                              new Date(item.updated_at).getSeconds() +
                                ` sec `) ||
                              (new Date(item.updated_at).getMinutes() <= 60 &&
                                new Date(item.updated_at).getMinutes() +
                                  ` min `) ||
                              (new Date(item.updated_at).getHours() <= 24 &&
                                new Date(item.updated_at).getHours() +
                                  ` hours `) ||
                              (new Date(item.updated_at).getMonth <= 30 &&
                                new Date(item.updated_at).getMonth() +
                                  ` month `)}
                            ago by {item.user.login}
                          </p>
                        </a>
                      </div>
                      <div className="col-sm-3">
                        <div className="d-flex justify-content-between flex-items-center">
                          {item.pull_request ? (
                            <a href={item.pull_request.html_url}>
                              <GoGitPullRequest className="font-125 mr-1" />
                              <strong>1</strong>
                            </a>
                          ) : (
                            <a href="#" style={{ visibility: "hidden" }}>
                              <GoGitPullRequest className="font-125 mr-1" />
                              <strong>1</strong>
                            </a>
                          )}

                          <div className="profile__group">
                            <span className="profile__icon">
                              <img
                                src={item.user.avatar_url}
                                alt={item.user.login}
                              />
                            </span>
                          </div>
                          <a href={`${item.html_url}`}>
                            <GoReport className="font-125 mr-1" />
                            <strong>{item.comments}</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  a {
    text-decoration: none;
    color: #57606a;
  }
  .box__body--link {
    color: #000;
  }
  .box_issue--list {
    border: 1px solid #dee2e6;
    border-top: none;
    padding: 0.75rem;
    display: flex;
  }
  .box_issue--list h4 {
    font-size: 1.25rem;
  }
  .issue--icon {
    font-size: 1.25rem;
    color: green;
    width: 50px;
  }
  .box_issue--list p {
    color: #57606a;
  }
  .status {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 14px;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .confirm_color {
    background-color: #d3c5f9;
  }
  .dev_color {
    background-color: #fbca00;
  }
  .bug_color {
    background-color: #b60104;
    color: #fff;
  }
  .profile__group {
    position: relative;
    width: calc(100% - 95px);
    text-align: center;
    height: 30px;
  }
  .profile__icon {
    width: 30px;
    height: 30px;
    overflow: hidden;
    display: inline-block;
    border-radius: 50px;
    box-shadow: 1px 2px 0px #d3d3d3;
  }
  .profile__icon img {
    width: 100%;
  }
  .profile__icon--1 {
    transform: translateX(-50%);
  }
`;

export default Main;
