import React from "react";
import Profile from './vikasProfile.png'
const About = () => {
  return(
    <section className="hero">
        <div>
            <h1>Vikas Gupta</h1>
            <p>A paragraph is a collection of words strung together to make a longer unit than a sentence. Several sentences often make a paragraph. There are normally three to eight sentences in a paragraph. Paragraphs can start with a five-space indentation or by skipping a line and then starting over</p>
            <a href="#1" className="cta">CONTACT ME</a>
        </div>
        <img src={Profile} alt="" />
    </section>
  ) ;
};

export default About;
