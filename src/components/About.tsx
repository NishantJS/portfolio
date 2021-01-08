import "../styles/about.scss";
import GitLogo from "../assets/git.svg";

const About = (): JSX.Element => {
  return (
    <div className="about">
      <span className="hello_txt">HELLO</span>
      <h1><span className="imp_primary">I'm</span> Nishant Chorge.</h1>
      <h3>I Love building things for <span className="imp_primary">web</span >.</h3>
      <h3>I want to make things that make a <span className="imp_primary">difference</span>.</h3>
      <h3>I'm a web developer living in <span className="imp_primary">Maharashtra, India</span>.</h3>
      <button>
        <a href={GitLogo} download title="Download Resume">Resume</a>
      </button>
      <a className="secondary_btn" href="mailto:nishantchorge79@gmail.com">Let's talk</a>
    </div>
  )
}

export default About;
