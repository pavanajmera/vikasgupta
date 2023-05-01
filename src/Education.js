import React, { useState } from "react";
import { educationDetails } from "./data";

const Education = () => {
    const [data, setData] = useState(educationDetails)
    return(
    <>
        <h1 style={{color: 'white', textAlign: 'center'}}>Education</h1>
        <div className="container">
            {data.map((education) => {
                        // console.log(education);
                const {id, course, institution, year, grade} = education;
                    return(
                        <div key={id} className="card">
                            <div className="card-body">
                                <h2 className="card-title">{course}</h2>
                                <p className="card-text">{institution}</p>
                                <p className="card-text">Year: {year}</p>
                                <p className="card-text">Grade: {grade}</p>
                            </div>
                        </div>
                    )
            })}
            
        </div>
    </>
    );
};

export default Education;
