import React, { useState } from "react";
import { Job } from "./data";
import { FaAngleDoubleRight, FaCalendar } from 'react-icons/fa';
const Experience = () => {
    const [jobs, setJob] = useState(Job)
    return(
        <>
            <h1 style={{color: 'white', textAlign: 'center'}}>Experience</h1>
            <div className="container1">
                {jobs.map((job)=>{
                    const {id, company, dates, title, duties} = job
                    return(
                        <article key={id} style={{color: 'white'}}>
                            <h3 style={{fontSize: '1.953rem'}}>{title}</h3>
                            <span className="job-company" >{company}</span>
                            <p className="job-date"> <FaCalendar></FaCalendar> {dates}</p>
                            {duties.map((duty, index)=>{
                                return(
                                  <div key={index}>
                                    <div className="job-desc">
                                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight> <h3>{duty}</h3>
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
