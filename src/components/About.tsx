import { motion } from "framer-motion";
import photo from "assets/about-photo.jpg";
import { DrawRule } from "components/Blue";

export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-3">
          <h2 className="section-heading">About me</h2>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-blueprint-muted">02 · about</span>
        </div>
        <DrawRule className="mb-12" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.35fr] lg:gap-14 items-center">
          {/* detail drawing */}
          <motion.figure
            className="relative border-1 border-blueprint-line bg-white p-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={photo}
              alt="Portrait of Mohamed Farhan"
              className="w-full object-cover aspect-square border-1 border-blueprint-line/40"
            />
          </motion.figure>

          {/* bio annotation */}
          <div className="relative">
            <motion.p
              className="text-lg sm:text-xl leading-relaxed text-blueprint-ink border-l-2 border-blueprint-line/30 pl-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              A full-stack developer building web products end to end — React on the
              front, Node and Go on the back, with LLM-backed tooling increasingly
              in the mix. I learn by shipping real, working builds, and I keep the
              code clean and readable.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Approach", v: "Learn by building. Ship real, working software and keep the code readable." },
                { k: "Now", v: "Currently exploring Go, distributed systems, and LLM-backed tooling." },
                { k: "Foundation", v: "Computer Science — algorithms, data structures, and systems programming in C." },
                { k: "Focus", v: "Full-stack web with React, Node, Go, and LLM apps." },
              ].map((row, i) => (
                <motion.div
                  key={row.k}
                  className="border-1 border-blueprint-line/40 bg-white/60 p-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-amber-deep mb-1">{row.k}</div>
                  <p className="text-sm text-blueprint-ink">{row.v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
