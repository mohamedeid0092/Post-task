import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";
export default function Post(props) {
  const [postDetails, setPostDetails] = useState(null);
  const [ownedUser, setOwnedUser] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const { postID, users } = props;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => {
        setPostDetails(res.data);
      });
  }, [postID]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
      .then((res) => {
        setPostComments(res.data);
      });
  }, [postID]);

  useEffect(() => {
    if (postDetails)
      setOwnedUser(users?.filter((user) => user.id === postDetails.userId));
  }, [postDetails]);

  return (
    <>
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
            <h1 class="text-center">Xtra Blog</h1>
          </div>
          <nav class="tm-nav" id="tm-nav">
            <ul>
              <li class="tm-nav-item">
                <a href="index.html" class="tm-nav-link">
                  <i class="fas fa-home"></i>
                  Home
                </a>
              </li>
            </ul>
          </nav>
          <div class="tm-mb-65">
            <a href="https://facebook.com" class="tm-social-link">
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
          <p class="tm-mb-80 pr-5 text-white">
            Xtra Blog is a multi-purpose HTML template from TemplateMo website.
            Left side is a sticky menu bar. Right side content will scroll up
            and down.
          </p>
        </div>
      </header>
      <div class="container-fluid">
        <main class="tm-main">
          <div class="row tm-row">
            <div class="col-lg-8 tm-post-col">
              <div class="tm-post-full">
                <div class="mb-4">
                  <h2 class="pt-2 tm-color-primary tm-post-title">
                    {postDetails?.title}
                  </h2>
                  <p class="tm-mb-1">
                    posted by {ownedUser && ownedUser[0]?.name}
                  </p>
                  <p class="tm-mb-1">
                    company name : {ownedUser && ownedUser[0]?.company.name}
                  </p>
                  <p class="tm-mb-40">
                    mobile: {ownedUser && ownedUser[0]?.phone}
                  </p>
                  <p>{postDetails?.body}</p>

                  <span class="d-block text-right tm-color-primary">
                    Creative . Design . Business
                  </span>
                </div>

                <div>
                  <h2 class="tm-color-primary tm-post-title">Comments</h2>
                  <hr class="tm-hr-primary tm-mb-45" />
                  {postComments?.map((comment) => {
                    return (
                      <div class="tm-comment tm-mb-45">
                        <figure class="tm-comment-figure col-4">
                          <img
                            src="img/comment-1.jpg"
                            alt="Image"
                            class="mb-2 rounded-circle img-thumbnail"
                          />
                          <figcaption class="tm-color-primary text-center">
                            {comment.email}
                          </figcaption>
                        </figure>
                        <div className="col-8">
                          <h5 class="tm-color-primary tm-post-title">
                            {comment.name}
                          </h5>
                          <p>{comment.body}</p>
                          <div class="d-flex justify-content-between">
                            <a href="#" class="tm-color-primary">
                              REPLY
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <form action="" class="mb-5 tm-comment-form">
                    <h2 class="tm-color-primary tm-post-title mb-4">
                      Your comment
                    </h2>
                    <div class="mb-4">
                      <input class="form-control" name="name" type="text" />
                    </div>
                    <div class="mb-4">
                      <input class="form-control" name="email" type="text" />
                    </div>
                    <div class="mb-4">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="6"
                      ></textarea>
                    </div>
                    <div class="text-right">
                      <button class="tm-btn tm-btn-primary tm-btn-small">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <aside class="col-lg-4 tm-aside-col">
              <div class="tm-post-sidebar">
                <hr class="mb-3 tm-hr-primary" />
                <h2 class="mb-4 tm-post-title tm-color-primary">Categories</h2>
                <ul class="tm-mb-75 pl-5 tm-category-list">
                  <li>
                    <a href="#" class="tm-color-primary">
                      Visual Designs
                    </a>
                  </li>
                  <li>
                    <a href="#" class="tm-color-primary">
                      Travel Events
                    </a>
                  </li>
                  <li>
                    <a href="#" class="tm-color-primary">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#" class="tm-color-primary">
                      Video and Audio
                    </a>
                  </li>
                  <li>
                    <a href="#" class="tm-color-primary">
                      Etiam auctor ac arcu
                    </a>
                  </li>
                  <li>
                    <a href="#" class="tm-color-primary">
                      Sed im justo diam
                    </a>
                  </li>
                </ul>
                <hr class="mb-3 tm-hr-primary" />
                <h2 class="tm-mb-40 tm-post-title tm-color-primary">
                  Related Posts
                </h2>
                <a href="#" class="d-block tm-mb-40">
                  <figure>
                    <img
                      src="img/img-02.jpg"
                      alt="Image"
                      class="mb-3 img-fluid"
                    />
                    <figcaption class="tm-color-primary">
                      Duis mollis diam nec ex viverra scelerisque a sit
                    </figcaption>
                  </figure>
                </a>
                <a href="#" class="d-block tm-mb-40">
                  <figure>
                    <img
                      src="img/img-05.jpg"
                      alt="Image"
                      class="mb-3 img-fluid"
                    />
                    <figcaption class="tm-color-primary">
                      Integer quis lectus eget justo ullamcorper ullamcorper
                    </figcaption>
                  </figure>
                </a>
                <a href="#" class="d-block tm-mb-40">
                  <figure>
                    <img
                      src="img/img-06.jpg"
                      alt="Image"
                      class="mb-3 img-fluid"
                    />
                    <figcaption class="tm-color-primary">
                      Nam lobortis nunc sed faucibus commodo
                    </figcaption>
                  </figure>
                </a>
              </div>
            </aside>
          </div>
          <footer class="row tm-row">
            <div class="col-md-6 col-12 tm-color-gray">
              Design:{" "}
              <a
                rel="nofollow"
                target="_parent"
                href="https://templatemo.com"
                class="tm-external-link"
              >
                TemplateMo
              </a>
            </div>
            <div class="col-md-6 col-12 tm-color-gray tm-copyright">
              Copyright 2020 Xtra Blog Company Co. Ltd.
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
