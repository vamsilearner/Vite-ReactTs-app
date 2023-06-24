import { motion } from "framer-motion";
import Compass from "./Compass";
import { animationStart, reveal } from "./utils/animation";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
      >
        <span className="flex items-center gap-10px">
          Vamsi <Compass /> Krishna
        </span>
        <span>Full Stack Developer</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight"
      >
        As a Full Stack Developer with a background in Engineering, I excel in
        JavaScript, TypeScript, React, Redux, Node.js, Express, MongoDB, Nextjs, Git,
        HTML, CSS, and Agile, with proficiency in Ant D, MUI, Chakra UI, Tailwind and a
        passion for swimming, yoga, travel, bolstered by volunteering
        experience, seeking a MERN Stack Developer position.
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
