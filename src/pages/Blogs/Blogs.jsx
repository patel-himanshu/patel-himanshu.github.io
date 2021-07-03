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
          Sorry, I'm currently working on this section. Return after a few days
          to see what's new.
          <br />
          Return to <Link to="/">Homepage</Link>.
        </div>
      </section>
    </article>
  );
};

export default Blogs;
