import React from 'react';
import coverImage from "../../assets/cover-img/IMG_7956_Original.jpg";


const About = () => {
  return (
    <section className="my-5">
      <img id="cover-img" src={coverImage} alt="website author"/>
      <h1 id="about">ABOUT</h1>
      <p> Layne Wegenast Navarro is a full-stack developer living in Austin, TX. In 2019 she received her BA in Art History and is currently in the University of Texas at Austin Coding Bootcamp.</p>
    </section>
  )
}

export default About;