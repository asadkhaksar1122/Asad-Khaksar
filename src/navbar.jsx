import "./navbar.css";
import asadkhaksar from "../public/my picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUser,
  faGraduationCap,
  faAddressBook,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
function navbar(props) {
  function checkfunc(input) {
    let hamburger = document.getElementById("hamburger");
    if (input.checked) {
      hamburger.style.display = "none";
      settoggle("toggle");
    } else {
      hamburger.style.display = "block";
      settoggle("");
    }
  }
    let [toggle, settoggle] = useState("");
    function changehandle(e) {
        let input = e.target
        checkfunc(input)
    }
  function switchoff() {
    let check = document.getElementById("check")
    console.log("the profile was clicked")
    console.dir(check)
    check.checked = false;
     checkfunc(check)
    }
  return (
    <nav>
      <div className="checkbox">
        <input type="checkbox" id="check" onChange={changehandle} />
      </div>
      <label htmlFor="check">
        <div className="hamburger" id="hamburger">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </label>
      <div className={`mainnav ${toggle}`}>
        <label htmlFor="check">
          <div className="cross">
            <span>
              {" "}
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </div>
        </label>
        <div className="logo">
          <img src={asadkhaksar} alt="" srcset="" />
          <p>Asad Khan</p>
        </div>
        <div className="list">
          <div className="firstitem  item">
            <a href="#profile" onClick={switchoff}>
              {" "}
              <FontAwesomeIcon icon={faUser} /> &nbsp; Profile
            </a>
          </div>
          <div className="firstitem item">
            <a href="#education" onClick={switchoff}>
              <FontAwesomeIcon icon={faGraduationCap} /> &nbsp; Education
            </a>
          </div>
          <div className="firstitem item">
            <a href="#contact" onClick={switchoff}>
              <FontAwesomeIcon icon={faAddressBook} /> &nbsp; Contact
            </a>
          </div>
          <div className="firstitem item">
            <a href="#projects" onClick={switchoff}>
              <FontAwesomeIcon icon={faGithub} /> &nbsp; Github Project
            </a>
          </div>
        </div>
        <div className="socialicon">
          <span>
            <a href="https://wa.me/923114948262" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </span>
          <span>
            <a href="mailto:asadkhaksar1122@gmail.com" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </span>
          <span>
            <a href="https://github.com/asadkhaksar1122" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span>
            <a href="faLinkedin" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default navbar;
