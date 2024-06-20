import profile from "./assets/react.svg";
import { motion, AnimatePresence,useScroll,useSpring } from "framer-motion";
import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faPython,
  faGit,
  faDocker,
  faHtml5,
  faSquareJs,
  faCss3,
  faNpm,
  faMarkdown,
} from "@fortawesome/free-brands-svg-icons";
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [tabs, setTabs] = useState<number>(2);
  const tabsList = [
    {
      id: 2,
      name: "Projects",
    },
    {
      id: 3,
      name: "Skills",
    },
  ];
  return (
    <>
    <motion.div className="progress-bar" style={{scaleX}}/>
    <div className="bg-gray-900 text-white min-h-screen p-3 flex justify-center">
      <div className="w-full md:w-1/3 lg:w-1/3">
        <nav className="flex justify-between items-center">
          <div className="border px-2 py-1 rounded-md">
            <a className="gap-2 flex justify-between items-center" href="https://github.com/somanshubhardwaj">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
              somanshubhardwaj
            </a>
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/somanshubhardwaj" className="">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/bhardwaj.somanshu/" className="">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="https://twitter.com/somanshubha" className="">
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </a>
          </div>
        </nav>
        <section>
          <section className="flex gap-6 w-full items-center py-6">
            <div className="">
              <img src={profile} alt="" className="w-24" />
            </div>
            <div className="flex flex-col  ">
              <h1 className="text-2xl font-bold">Somanshu Bhardwaj</h1>
              <p className="text-sm">Full Stack Developer</p>
            </div>
          </section>
          <section className="">
            <span className="text-justify flex pb-6 ">
              B. Tech Engineering Physics Undergrad | Full Stack Web Developer |
              Passionate about learning and exploring new technologies | Open
              source enthisuast | Fast learner
            </span>
            <div className="flex flex-wrap justify-between gap-3">
              <a className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">India</span>
              </a>
              <a className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faLink}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">
                  somanshubhardwaj.vercel.app
                </span>
              </a>
              <a className="flex gap-2 items-center" href="https://www.instagram.com/bhardwaj.somanshu/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">bhardwaj.somanshu</span>
              </a>
              <a className="flex gap-2 items-center" href="https://twitter.com/somanshubha">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">@somanshubha</span>
              </a>
              <a className="flex gap-2 items-center" href="https://www.linkedin.com/in/somanshubhardwaj">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">in/somanshubhardwaj</span>
              </a>
              <a className="flex gap-2 items-center" href="https://github.com/somanshubhardwaj">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl text-gray-400" 
                />
                <span className="font-semibold">somanshubhardwaj</span>
              </a>
            </div>
          </section>
          <section className="flex justify-between pt-6">
            {tabsList.map((tab) => (
              <motion.div
                key={tab.id}
                onClick={() => setTabs(tab.id)}
                className={tab.id == tabs ? "selected tabstyle" : "tabstyle"}
              >
                <motion.h1
                  className="text-xl font-bold text-center "
                  whileHover={{ scale: 1.2 }}
                >
                  {tab.name}
                </motion.h1>
              </motion.div>
            ))}
          </section>
          <section className="">
           
            <AnimatePresence>
              {tabs === 2 && (
                <motion.section
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Projects />
                </motion.section>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {tabs === 3 && (
                <motion.section
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Skills />
                </motion.section>
              )}
            </AnimatePresence>
          </section>
        </section>
      </div>
    </div></>
  );
}

const Skills = () => {
  return (
    <div className="grid-cols-3 grid gap-2 mt-6">
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faReact} size="5x" />
        <span className="text-lg font-semibold">React</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faNodeJs} size="5x" />
        <span className="text-lg font-semibold">NodeJs</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faPython} size="5x" />
        <span className="text-lg font-semibold">Python</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faNpm} size="5x" />
        <span className="text-lg font-semibold">npm</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faGit} size="5x" />
        <span className="text-lg font-semibold">git</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faDocker} size="5x" />
        <span className="text-lg font-semibold">Docker</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faCss3} size="5x" />
        <span className="text-lg font-semibold">CSS</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faHtml5} size="5x" />
        <span className="text-lg font-semibold">HTML</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faGithub} size="5x" />
        <span className="text-lg font-semibold">Github</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faSquareJs} size="5x" />
        <span className="text-lg font-semibold">JavaScript</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faMarkdown} size="5x" />
        <span className="text-lg font-semibold">Markdown</span>
      </div>
      <div className="flex justify-center items-center flex-col">
        <FontAwesomeIcon icon={faFontAwesome} size="5x" />
        <span className="text-lg font-semibold">Font Awesome</span>
      </div>
    </div>
  );
};
const Projects = () => {
  const projectlist = [
    {
      id: 1,
      name: "MyPortfolio",
      description: "My portfolio website",
      techstack: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
      link: "https://github.com/somanshubhardwaj/myportfolio",
    },
    {
      id: 2,
      name: "Password Generator",
      description: "A password generator",
      techstack: ["React", "JavaScript"],
      link: "https://github.com/somanshubhardwaj/generatepassword",
    },
    {
      id: 3,
      name: "Jujutsu Kaisen",
      description: "A website for jujutsu kaisen",
      techstack: ["HTML", "CSS"],
      link: "https://github.com/somanshubhardwaj/jujutsu-kaisen",
    },
    {
      id: 4,
      name: "Finacial Tracker",
      description: "A financial tracker website",
      techstack: ["NextJS", "TailwindCSS", "NextAUth", "MongoDB"],
      link: "https://github.com/somanshubhardwaj/finacialtracker",
    },
    {
      id: 5,
      name: "NextTweet",
      description: "A Twitter Api",
      techstack: ["react-tweet", "TailwindCSS", "NextJS"],
      link: "https://github.com/somanshubhardwaj/next-tweet",
    },
    {
      id: 6,
      name: "MyTodoApp",
      description: "A Todo App",
      techstack: ["ReactNative", "Expo", "TypeScript"],
      link: "https://github.com/somanshubhardwaj/my-todo-app",
    },
    {
      id: 7,
      name: "EduVault",
      description: "A educational website",
      techstack: ["NUxtJS", "NuxtStudio", "TypeScript"],
      link: "https://github.com/somanshubhardwaj/EduVault",
    },
    {
      id: 8,
      name: "NuxtProject",
      description: "My Blog website",
      techstack: ["NextJS", "TailwindCSS", "TypeScript"],
      link: "https://github.com/somanshubhardwaj/nuxtproject",
    },
    {
      id: 9,
      name: "NewsApp",
      description: "A news app",
      techstack: ["NextJS", "TailwindCSS", "JavaScript", "API"],
      link: "https://github.com/somanshubhardwaj/newsapp",
    },
    {
      id: 10,
      name: "Stock",
      description: "A stock website",
      techstack: ["NextJS", "TailwindCSS", "JavaScript", "API"],
      link: "https://github.com/somanshubhardwaj/stock",
    },
  ];
  return (
    <div className="">
      {projectlist.map((project) => (
        <div className="project bg-gray-900 pt-6 rounded-xl my-2 px-3">
          <a href={project.link} className="text-lg font-bold text-[#60aeff]">
            {project.name}
          </a>
          <p className="text-sm text-gray-400">{project.description}</p>
          <div className="flex gap-2 py-2">
            {project.techstack.map((tech) => (
              <span className="text-sm border  border-[#60aeff] px-3 py-1 rounded-3xl">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
