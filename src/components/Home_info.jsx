import React, { Component, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../images/home1-min.png";
import image2 from "../images/home2-min.png";
import image3 from "../images/home3-min.png";

const contentData = [
  {
    imageSrc:
    image1,
    title: "Test Your Bias-Busting Skills",
    text: "Engage with real-world dilemmas on gender bias, diversity, and inclusion. Propose solutions to promote fairness and equality in workplace scenarios."
  },
  {
    imageSrc:
      image2,
    title: "Climb the Bias Busters Leaderboard",
    text: "Complete challenges and get ranked from Beginner to Inclusion Leader. Earn badges and certifications to add to your resume and showcase your commitment to equality."
    
  },
  {
    imageSrc:
      image3,
    title: "Expand Your Knowledge",
    text: "Take micro-courses on gender bias, intersectionality, and inclusive leadership to boost your skills before tackling case studies."
    
  },
];

function TextWrapper({ children }) {
  const text = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end "],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0.8]);
  const x = useTransform(scrollYProgress, [1, 0.6, 0], [0, 0, -1500]);

  return (
    <motion.div ref={text} className="text-section" style={{ opacity, x }}>
      {children}
    </motion.div>
  );
}

function Home_info() {
  return (
    <div className="container-home">
      {contentData.map((content, index) => (
        <div className="image-container-home" key={index}>
          <TextWrapper>
            <img
              src={content.imageSrc}
              alt={content.title}
              className="image-home"
            />
          </TextWrapper>
          <div className="text-container-home">
            <TextWrapper>
              <div className="text-box-home">
                <h2>{content.title}</h2>
                <p>{content.text}</p>
                <a
                  href={content.link}
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </div>
            </TextWrapper>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home_info;
