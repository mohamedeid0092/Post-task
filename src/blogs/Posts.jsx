import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Posts.css";
import Post from "./components/Post";
export default function Posts(props) {
  const [postList, setPostList] = useState(null);
  const [postID, setPostID] = useState(null);
  const [openPostDetails, setOpenPostDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);
  const [searchPost, setSearchPost] = useState(null);
  const { userPosts, users } = props;

  const [searchSubmit, setSearchSubmit] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPostList(res.data);
    });
  }, []);

  useEffect(() => {
    if (userPosts !== null) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${userPosts}`)
        .then((res) => {
          setPostList(res.data);
        });
    }
  }, [userPosts]);

  useEffect(() => {
    if (searchPost !== null && searchSubmit === true) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?q=${searchPost}`)
        .then((res) => {
          setPostList(res.data);
          setSearchSubmit(false);
        });
    }
  }, [searchPost, searchSubmit]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords = postList?.slice(indexOfFirstRecord, indexOfLastRecord);
  let nPages = Math.ceil(postList?.length / recordsPerPage);
  let pageNumbers = [...Array(nPages || 0 + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div class="container-fluid">
      {openPostDetails === false && (
        <main class="tm-main">
          <div class="row tm-row">
            <div class="col-12">
              <form class="form-inline tm-mb-80 tm-search-form">
                <input
                  class="form-control tm-search-input"
                  name="query"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  onChange={(e) => {
                    setSearchPost(e.target.value);
                  }}
                />
                <button
                  class="tm-search-button"
                  type="button"
                  onClick={() => {
                    setSearchSubmit(true);
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
          <div class="row tm-row">
            {currentRecords?.map((post) => {
              return (
                <article class="col-12 col-md-6 tm-post">
                  <hr class="tm-hr-primary" />
                  <a
                    onClick={() => {
                      setPostID(post.id);
                      setOpenPostDetails(true);
                    }}
                    class="effect-lily tm-post-link tm-pt-60"
                  >
                    <div class="tm-post-link-inner">
                      <img src="img/img-01.jpg" alt="Image" class="img-fluid" />
                    </div>

                    <h2 class="tm-pt-30 tm-color-primary tm-post-title">
                      {post.title}
                    </h2>
                  </a>
                  <p class="tm-pt-30">{post.body}</p>
                </article>
              );
            })}
          </div>
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" onClick={prevPage} href="#">
                  Previous
                </a>
              </li>
              {pageNumbers?.map((pgNumber) => (
                <li
                  key={pgNumber}
                  className={`page-item ${
                    currentPage == pgNumber ? "active" : ""
                  } `}
                >
                  <a
                    onClick={() => setCurrentPage(pgNumber)}
                    className="page-link"
                    href="#"
                  >
                    {pgNumber}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a className="page-link" onClick={nextPage} href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </main>
      )}
      {openPostDetails === true && <Post postID={postID} users={users} />}
    </div>
  );
}
