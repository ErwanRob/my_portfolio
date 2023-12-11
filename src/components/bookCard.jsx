import { useState } from "react";
import Modal from "react-modal";
import Tag from "./tags";

function BookCard({
  title,
  byline,
  tags,
  description,
  img,
  carouselImg,
  gitHubLink,
}) {
  const [face, setFace] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    if (face === 0) {
      setFace(1);
    } else {
      setFace(0);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFace(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImg.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImg.length - 1 : prevIndex - 1
    );
  };

  const cubeClasses = `cube ${face === 0 ? "show-front" : "show-bottom"}`;

  return (
    <div className="book__card">
      <div className={cubeClasses}>
        <div className="cube__faceOne cube__face">
          <img
            src={img}
            className="cube__faceOne-img"
            alt="altrrr"
            onClick={handleClick}
          />
          <button className="cube__faceOne-button" onClick={handleClick}>
            Extract File
          </button>
        </div>
        <div className="cube__faceTwo cube__face">
          <div className="cube__faceTwo-title">
            <h3 className="cube__faceTwo-title-txt">Project: {title}</h3>
          </div>
          <p className="cube__faceTwo-byline">{byline}</p>
          <div className="cube__faceTwo-tagList">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
            {/* I would like to create the Tag element here <Tag /> */}
          </div>
          <div className="cube__faceTwo-content">
            <img
              src={carouselImg[0]}
              alt="modal-trigger"
              onClick={handleModalOpen}
            ></img>
            <button
              className="cube__faceTwo-content-modaltrigger"
              onClick={handleModalOpen}
            >
              Click here to learn more about this project !
            </button>
          </div>
          <button className="cube__faceOne-button" onClick={handleClick}>
            Put Away
          </button>
        </div>
      </div>
      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="DisplayWorkModal"
        closeTimeoutMS={250}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
          },
          content: {
            position: "absolute",
            width: "70%",
            height: "90%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            right: "0",
            bottom: "0",
            border: "1px solid #ccc",
            background: "#e0d0c1",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "20px",
            outline: "none",
            padding: "20px",
          },
        }}
        className="custom-modal"
      >
        <div className="modal__head">
          <h5>
            Project: <span className="project-name">{title}</span>
          </h5>
          <button className="modal__head-btnClose" onClick={handleModalClose}>
            Close File
          </button>
        </div>
        <p className="modal__carousel-description">
          File script : {description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium earum ullam repudiandae quia aliquam
          illo iure consectetur perferendis rerum accusantium eum, hic nihil
          explicabo sunt dolore sed et. Eligendi, voluptates?
        </p>
        <div className="modal__link">
          <a className="modal__link-gitLink" href={gitHubLink}>
            Go to website / gitHub
          </a>
          <div className="modal__link-nav">
            <button
              className="modal__carousel-btnPrev giggle"
              onClick={handlePrevImage}
            >
              ⋘ Prev
            </button>
            <button
              className="modal__carousel-btnNext"
              onClick={handleNextImage}
            >
              Next ⋙
            </button>
          </div>
        </div>
        <div className="modal__carousel">
          <div className="modal__carousel-imgContainer">
            <img
              src={carouselImg[currentImageIndex]}
              alt={`Proj ${title} img ${currentImageIndex + 1}`}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BookCard;
