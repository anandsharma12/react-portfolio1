import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
  } from "react-icons/ai";
  
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
        <a href="https://www.youtube.com/channel/UC4_VJcE7KH6OJeKehlIXhAw"><AiFillYoutube /></a>
        <a href=""> <AiFillInstagram /></a>
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
