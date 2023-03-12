import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";
import commentImg from "./../../assets/images/comment-1.jpg";

export default function Post(props) {
  const [postDetails, setPostDetails] = useState(null);
  const [ownedUser, setOwnedUser] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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

  const handleSubmit = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts/${postID}/comments/`, {
        name: name,
        email: email,
        body: comment,
      })
      .then((res) => {
        console.log(res);

        setPostComments((prev) => [...prev, res.data]);
      });
  };

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
                            src={commentImg}
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
                      <p> Your email</p>
                      <input
                        class="form-control"
                        name="name"
                        type="text"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-4">
                      <p> Name</p>
                      <input
                        class="form-control"
                        name="email"
                        type="text"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-4">
                      <p> Your Comment</p>
                      <textarea
                        class="form-control"
                        name="message"
                        rows="6"
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div class="text-right">
                      <button
                        class="tm-btn tm-btn-primary tm-btn-small"
                        type="button"
                        onClick={handleSubmit}
                      >
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
          </footer>
        </main>
      </div>
    </>
  );
}
