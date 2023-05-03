import React from "react";
import { projectDetails } from "./data";
const Projects = () => {
  return(
    <>
      <section className="projects">
        <div className="title">
          <h1 style={{textAlign: 'center'}} className="project">My Projects</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          {/* <a href="#1">
            <div className="img-container">
              <span className="">
                <img src="https://react-projects.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fimages2.imgbox.com%2Fda%2Fc7%2FscG3aS8y_o.png?url=https%3A%2F%2Fimages2.imgbox.com%2Fda%2Fc7%2FscG3aS8y_o.png&w=1920&q=75" alt="" />
              </span>
            </div>
            <footer>
              <h5>Buddy</h5>
            </footer>
          </a> */}
          {projectDetails.map((project)=>{
            const {id, projectName, image, link, demo, technologies} = project
            return(
              <div key={id} className="card1">
                <img src="https://picsum.photos/400/300" alt={projectName}/>
                <div className="card-content">
                  <h3>{projectName}</h3>
                  <p>Technologies Used: {technologies}</p>
                  <footer style={{display:'flex', justifyContent:'space-around'}}>
                    <button>Code</button>
                    <button>Demo</button>
                  </footer>
                </div>
              </div>
            )
          })}
          <div className="card1">
            <img src="https://picsum.photos/400/300" alt=""/>
            {/* <img src="https://react-projects.netlify.app/_ipx/w_1920,q_75/https%3A%2F%2Fimages2.imgbox.com%2Fda%2Fc7%2FscG3aS8y_o.png?url=https%3A%2F%2Fimages2.imgbox.com%2Fda%2Fc7%2FscG3aS8y_o.png&w=1920&q=75" alt=""/> */}
            <div className="card-content">
              <h3>Project Name</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non purus risus. Aliquam erat volutpat.</p>
              <button>Learn More</button>
              <button>Learn More</button>
            </div>
         </div>
        </div>
        
      </section>
    </>
  );
};

export default Projects;
