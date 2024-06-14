import { motion } from "framer-motion";
import photo from "assets/about-photo.jpg";
import { slideLeft, slideRight, slideUp } from "variants";

export default function About() {
  return (
    <section id="about" className="section-layout z-10">
      <motion.h2 
        className="section-heading"
        initial="start"
        whileInView="end"
        variants={slideUp}
      >About me</motion.h2>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:w-4/5 lg:-10 xl:gap-16">      
        <motion.img 
          src={photo} 
          alt="mohamed farhan photo"
          className="rounded-2xl border-4 border-black lg:w-1/3 xl:w-1/4"
          initial="start"
          whileInView="end"
          variants={slideLeft}
        />

        <motion.p 
          className="text-lg grow lg:py-6 lg:px-4 xl:text-xl lg:leading-relaxed xl:leading-loose"
          initial="start"
          whileInView="end"
          variants={slideRight}
        >
          I am a recent Computer Science graduate aiming to secure a position as a Web Developer. For the last few years, I have focussed on learning skills required for developing Full Stack Web Applications. I have mostly acquired the skills required by learning from resouces available in the internet and by building projects. I have taken courses online such as Harvard University's CS50x, Backend Application Development from EdX and Introduction to Programming in C by NPTEL. I can learn and pick up any new skill quickly and able to produce clean, concise and readable code.
        </motion.p>
      </div>
    </section>
  );
}