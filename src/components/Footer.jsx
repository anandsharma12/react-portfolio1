import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
  } from "react-icons/ai";
  import { FaLinkedin } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer>
    <div>
      <img src="https://github.com/anandsharma12.png" alt="" />
      <h2>Anand Sharma</h2>
      <p>Never Give Up!</p>
    </div>
    <aside>
       <h2>Socila Media</h2>
       <article>
        <a href="https://www.linkedin.com/in/anand-sharma-a17181248/"><FaLinkedin /></a>
        <a href="https://vercel.com/anandsharma12s-projects"> <RiVercelLine /></a>
        <a href="https://github.com/anandsharma12"><AiFillGithub /></a>
       </article>
    </aside>
    <a href="#home">
    <AiOutlineArrowUp />
    </a>
    </footer>
  )
}

export default Footer;
