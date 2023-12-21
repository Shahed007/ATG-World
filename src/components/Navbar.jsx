import { Link } from "react-router-dom";
import logo from "../assets/logo/whole.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-lg h-7">
      <div className="container main-navbar">
        <Link to="/" className="navbar-brand  d-md-block d-none" href="#">
          <img src={logo} alt="logo" />
        </Link>

        <form className="d-flex align-items-center mx-md-auto  ">
          <div className="input-group w-100 position-relative ">
            <span className="position-absolute search-icon ">
              <CiSearch />
            </span>
            <input
              type="text"
              className="form-control form-control-lg w-100"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <div>text</div>
      </div>
    </nav>
  );
};

export default Navbar;
