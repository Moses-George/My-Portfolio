import JavaScript from "../../assets/skills/javascript.png";
import ReactJs from "../../assets/skills/react.png";
import Html from "../../assets/skills/html.png";
import Css from "../../assets/skills/css.png";
import Sass from "../../assets/skills/sass.png";
import Typescript from "../../assets/skills/typescript.png";
import Firebase from "../../assets/skills/firebase.jpg";
import Redux from "../../assets/skills/redux.png";
import Api from "../../assets/skills/api.png";
import Git from "../../assets/skills/git.png";
import Github from "../../assets/skills/github.png";
import MUI from "../../assets/skills/mu5.png";
import "../../style/skills.css";
import { motion } from "framer-motion";

const myskills = [
    {
        id: 1,
        name: "Html",
        src: Html
    },
    {
        id: 2,
        name: "Css",
        src: Css
    },
    {
        id: 3,
        name: "Sass",
        src: Sass
    },
    {
        id: 4,
        name: "Javascript",
        src: JavaScript
    },
    {
        id: 5,
        name: "ReactJs",
        src: ReactJs
    },
    {
        id: 6,
        name: "Typescript",
        src: Typescript
    },
    {
        id: 7,
        name: "Firebase",
        src: Firebase
    },
    {
        id: 8,
        name: "Redux",
        src: Redux
    },
    {
        id: 9,
        name: "Api",
        src: Api
    },
    {
        id: 10,
        name: "Git",
        src: Git
    },
    {
        id: 11,
        name: "Github",
        src: Github
    },
    {
        id: 12,
        name: "MUI",
        src: MUI
    }
]

const Skills = () => {


    return (
        <motion.div
            animate={{ scale: 1, opacity: 1, y: 0 }}
            initial={{ scale: 0, opacity: 0, y: 300 }}
            transition={{ duration: 1 }}
            className="about"
        >
            <div className="my-skills">
                {myskills.map(skill => (
                    <div className="my-skill" key={skill.id}>
                        <img src={skill.src} alt="" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
         </motion.div>
    )
}

export default Skills;