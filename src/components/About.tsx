import { motion } from "framer-motion";
import photo from "assets/about-photo.jpg";
import { DrawRule, Stamp, Callout } from "components/Blue";

export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-3">
          <h2 className="section-heading">About me</h2>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-blueprint-muted">Sheet 02 / 05</span>
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
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-blueprint-muted mb-2">
              <span>Fig. 01 — Developer</span>
              <span>NTS</span>
            </div>
            <img
              src={photo}
              alt="Portrait of Mohamed Farhan"
              className="w-full object-cover aspect-square border-1 border-blueprint-line/40"
            />
            <div className="flex justify-between mt-2 pt-1 border-t-1 border-blueprint-line/40">
              <Stamp>Field note</Stamp>
              <span className="font-mono text-[10px] uppercase tracking-widest text-blueprint-muted">Not to scale</span>
            </div>
            <span className="absolute -left-5 top-1/2 hidden lg:flex -translate-x-full">
              <Callout align="right">Detail A</Callout>
            </span>
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
              A recent Computer Science graduate aiming to work as a web developer. Over the
              last few years I have focused on the skills behind full-stack web applications,
              learning largely hands-on and by building real projects — alongside structured
              courses such as Harvard&rsquo;s CS50x, Backend Application Development from
              EdX, and an introduction to programming in C from NPTEL.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Approach", v: "Learn fast, build real, keep code clean and readable." },
                { k: "Discipline", v: "Hands-on execution across real-time apps, tools, and games." },
                { k: "Foundation", v: "Computer Science — algorithms, data structures, C and Python." },
                { k: "Focus", v: "Full-stack web with React, Node, Express, and Next.js." },
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
