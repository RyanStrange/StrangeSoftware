import { useState } from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ images = [], title, description, link }) {
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
      <h2 className="title">{title}</h2>
      <div className="description">{description}</div>
      <a
        className="github-button"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>View GitHub</h3>
      </a>
    </div>
  );
}
