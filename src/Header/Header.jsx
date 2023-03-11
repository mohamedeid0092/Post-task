import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import "./Header.css";
import { ReactComponent as FaceLogo } from "./../assets/images/facebook.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fafacebook } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const { setUserPost, users, setUsers, active, setActive } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <header class="tm-header" id="tm-header">
      <div class="tm-header-wrapper">
        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="tm-site-header">
          <div class="mb-3 mx-auto tm-site-logo">
            <i class="fas fa-times fa-2x"></i>
          </div>
          <h1 class="text-center">Blog Posts</h1>
        </div>
        <nav class="tm-nav">
          <ul>
            <li
              class={`tm-nav-item ${active === "all users" ? "active" : ""} `}
            >
              <a
                href="index.html"
                class="tm-nav-link"
                onClick={() => {
                  setActive("all users");
                }}
              >
                <i class="fas fa-home"></i>
                All Users Posts
              </a>
            </li>
            <li class={`tm-nav-item-2 ${active === "users" ? "active" : ""} `}>
              <button
                class="btn btn-toggle align-items-center collapsed tm-nav-link"
                data-bs-toggle="collapse"
                aria-controls="example-collapse-text"
                aria-expanded={open}
                onClick={() => {
                  setOpen(!open);
                  setActive("users");
                }}
              >
                Users
              </button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
                    {users?.map((user) => {
                      return (
                        <div>
                          <a
                            onClick={() => {
                              setUserPost(user.id);
                            }}
                            class="tm-nav-link-2"
                          >
                            <li>{user.name}</li>
                          </a>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </Collapse>
            </li>
            <li class={`tm-nav-item ${active === "about" ? "active" : ""} `}>
              <a class="tm-nav-link" onClick={() => setActive("about")}>
                <i class="fas fa-users"></i>
                About
              </a>
            </li>
            <li class={`tm-nav-item ${active === "contact" ? "active" : ""} `}>
              <a class="tm-nav-link" onClick={() => setActive("contact")}>
                <i class="far fa-comments"></i>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
