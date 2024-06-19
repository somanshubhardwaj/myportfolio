import profile from "./assets/react.svg";
import { motion, AnimatePresence } from "framer-motion";
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
  const [tabs, setTabs] = useState<number>(1);
  const tabsList = [
    {
      id: 1,
      name: "About",
    },
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
    <div className="bg-gray-900 text-white min-h-screen p-3 flex justify-center">
      <div className="w-full md:w-1/3 lg:w-1/3">
        <nav className="flex justify-between items-center">
          <div className="border px-2 py-1 rounded-md">
            <a className="gap-2 flex justify-between items-center" href="">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
              somanshubhardwaj
            </a>
          </div>
          <div className="flex gap-2">
            <a href="" className="">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a href="" className="">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="" className="">
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
              <a className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">bhardwaj.somanshu</span>
              </a>
              <a className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">@somanshubha</span>
              </a>
              <a className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-gray-400"
                />
                <span className="font-semibold">in/somanshubhardwaj</span>
              </a>
              <a className="flex gap-2 items-center">
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
                <motion.h1 className="text-xl font-bold text-center "  whileHover={{ scale: 1.2 }}>{tab.name}</motion.h1>
              </motion.div>
            ))}
          </section>
          <section className="">
            <AnimatePresence>
              {tabs === 1 && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h1 className="text-xl font-bold">About</h1>
                  <div className="projects mt-6">
                    <div className="project bg-gray-900 p-3 rounded-xl my-2">
                      <h1 className="text-lg font-bold">Project 1</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nemo.
                      </p>
                    </div>
                    <div className="project bg-gray-900 p-3 rounded-xl my-2">
                      <h1 className="text-lg font-bold">Project 2</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nemo.
                      </p>
                    </div>
                    <div className="project bg-gray-900 p-3 rounded-xl my-2">
                      <h1 className="text-lg font-bold">Project 3</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nemo.
                      </p>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {tabs === 2 && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h1 className="text-xl font-bold">Projects</h1>
                  <div className="projects mt-6">
                    <div className="project bg-gray-900 p-3 rounded-xl my-2">
                      <h1 className="text-lg font-bold">Project 1</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nemo.
                      </p>
                    </div>
                    <div className="project bg-gray-900 p-3 rounded-xl my-2">
                      <h1 className="text-lg font-bold">Project 2</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nemo.
                      </p>
                    </div>
                    <div className="project bg-gray-900 p-3 rounded-xl my-2">
                      <h1 className="text-lg font-bold">Project 3</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nemo.
                      </p>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {tabs === 3 && (
                <motion.section
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Skills />
                </motion.section>
              )}
            </AnimatePresence>
          </section>
        </section>
      </div>
    </div>
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
