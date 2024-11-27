import React from "react";

const ScrollButton = ({ targetId, label }) => {
  const scrollToSection = () => {
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

//  return <button  onClick={scrollToSection}>{label}</button>;
};

export default ScrollButton;
