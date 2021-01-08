import { ReactComponent as ReactLogo } from "../assets/react.svg"
import { ReactComponent as ReduxLogo } from "../assets/redux.svg"
import { ReactComponent as SassLogo } from "../assets/sass.svg"
import { ReactComponent as ExpressLogo } from "../assets/express.svg"
import { ReactComponent as NodeLogo } from "../assets/node.svg"
import { ReactComponent as MongoLogo } from "../assets/mongo.svg"
import { ReactComponent as FirebaseLogo } from "../assets/firebase.svg"
import { ReactComponent as GitLogo } from "../assets/git.svg"

const frontend = [{
  title: "React",
  src: <ReactLogo />
}, {
  title: "Redux",
  src: <ReduxLogo />
}, {
  title: "SCSS",
  src: <SassLogo />
}];

const backend = [{
  title: "Express",
  src: <ExpressLogo />
}, {
  title: "Node",
  src: <NodeLogo />
}, {
  title: "Firebase",
  src: <FirebaseLogo />
}];

const misc = [{
  title: "git",
  src: <GitLogo />
}, {
  title: "MongoDB",
  src: <MongoLogo />
}];

const lang = [{
  type: "frontend",
  data: frontend
}, {
  type: "backend",
  data: backend
}, {
  type: "misc",
  data: misc
}
]

export default lang;
