import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
function Footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#001220"
          fill-opacity="1"
          d="M0,224L80,197.3C160,171,320,117,480,128C640,139,800,213,960,218.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>{" "}
      <div className="h25vh bg-theme white text-center row justify-content-center footer-content">
        <div className="col-md-6">
          <p>Desginged and Developed By</p>

          <hr />
          <div className="d-flex justify-content-between">
            <FaFacebook />
            <FaInstagram />
            <FaMailBulk />
            <FaLinkedin />
            <FaGithub />
          </div>
          <hr />
          <p>
            {" "}
            <b>P</b>e<b>T</b>er Huynh <b>Nguyen</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
