import clsx from "clsx";
import { motion } from "framer-motion";
import { skills } from "constants";
import type { Skill as SkillType } from "types";
import { slideLeft, slideUp } from "variants";

export default function Skills() {
  return (
    <section id="skills" className="section-layout">
      <motion.h2 
        className="section-heading"
        initial="start"
        whileInView="end"
        variants={slideUp}
      >Skills</motion.h2>

      <ul className="grid gap-6 w-full sm:grid-cols-2 lg:w-4/5 xl:grid-cols-3">
        { skills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill}
            animationDelay={0.05 * index}
          />
        )) }
      </ul>
    </section>
  );
}

interface SkillProps {
  skill: SkillType,
  animationDelay: number
}

function Skill({ skill, animationDelay }: SkillProps) {
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
    <motion.li 
      className="flex items-center  border-1 border-zinc-400 w-full rounded-lg overflow-hidden"
      initial="start"
      whileInView="end"
      transition={{ delay: animationDelay }}
      variants={slideLeft}
    >
      <skill.logo 
        className="size-10 bg-zinc-900 h-full w-16 p-4 fill-white hover:p-3 duration-150" 
      />
      <div className="relative text-xl px-4 py-4 grow">
        <p>{ skill.name }</p>
        <div 
          className={clsx("-z-10 absolute h-full top-0 left-0", {
            "bg-green-50": getLevel() === "advanced",
            "bg-yellow-50": getLevel() === "intermediate",
            "bg-red-50": getLevel() === "beginner",
          })} 
          style={{ width: skillWidth }} 
        />
      </div>
    </motion.li>
  );
}