import { motion } from "framer-motion";
import profilePhoto from "assets/profile-photo.jpeg";
import { RegistrationCorners, DimensionLine } from "components/Blue";

export default function Home() {
  return (
    <section id="home" className="relative sheet border-b-1 border-blueprint-line/30 overflow-hidden">
      <RegistrationCorners className="m-3 sm:m-4" />

      <div className="mx-auto max-w-6xl px-5 sm:px-10 pt-14 pb-16 sm:pt-20 sm:pb-24">

        {/* title block */}
        <motion.div
          className="relative border-1 border-blueprint-line bg-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* sheet margin title block header */}
          <div className="flex items-center justify-between border-b-1 border-blueprint-line px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-blueprint-muted">
            <span>Drawing title block</span>
            <span className="hidden sm:inline">Rev. A</span>
            <span>Scale — printable</span>
          </div>

          <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12 lg:items-center">
            {/* text side */}
            <div className="relative">
              <motion.h1
                className="heading text-[13.5vw] leading-[0.92] sm:text-7xl lg:text-[5.2rem] uppercase mt-3 lg:mt-0"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Mohamed<br />Farhan
              </motion.h1>

              <motion.div className="mt-6 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <DimensionLine label="role / full-stack" className="mb-4" />
                <p className="text-blueprint-muted leading-relaxed">
                  A full-stack developer shipping real, working builds across the
                  stack &mdash; real-time apps, Go systems, and LLM-backed tooling &mdash;
                  with a Computer Science foundation and clean, readable code.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <a href="#projects" className="button">View the builds</a>
                <a href="#contact" className="button hover:bg-amber-paper hover:text-white border-amber-paper text-amber-deep">
                  Contact
                </a>
              </motion.div>
            </div>

            {/* portrait side */}
            <div className="relative">
              <motion.div
                className="border-1 border-blueprint-line bg-white"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={profilePhoto}
                  alt="Portrait of Mohamed Farhan"
                  className="w-full object-cover aspect-square"
                />
              </motion.div>
            </div>
          </div>

          {/* bottom title-block strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t-1 border-blueprint-line px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-blueprint-muted">
            <span>Rev. A — 2026</span>
            <span className="flex items-center gap-2"><span className="inline-block w-px h-3 bg-blueprint-line/40" />Breadth: React · Node · Go · LLM apps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
