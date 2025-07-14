import { useState } from "react";

export default function ProjectCard(images, title, description, body, link) {
  return (
    <div className="project-card">
      <div className="image-container">images</div>
      <div className="title">title</div>
      <div className="description">Description goes here</div>
    </div>
  );
}
