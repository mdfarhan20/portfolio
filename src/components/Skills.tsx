import { motion } from "framer-motion";
import { skills } from "constants";
import type { Skill as SkillType } from "types";
import { DrawRule, Stamp } from "components/Blue";

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 sm:px-10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-3">
          <h2 className="section-heading">Skills</h2>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-blueprint-muted">04 · skills</span>
        </div>
        <DrawRule className="mb-2" />
        <p className="font-mono text-xs uppercase tracking-widest text-blueprint-muted mb-12">Core stack — rated by hands-on depth</p>

        <div className="border-1 border-blueprint-line bg-white/60">
          {/* table header */}
          <div className="hidden sm:grid grid-cols-[1.6fr_2fr_0.5fr_1fr] gap-4 border-b-1 border-blueprint-line px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-blueprint-muted">
            <span>#</span>
            <span>Skill</span>
            <span>Rating</span>
            <span>Proficiency</span>
          </div>

          <ol>
            { skills.map((skill, index) => (
              <SkillRow key={skill.name} skill={skill} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ skill, index }: { skill: SkillType; index: number }) {
  const level = getLevel(skill.level);
  const rating = skill.level;

  return (
    <motion.li
      className="grid grid-cols-2 sm:grid-cols-[1.6fr_2fr_0.5fr_1fr] sm:items-center gap-x-4 gap-y-2 border-t-1 border-blueprint-line/30 first:border-t-0 px-5 py-4 hover:bg-blueprint-line/5 transition-colors"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: 0.04 * index }}
    >
      {/* # */}
      <span className="font-mono text-xs tracking-widest text-blueprint-line">#{(index + 1).toString().padStart(2, "0")}</span>

      {/* Skill */}
      <div className="flex items-center gap-3 sm:col-start-2">
        <skill.logo className="size-5 text-blueprint-line shrink-0" />
        <span className="heading text-base">{skill.name}</span>
      </div>

      {/* Rating scale */}
      <div className="flex items-center gap-2 col-span-2 sm:col-span-1 sm:col-start-3">
        <div className="relative h-2 flex-1 bg-blueprint-line/15 max-w-28">
          <motion.div
            className="absolute inset-y-0 left-0 bg-blueprint-line"
            initial={{ width: 0 }}
            whileInView={{ width: `${rating * 10}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
        </div>
        <span className="font-mono text-xs w-9 text-right text-blueprint-muted">{rating} / 10</span>
      </div>

      {/* Proficiency */}
      <span className="sm:col-start-4 sm:row-start-1">
        <Stamp className="text-[9px]">{level}</Stamp>
      </span>
    </motion.li>
  );
}

function getLevel(level: number): string {
  if (level >= 7) return "Advanced";
  if (level >= 4) return "Intermediate";
  return "Beginner";
}
