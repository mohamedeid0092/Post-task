import React from "react";

export default function Footer() {
  return (
    <footer class="row tm-row">
      <hr class="col-12" />
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
      <button
        class="btn btn-toggle align-items-center rounded collapsed tm-nav-link"
        data-bs-toggle="collapse"
        data-bs-target="#home-collapse"
        aria-expanded="false"
      >
        Home
      </button>
      <div class="collapse" id="home-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li>
            <a href="#" class="link-dark rounded">
              Overview
            </a>
          </li>
          <li>
            <a href="#" class="link-dark rounded">
              Updates
            </a>
          </li>
          <li>
            <a href="#" class="link-dark rounded">
              Reports
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
