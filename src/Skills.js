import React from "react";
import { skillsData } from "./data";
const Skills = () => {
  return(
    <>
        <h1 style={{color: 'white', textAlign: 'center'}}>Skills</h1>
        <div className="container">
            <div className="card">
                <h2 className="card-title" style={{textAlign:'center'}}>Technical Skills</h2>
                <div className="card-body tech-skills">
                    {skillsData.map((skill) => {
                        const {id, name, logo} = skill;
                        return (
                            <h3 className="card-text" key={id} style={{textAlign:'center'}}>
                                <img src={logo} alt={name} /> 
                                {name}
                            </h3>
                        )
                    })}
                </div>
            </div>
            <div className="card">
                <h2 className="card-title" style={{textAlign:'center'}}>IT Construct</h2>
                <div className="card-body">
                    <p className="card-text" style={{textAlign:'center'}}> Data Structure and Algorithm </p>
                    <p className="card-text">Object Oriented Programming</p>
                    <p className="card-text">Operating System</p>
                    <p className="card-text">Database Management System</p>
                </div>
            </div>
            <div className="card">
                <h2 className="card-title" style={{textAlign:'center'}}>Technical Skills</h2>
                <div className="card-body tech-skills">
                    {skillsData.map((skill) => {
                        const {id, name, logo} = skill;
                        return (
                            <h3 className="card-text" key={id} style={{textAlign:'center'}}>
                                {/* <img src={logo} alt={name} />  */}
                                {name}
                            </h3>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  );
};

export default Skills;
