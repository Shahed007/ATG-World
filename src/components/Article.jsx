import { useState } from "react";
import group from "../assets/icon/group.png";
import useArticle from "../api/useArticle";
const tabList = ["Article", "Event", "Education", "Job"];
const Article = () => {
  const [filter, setFilter] = useState("All");
  const [articles, number] = useArticle(filter);
  const [post, setPost] = useState("Write a Post");
  console.log(articles);
  console.log(number);
  return (
    <>
      <section className="article-section">
        <div className="container">
          <div className="border-bottom d-none justify-content-between align-items-center d-lg-flex">
            <ul className="nav">
              <li className="nav-item">
                <button
                  onClick={() => setFilter("All")}
                  className={`nav-link ${filter === "All" ? "active" : ""}`}
                  aria-current="page"
                >
                  All Posts(32)
                </button>
              </li>
              {tabList.map((list, idx) => (
                <li key={idx} className="nav-item">
                  <button
                    onClick={() => setFilter(list)}
                    className={`nav-link ${filter === list ? "active" : ""}`}
                  >
                    {list}
                  </button>
                </li>
              ))}
            </ul>
            <div className="article-section-tab mb-2">
              <div className="btn-group me-4">
                <button
                  type="button"
                  className="btn btn-light btn-lg dropdown-toggle py-3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="pe-4 ">{post}</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      onClick={() => setPost("Action")}
                      className="dropdown-item"
                      href="#"
                    >
                      Action
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setPost("Another action")}
                      className="dropdown-item"
                      href="#"
                    >
                      Another action
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setPost("Something else here")}
                      className="dropdown-item"
                      href="#"
                    >
                      Something else here
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      onClick={() => setPost("Separated link")}
                      className="dropdown-item"
                      href="#"
                    >
                      Separated link
                    </button>
                  </li>
                </ul>
              </div>
              <button className="btn btn-primary btn-lg py-3 flex align-items-center">
                <img src={group} alt="group" className="me-2" />
                <span>Join Group</span>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center d-lg-none article-section-mobile-tab">
            <h2 className="text-dark">Posts(356)</h2>
            <div className="btn-group me-4">
              <button
                type="button"
                className="btn btn-light btn-lg dropdown-toggle py-3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="pe-4 ">Filter: {filter}</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    onClick={() => setFilter("All")}
                    className="dropdown-item"
                    href="#"
                  >
                    All
                  </a>
                </li>
                {tabList.map((list, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setFilter(list)}
                      className="dropdown-item"
                      href="#"
                    >
                      {list}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">lkklkfd</div>
            <div className="col-lg-4 d-lg-block d-none">kjkjkfdfd</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
