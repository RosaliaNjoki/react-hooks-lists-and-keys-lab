import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.map((proObj)=>{
    return <div>{proObj}</div>
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem projects = {project}/>
      </div>
    </div>
  );
  }


export default ProjectList;
