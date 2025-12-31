// Pages/Project.jsx

import Hero from "../Companents/Hero";
import { HeroData } from "../data/ProjectData";
import React from "react";
import { project } from "../assets/index";
export default function Projects() {
  return (
    <>
      <div>
        <Hero data={HeroData.projects} />
      </div>
      <div className="grid gap-6 p-8 md:grid-cols-2">
        <div className="p-4 transition duration-700 bg-white rounded-lg shadow hover:bg-sky-500 hover:scale-101 hover:shadow-lg hover:text-white">
          <h2 className="mb-2 text-xl font-bold">My Project</h2>
          <p className="mb-4">Certification</p>
          <a
            href="https://first-project-inky-sigma-34.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70"
          >
            <img src={project} alt="" className="rounded-lg" />
          </a>
        </div>
        {/* other projects*/}
      </div>
    </>
  );
}
