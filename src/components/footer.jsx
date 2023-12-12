import { useState } from "react";
import Modal from "react-modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="footer" id="Contact">
      <h4>
        LET'S WORK <br />
        TOGETHER🤝
      </h4>
      <div className="footer-right">
        <nav className="footer-nav">
          <a href="https://github.com/ErwanRob" className="btn-link">
            {" "}
            GitHub
          </a>
          <a href="/" className="btn-link">
            LinkedIn
          </a>
          <a href="/" className="btn-link">
            {" "}
            Instagram
          </a>
          <a href="mailto:email@example.com" className="btn-link">
            {" "}
            Email
          </a>
        </nav>
        <span className="App-author">Made with ❤️ by Erwan Robin </span>
        <span className="legal-mention" onClick={handleModalOpen}>
          Legal mentions
        </span>
      </div>
      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="DisplayWorkModal"
        closeTimeoutMS={250}
        ariaHideApp={false}
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
            width: "40%",
            height: "40%",
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
          <h3>Legal mentions </h3>
          <button className="modal__head-btnClose" onClick={handleModalClose}>
            Close
          </button>
        </div>
        <div>
          <h3>Website Editor</h3>
          <p>
            Erwan ROBIN <br />
            80000 Somewhere <br />
            Phone number : 0606060606 <br />
            Email : contact@portfolio-malabeuf.fr <br />
            Site Web : https://my-portfolio-two-teal.vercel.app/
          </p>
        </div>
        <h3>Host</h3>
        <p>WebSite hosted with Vercel</p>
        <p>
          Formerly ZEIT (2015–2020) <br />
          Type : Private <br />
          Industry : Edge computingWeb hostingContent delivery network <br />
          Headquarters : San Francisco, California, U.S. <br />
          Area served : Worldwide <br />
          Key people : Guillermo Rauch (CEO) <br />
          Website : vercel.com
        </p>
        <p>https://vercel.com/</p>
      </Modal>
    </div>
  );
}

export default Footer;
