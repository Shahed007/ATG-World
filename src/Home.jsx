import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Article from "./components/Article";

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="container h-100 ">
          <div className="pt-5 w-100 d-flex d-sm-none  justify-content-between align-items-center">
            <Link to="/" className="text-light" style={{ fontSize: "3rem" }}>
              <MdArrowBack />
            </Link>
            <button
              type="button"
              className="btn btn-outline-light px-4 py-3 join-btn-outline"
            >
              Join Group
            </button>
          </div>
          <div className="d-flex flex-column justify-content-end align-items-start h-100 hero-section-text-box">
            <h1 className="text-light ">Computer Engineering</h1>
            <h4 className="text-light">
              142,765 Computer Engineers follow this
            </h4>
          </div>
        </div>
      </section>
      <Article></Article>
    </main>
  );
};

export default Home;
