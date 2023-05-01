import React, { useState } from "react";
import { Job } from "./data";
import ChevronRight from './images/icons8-chevron-right-48.png'
import { FaAngleDoubleRight } from 'react-icons/fa';
const Experience = () => {
    const [jobs, setJob] = useState(Job)
    // console.log(job);
    return(
        <>
            <h1 style={{color: 'white', textAlign: 'center'}}>Experience</h1>
            <div className="container1">
                {/* <FaAngleDoubleRight></FaAngleDoubleRight> */}
                {/* <h1>
                    <img src={ChevronRight} alt="" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nemo at, et autem magnam voluptatibus cumque doloribus fuga quam exercitationem eaque laborum quisquam quibusdam qui sit libero nobis vel quas?
                </h1> */}
                {jobs.map((job)=>{
                    const {id, company, dates, title, duties} = job
                    return(
                        <article key={id} style={{color: 'white'}}>
                            <h3 style={{fontSize: '1.953rem'}}>{title}</h3>
                            <span className="job-company" >{company}</span>
                            <p className="job-date">{dates}</p>
                            {duties.map((duty, index)=>{
                                return(
                                  <div key={index}>
                                    <div className="job-desc">
                                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight> <p>{duty}</p>
                                    </div>
                                  </div>  
                                )
                            })}
                        </article>
                    )
                })}
            </div>
        </>
    );
};

export default Experience;
