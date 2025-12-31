import React from "react";
import Hero from "../Companents/Hero";
import { HeroData } from "../data/ProjectData";
import Skills from "../Companents/Skills";
import { project } from "../assets";
import ConectsMe from "../Companents/ConectsMe";
import Footer from "../Companents/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Hero data={HeroData.home} />
      </div>
      <div>
        <Skills />
        <h1 className="py-6 text-4xl font-bold text-center ">My Projects</h1>
        <div className="p-8 md:w-[700px] text-center relative md:left-[27%]">
          <div className="p-4 transition duration-700 bg-white rounded-lg shadow hover:bg-sky-500 hover:scale-103 hover:shadow-lg hover:text-white">
            <h2 className="py-6 mb-2 text-2xl font-bold">Certification</h2>

            <a
              href="https://first-project-inky-sigma-34.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src={project} alt="" className="rounded-lg" />
            </a>
          </div>
          {/* other projects*/}
        </div>

        <ConectsMe />
      </div>
    </div>
  );
}
