import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/kawaltani.png"
          title="KawalTani Chatbot"
          description="Kawaltani is an IoT-based system developed to support the monitoring of agricultural land and plant growth."
        />
        <ProjectCard
          src="/hematrik.png"
          title="Hematrik"
          description="Hematrik is an IoT-based energy monitoring system that enables the real-time monitoring of electronic devices (lights, dispensers, and AC)."
        />
        <ProjectCard
          src="/Alitnest.png"
          title="Alitnest"
          description="Alitnest is an application that helps users manage a healthy lifestyle with personalized, measurable, and effective nutrition solutions."
        />
      </div>
    </div>
  );
};

export default Projects;
