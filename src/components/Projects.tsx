import { projects } from "constants";
import { motion } from "framer-motion";
import { SiGithub as GithubIcon } from "react-icons/si";
import { FiExternalLink as LinkIcon } from "react-icons/fi";
import { DrawRule, Stamp } from "components/Blue";

const CATEGORY: Record<string, string> = {
  "Inquire": "Forms · Quizzes · Polls",
  "Confab": "Real-time chat",
  "Spyfall": "Online party game",
  "SortViz": "Algorithm visualizer",
  "Wordle": "Word game",
  "Connect Four": "Go AI · WASM",
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 sm:px-10 py-20 sm:py-28 bg-white/70 border-y-1 border-blueprint-line/25">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-3">
          <h2 className="section-heading">Projects</h2>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-blueprint-muted">Sheet 03 / 05</span>
        </div>
        <DrawRule className="mb-2" />
        <p className="font-mono text-xs uppercase tracking-widest text-blueprint-muted mb-12">Six shipped builds — each with live demo and source</p>

        <ol className="grid gap-8 md:grid-cols-2">
          { projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { title, description, image, liveURL, code } = project;
  return (
    <motion.li
      className="relative group border-1 border-blueprint-line bg-paper flex flex-col"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* part number / header strip */}
      <div className="flex items-center justify-between border-b-1 border-blueprint-line px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-blueprint-muted">
        <span className="text-blueprint-line">DWG-{(index + 1).toString().padStart(2, "0")}</span>
        <span className="text-right">{CATEGORY[title] ?? "Web build"}</span>
      </div>

      {/* image with corner registration */}
      <div className="relative m-3 overflow-hidden border-1 border-blueprint-line/40">
        <img
          src={image}
          alt={`${title} — project screenshot`}
          className="w-full group-hover:scale-[1.03] transition-transform duration-700"
        />
        <span className="absolute top-0 left-0 w-4 h-4 border-t-1 border-l-1 border-white/70" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-1 border-r-1 border-white/70" />
      </div>

      <div className="px-4 pb-4 flex flex-col grow">
        <div className="flex items-center justify-between gap-3 mt-1">
          <h3 className="heading text-2xl uppercase tracking-tight">{ title }</h3>
          <Stamp>Rev. A</Stamp>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-blueprint-muted grow">
          { description }
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={code} className="button grow sm:grow-0 text-xs" target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" />
            <span>Source</span>
          </a>
          <a href={liveURL} className="button grow sm:grow-0 text-xs border-amber-paper text-amber-deep hover:bg-amber-paper hover:text-white" target="_blank" rel="noreferrer">
            <LinkIcon className="size-4" />
            <span>Live demo</span>
          </a>
        </div>
      </div>
    </motion.li>
  );
}
