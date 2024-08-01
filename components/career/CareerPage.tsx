import React from "react";
import "./CareerPage.scss";
import { ntr } from "@/utils/fonts/fonts";
import { CatagoryContainer } from "./CatagoryContainer";

const categories = [
  {
    title: "IT",
    about: "Explore opportunities in the field of Information Technology.",
    svg: "/assets/icons/career/IT.svg",
  },
  {
    title: "Finance",
    about: "Manage financial strategies and ensure economic growth.",
    svg: "/assets/icons/career/finance.svg",
  },
  {
    title: "Graphics Design",
    about: "Unleash your creativity with innovative designs.",
    svg: "/assets/icons/career/graphics.svg",
  },
  {
    title: "Digital Marketing",
    about: "Drive brand engagement through digital channels.",
    svg: "/assets/icons/career/digital.svg",
  },
  {
    title: "Web Development",
    about: "Build and maintain dynamic websites and apps",
    svg: "/assets/icons/career/web-d.svg",
  },
  {
    title: "Animation",
    about: "Bring stories to life with advanced animation techniques.",
    svg: "/assets/icons/career/animation.svg",
  },
];

export const CareerPage = () => {
  return (
    <>
      <div id="career-header">
        <h1 className={ntr.className}>
          Be part of our <span>Mission</span>
        </h1>
      </div>
      <div id="career-subheader">
        <p className={ntr.className}>
          The RYIT will provide you the opportunity to build a successful career
          for dynamic youth.
        </p>
      </div>
      <div id="div-career-catagory-container">
        <div className="career-subContainer">
          {categories.map((category, index) => (
            <CatagoryContainer
              key={index}
              title={category.title}
              about={category.about}
              svg={category.svg}
            />
          ))}
        </div>
      </div>
    </>
  );
};