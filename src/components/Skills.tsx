import clsx from "clsx";
import { skills } from "constants";
import type { Skill as SkillType } from "types";

export default function Skills() {
  return (
    <section id="skills" className="section-layout">
      <h2 className="section-heading">Skills</h2>

      <ul className="grid gap-6 w-full sm:grid-cols-2 lg:w-4/5 xl:grid-cols-3">
        { skills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill}
          />
        )) }
      </ul>
    </section>
  );
}

interface SkillProps {
  skill: SkillType
}

function Skill({ skill }: SkillProps) {
  const skillWidth = `${skill.level * 10}%`;
  const getLevel = () => {
    if (skill.level >= 7)
      return "advanced";
    else if (skill.level >= 4)
      return "intermediate";
    else
      return "beginner";
  }

  return (
    <li className="flex items-center  border-1 border-zinc-400 w-full rounded-lg overflow-hidden">
      <skill.logo 
        className="size-10 bg-zinc-900 h-full w-16 p-4 fill-white" 
      />
      <div className="relative text-xl px-4 py-4 grow">
        <p className="">{ skill.name }</p>
        <div 
          className={clsx("-z-10 absolute h-full top-0 left-0", {
            "bg-green-50": getLevel() === "advanced",
            "bg-yellow-50": getLevel() === "intermediate",
            "bg-red-50": getLevel() === "beginner",
          })} 
          style={{ width: skillWidth }} 
        />
      </div>
    </li>
  );
}