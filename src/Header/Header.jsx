import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import "./Header.css";
export default function Header(props) {
  const { setUserPost, users, setUsers } = props;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const [open, setOpen] = useState(false);
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
        <nav class="tm-nav" id="tm-nav">
          <ul>
            <li class="tm-nav-item active">
              <a href="index.html" class="tm-nav-link">
                <i class="fas fa-home"></i>
                All Users Posts
              </a>
            </li>
            <li class="tm-nav-item">
              <button
                class="btn btn-toggle align-items-center rounded collapsed tm-nav-link"
                data-bs-toggle="collapse"
                aria-controls="example-collapse-text"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                Users
              </button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    {users?.map((user) => {
                      return (
                        <div>
                          <a
                            onClick={() => {
                              setUserPost(user.id);
                            }}
                            class="tm-nav-link"
                          >
                            {" "}
                            <li>{user.name}</li>
                          </a>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </Collapse>
            </li>
            <li class="tm-nav-item">
              <a href="about.html" class="tm-nav-link">
                <i class="fas fa-users"></i>
                About
              </a>
            </li>
            <li class="tm-nav-item">
              <a href="contact.html" class="tm-nav-link">
                <i class="far fa-comments"></i>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div class="tm-mb-65">
          <a
            rel="nofollow"
            href="https://fb.com/templatemo"
            class="tm-social-link"
          >
            <i class="fab fa-facebook tm-social-icon"></i>
          </a>
          <a href="https://twitter.com" class="tm-social-link">
            <i class="fab fa-twitter tm-social-icon"></i>
          </a>
          <a href="https://instagram.com" class="tm-social-link">
            <i class="fab fa-instagram tm-social-icon"></i>
          </a>
          <a href="https://linkedin.com" class="tm-social-link">
            <i class="fab fa-linkedin tm-social-icon"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
