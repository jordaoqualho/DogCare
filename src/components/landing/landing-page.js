import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "../menu/menu";
import Decoration from "./img/Decoration.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const LandingPage = () => {
  const history = useHistory();
  return (
    <div>
      <section className="home">      
        <Menu></Menu>        
      </section>
    </div>
  );
};

export default LandingPage;
