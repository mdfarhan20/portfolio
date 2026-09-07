import type { Contact, Project, Skill } from "types";

import projectInquire from "assets/project-inquire.jpg";
import projectConfab from "assets/project-confab.jpg";
import projectSortviz from "assets/project-sortviz.jpg";
import projectSpyfall from "assets/project-spyfall.jpg";
import projectWordle from "assets/project-wordle.jpg";
import projectConnectFour from "assets/project-connect-four.jpg";

import { 
  FaReact as ReactIcon,
  FaNodeJs as NodeIcon,
  FaPython as PythonIcon,
  FaLinkedin as LinkedInIcon,
  FaHackerrank as HackerrankIcon
} from "react-icons/fa";
import { 
  SiExpress as ExpressIcon,
  SiVercel as NextIcon,
  SiTypescript as TypescriptIcon,
  SiMongodb as MongoIcon,
  SiTailwindcss as TailwindIcon,
  SiJavascript as JavaScriptIcon,
  SiCss3 as CSSIcon,
  SiGo as GoIcon,
  SiWebassembly as WasmIcon,
  SiSocketdotio as SocketIcon,
  SiPrisma as PrismaIcon,
  SiPostgresql as PostgresIcon,
  SiGithub as GitHubIcon,
  SiLeetcode as LeetcodeIcon
} from "react-icons/si";
import { IoCodeSlash as HTMLIcon } from "react-icons/io5";
import { CiMail as MailIcon } from "react-icons/ci";


export const navLinks = ["home", "about", "projects", "skills", "contact"];

export const projects: Project[] = [
  {
    title: "Inquire",
    description: "Inquire is a plaform where users can easily create and share forms, quizzes and polls easily with a single link",
    image: projectInquire,
    liveURL: "https://inquire-alpha.vercel.app/",
    code: "https://github.com/mdfarhan20/inquire"
  },
  {
    title: "Confab",
    description: "Confab is a real time chat application built using React.js, Node, Express and Socket.io",
    image: projectConfab,
    liveURL: "https://mdfarhan20.github.io/confab-chat-app/",
    code: "https://github.com/mdfarhan20/confab-chat-app"
  },
  {
    title: "Spyfall",
    description: "Spyfall is an online game where every player gets a location except one, who would be the spy. The spy will guess the location and the players find the spy.",
    image: projectSpyfall,
    liveURL: "https://mdfarhan20.github.io/spyfall/",
    code: "https://github.com/mdfarhan20/spyfall"
  },
  {
    title: "SortViz",
    description: "Sortviz is a sorting algorithim viusalizer where you visually understand the process of sorting using various sorting algortithms.",
    image: projectSortviz,
    liveURL: "https://mdfarhan20.github.io/sortviz/",
    code: "https://github.com/mdfarhan20/sortviz"
  },
  {
    title: "Wordle",
    description: "A recreation of the game wordle where the player attempts to guess a random word within six tries",
    image: projectWordle,
    liveURL: "https://mdfarhan20.github.io/wordle-game/",
    code: "https://github.com/mdfarhan20/wordle-game"
  },
  {
    title: "Connect Four",
    description: "A Connect Four game with an AI opponent. The minimax bot with alpha-beta pruning runs as a Go WebAssembly module wired into a React UI over a Web Worker.",
    image: projectConnectFour,
    liveURL: "https://mdfarhan20.github.io/connect-four/",
    code: "https://github.com/mdfarhan20/connect-four"
  },
];

export const skills: Skill[] = [
  {
    name: "React",
    logo: ReactIcon,
    level: 7,
  },
  {
    name: "TypeScript",
    logo: TypescriptIcon,
    level: 6,
  },
  {
    name: "Go",
    logo: GoIcon,
    level: 6,
  },
  {
    name: "Node.js",
    logo: NodeIcon,
    level: 6
  },
  {
    name: "Express.js",
    logo: ExpressIcon,
    level: 6
  },
  {
    name: "Next.js",
    logo: NextIcon,
    level: 5
  },
  {
    name: "Prisma",
    logo: PrismaIcon,
    level: 5
  },
  {
    name: "PostgreSQL",
    logo: PostgresIcon,
    level: 4
  },
  {
    name: "MongoDB",
    logo: MongoIcon,
    level: 5
  },
  {
    name: "WebAssembly",
    logo: WasmIcon,
    level: 4
  },
  {
    name: "Socket.io",
    logo: SocketIcon,
    level: 6
  },
  {
    name: "Tailwind CSS",
    logo: TailwindIcon,
    level: 6
  },
  {
    name: "JavaScript",
    logo: JavaScriptIcon,
    level: 7
  },
  {
    name: "Python",
    logo: PythonIcon,
    level: 4
  },
  {
    name: "HTML",
    logo: HTMLIcon,
    level: 8
  },
  {
    name: "CSS",
    logo: CSSIcon,
    level: 7
  },
];

export const contactLinks: Contact[] = [
  {
    platform: "LinkedIn",
    name: "mohamed-farhan-201103cs",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/mohamed-farhan-201103cs/",
  },
  {
    platform: "GitHub",
    name: "mdfarhan20",
    icon: GitHubIcon,
    link: "https://github.com/mdfarhan20",
  },
  {
    platform: "Leetcode",
    name: "mohamedfarhan201103",
    icon: LeetcodeIcon,
    link: "https://leetcode.com/u/mohamedfarhan201103/",
  },
  {
    platform: "Hackerrank",
    name: "mohamedfarhan20",
    icon: HackerrankIcon,
    link: "https://www.hackerrank.com/profile/mohamedfarhan20",
  },
  {
    platform: "Email",
    name: "mohamedfarhan201103@gmail.com",
    icon: MailIcon,
    link: "https://mail.google.com/mail/u/0/?to=mohamedfarhan201103@gmail.com&fs=1&tf=cm",
  },
];