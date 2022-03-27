import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/nisha-kumari-a9721216b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/nishakumari13" target="_blank">
        <FiGithub />
      </a>
      <a href="https://leetcode.com/Nisha-Kumari/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
