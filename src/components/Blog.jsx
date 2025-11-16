import { useEffect, useState } from "react";
import "../style/blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching Blogs:", err));
  }, []);

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div className="blog-container">
      <div className="blog-left">
        <p className="blog-lable">Latest Blog and News</p>
        <h3 className="blog-title">
          Check Out Our Latest Blog <span>and News Update</span>
        </h3>
      </div>

      <div className="blog-right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui <span>lacinia gravida. Nulla quis nulla leo.</span>
          Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>

      <div className="blog-updates">
        {blogs.map((b) => {
          const isExpanded = expandedBlog === b.id;

          return (
            <div key={b.id} className="blog-news">
              <div className="blog-img">
                <img src={b.imageUrl} alt={b.title} />
              </div>

              <div className="blog-created">
                <p className="blog-time-created">{b.created}</p>
                <h6 className="blog-small-text">{b.title}</h6>

                <div
                  className={`blog-description-wrapper ${
                    isExpanded ? "expanded" : ""
                  }`}
                >
                  <p className="blog-description">{b.description}</p>
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => toggleReadMore(b.id)}
                >
                  {isExpanded ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
