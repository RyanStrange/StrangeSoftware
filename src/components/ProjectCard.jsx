import { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ images = [], title }) {
  return (
    <div className="project-card">
      <div className="image-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`filler alt text`}
            className="image"
          />
        ))}
      </div>
      <div className="title">{title}</div>
      <div className="description">
        Description goes here Description goes here Description goes here
        Description goes here Description goes here Description goes here
        Description goes here Description goes here
      </div>
    </div>
  );
}
