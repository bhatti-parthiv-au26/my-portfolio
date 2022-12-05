import React from "react";
import me from "../assets/logo.jpeg";
import { } from "react-icons/ai";


import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={me} alt="Founder" />


        <h2>Parthiv Bhatti</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://myaccount.google.com/?tab=kk" target={"blank"}>
            <AiFillGoogleCircle />
          </a>
          <a href="https://www.instagram.com/parthiv.__1/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/bhatti-parthiv-au26" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
