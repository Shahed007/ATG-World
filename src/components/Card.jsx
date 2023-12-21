import PropTypes from "prop-types";
import viewsIcon from "../assets/icon/view.svg";
import { IoMdShare } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import calender from "../assets/icon/calender.svg";
import locationIcon from "../assets/icon/location.svg";
import jobIcon from "../assets/icon/job.svg";

const Card = ({ article }) => {
  console.log(article);
  return (
    <div className="card mb-4">
      {article?.article_image ? (
        <img
          src={article?.article_image}
          className="card-img-top"
          alt={article?.title}
        />
      ) : (
        ""
      )}
      <div className="card-body p-3">
        <div className="my-3">
          <h2>{article?.category === "article" ? "✍️ Article" : ""}</h2>
          <h2>{article?.category === "education" ? "🔬️ Education" : ""}</h2>
          <h2>{article?.category === "meetup" ? "🗓️ Meetup" : ""}</h2>
          <h2>{article?.category === "job" ? "💼️ Job" : ""}</h2>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="card-title font-size-26">{article?.title}</h5>

          <button className="btn btn-light fs-1 d-flex justify-content-center align-items-center details-button">
            <BsThreeDots />
          </button>
        </div>
        <div>
          <p className="card-text">
            {article?.description ? article.description : ""}
          </p>
          {article?.date ? (
            <div className="d-flex align-items-center location-date">
              <h3 className="d-flex align-items-center date">
                <img className="me-2" src={calender} alt="time" />
                <span className="text-color-primary fs-3 font-size-14">
                  {article?.date}
                </span>
              </h3>
              <h3 className="d-flex align-items-center">
                <img className="me-2" src={locationIcon} alt="location" />
                <span className="text-color-primary fs-3 font-size-14 ">
                  {article?.location}
                </span>
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {article?.analytics ? (
            <div className="d-flex align-items-center location-date">
              <h3 className="d-flex align-items-center date">
                <img className="me-2" src={jobIcon} alt="time" />
                <span className="text-color-primary fs-3 font-size-14">
                  {article?.analytics}
                </span>
              </h3>
              <h3 className="d-flex align-items-center">
                <img className="me-2" src={locationIcon} alt="location" />
                <span className="text-color-primary fs-3 font-size-14 ">
                  {article?.location}
                </span>
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center my-4 ">
          <div className="d-flex align-items-center">
            <img
              className="author_img me-3"
              src={article?.author_image}
              alt={article?.author_name}
            />
            <h3>{article?.author_name}</h3>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-5 view flex align-items-center">
              <img src={viewsIcon} alt="views icon" className="me-3" />
              <span>{article?.views}</span>
            </div>
            <button className="btn btn-share">
              <IoMdShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  article: PropTypes.object,
};

export default Card;
