import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <article className="page-content">
      {/* "About Me" section */}
      <section className="page-section">
        <header>
          <span className="section-header">Blogs</span>
        </header>
        <div style={{ textAlign: "center" }}>
          I'm currently working on this section.
          <br />
          Return after a few days to see what's new.
          <br />
          <br />
          Return to{" "}
          <Link to="/" className="underline-animation">
            Homepage
          </Link>
          .
        </div>
      </section>
    </article>
  );
};

export default Blogs;
