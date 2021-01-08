import { ProjectData } from "./ProjectData"
import "../styles/project.scss"

const Project = (): JSX.Element => {
  return (
    <div className="project">
      {
        ProjectData.map(({ img, repo, live, desc }): JSX.Element => (
          <div className="card">
            <div className="img">
            </div>
            <div className="details">
              <div className="btn">
                <a href={repo}>repo</a>
                <a href={live}>watch live</a>
              </div>
              <div className="desc">
                <p>{desc}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Project
