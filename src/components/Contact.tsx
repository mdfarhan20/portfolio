import { contactLinks } from "constants";
import { motion } from "framer-motion";
import { DrawRule, Stamp, RegistrationCorners } from "components/Blue";

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-10 py-20 sm:py-28 bg-blueprint-ink text-white overflow-hidden">
      <RegistrationCorners className="m-3 sm:m-4 opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-3">
          <h2 className="section-heading !text-white">Contact</h2>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-white/50">Sheet 05 / 05</span>
        </div>
        <DrawRule className="mb-2 bg-amber-paper" />
        <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-12">Approval stamp — review, then reach out</p>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr] items-start">
          {/* appeal */}
          <motion.div
            className="border-1 border-white/30 p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[7rem] leading-none font-bold text-amber-paper">MF.</span>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/60 leading-relaxed">
                <p>Approved for<br />inspection</p>
              </div>
            </div>
            <h3 className="mt-6 text-xl sm:text-2xl font-bold leading-snug">
              Have a question, an idea, or a project in mind? Let&rsquo;s talk.
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed text-sm">
              Reach out through any channel below for anything &mdash; questions,
              ideas, or collaboration. I typically respond quickly.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Stamp className="text-white/80 border-white/60">Say hello</Stamp>
              <Stamp className="text-white/80 border-white/60">Reply fast</Stamp>
            </div>
          </motion.div>

          {/* contacts */}
          <motion.ul
            className="grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            { contactLinks.map((contact) => (
              <motion.li key={contact.platform}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="group border-1 border-white/25 p-4 hover:border-amber-paper hover:bg-white/5 transition-colors"
              >
                <a href={contact.link} target="_blank" rel="noreferrer" className="flex items-center gap-4">
                  <contact.icon className="size-6 text-amber-paper shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-tech font-semibold uppercase tracking-wide text-sm">{contact.platform}</h4>
                    <p className="font-mono text-xs text-white/60 truncate">{contact.name}</p>
                  </div>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t-1 border-white/20 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <span>Mohamed Farhan — spec no. 201103</span>
          <span>Rev. A — 2026</span>
        </div>
      </div>
    </section>
  );
}
