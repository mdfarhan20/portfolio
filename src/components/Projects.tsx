import { projects } from "constants";

import { SiGithub as GithubIcon } from "react-icons/si";
import { FiExternalLink as LinkIcon } from "react-icons/fi";
import { Project as ProjectType } from "types";
import { HTMLAttributes } from "react";

export default function Projects() {
  return (
    <section 
      id="projects"
      className="section-layout bg-zinc-50"
    >
      <h2 
        className="section-heading"
      >Projects</h2>

      <ul className="grid gap-10 md:grid-cols-2 lg:w-4/5 xl:grid-cols-3">
        { projects.map((project, index) => (
          <Project 
            key={index} 
            project={project}
          />
        )) }
      </ul>
    </section>
  );
}

interface ProjectProps {
  project: ProjectType
}

function Project({ project }: ProjectProps) {
  return (
    <li className="grid gap-4 p-4 border-1 border-zinc-400 rounded-xl bg-white">
      <img 
        src={project.image} 
        alt={`${project.title} image`} 
        className="rounded-xl border-1 border-zinc-400"
      />

      <h3 className="heading text-lg">{ project.title }</h3>

      <p className="text-sm">{ project.description }</p>

      <ProjectLinks
        code={project.code}
        liveURL={project.liveURL}
        className="mt-2"
      />

    </li>
  );
}

interface ProjectLinksProps extends HTMLAttributes<HTMLDivElement> {
  code: string,
  liveURL: string
}

function ProjectLinks({ code, liveURL, className }: ProjectLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a href={code} className="button grow bg-zinc-100">
        <GithubIcon className="size-6" />
        <p className="block">Code</p>
      </a>
      <a href={liveURL} className="button grow bg-yellow-100">
        <LinkIcon className="size-6" />
        <p className="block">Live site</p>
      </a>
    </div>
  );
}