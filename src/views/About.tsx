import "../assets/about.scss"

const About = (): JSX.Element => {

  const frontend = [{
    title: "React",
    src: ""
  }, {
    title: "Redux",
    src: ""
  }, {
    title: "SCSS",
    src: ""
  }, {
    title: "CSS3",
    src: ""
  }, {
    title: "HTML5",
    src: ""
  }];

  const backend = [{
    title: "Express",
    src: ""
  }, {
    title: "Node",
    src: ""
  }, {
    title: "Firebase",
    src: ""
  }, {
    title: "Mongoose",
    src: ""
  }];

  return (
    <div className="about">

      <div className="introduction">
        <span className="hello_txt">HELLO</span>

        <h1><span className="imp_primary">I'm</span> Nishant Chorge.</h1>
        <h3>I Love building things for <span className="imp_primary">web.</span ></h3>
        <h3>I'm a web developer & programmer living in <span className="imp_primary">Maharashtra, India.</span></h3>
      </div>

      <div className="skills">

        <div className="frontend">
          <span className="title">FrontEnd:</span>

          {frontend.map(({ src, title }): JSX.Element => {
            return <span className="chip" title={title}>{title}</span>
          })}

        </div>

        <div className="backend">
          <span className="title">BackEnd:</span>

          {backend.map(({ src, title }): JSX.Element => {
            return <span className="chip" title={title}>{title}</span>
          })}

        </div>

      </div>
    </div>
  )
}

export default About
