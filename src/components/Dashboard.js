import React, { useState } from 'react'
import avatar from "../assests/resume.jpg";
import { useHistory } from "react-router-dom"
import Pdf from "../assests/Md. Shafiul Islam.pdf"

export default function Dashboard() {
    const history = useHistory();
    const [projects, setProjects] = useState(false)
    return (
        <div className="dashboard">
            <div className="user">
              <img src={avatar} alt="" />
              <h3>Md. Shafiul Islam</h3>
              <p>Front End Developer</p>
            </div>
            <div className="links">
            <div className="link">
                <i class="fas fa-phone"></i>
                <h6>01778816069</h6>
              </div>
              <div className="link">
                <i class="fas fa-envelope-square"></i>
                <h6>shafiswe@gmail.com</h6>
              </div>
              <div className="link">
                <i class="fab fa-github"></i>
                <h6><a target="_blank" rel="noreferrer" href="https://github.com">Github</a></h6>
              </div>
              <div className="link">
                <i class="fab fa-linkedin"></i>
                <h6><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-shafiul-islam-521b21169/">Linkedin</a></h6>
              </div>
            </div>
            <div className="pro">
              <button><a href = {Pdf} rel="noreferrer" target = "_blank">Resume</a></button>
              <button onClick={()=>{
                  setProjects(prev => !prev)
                  if(projects){
                    history.push("/")
                  }else{
                    history.push("/projects")
                  }
                }
              } > {projects ? "Skills" : "Projects"}</button>
            </div>
          </div>
    )
}
