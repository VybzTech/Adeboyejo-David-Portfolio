import React from "react";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <blockquote className="content">
      <Fade triggerOnce cascade big delay={1200}>
        <p>
          Dear Reader, I extend my warm greetings to you. My name is Adeboyejo
          David, and I am an engineer known for my unwavering commitment,
          production of high-quality work and my enthusiasm for scalable
          solutions. My journey into the world of website development began in
          early 2020, when I participated in a transformative training program
          that completely reshaped my perception of the dynamic tech industry.
        </p>
        <p>
          As a skilled developer, I can create fully functional React websites
          using HTML, CSS, JavaScript, TypeScript, and SCSS. I'm experienced in
          integrating tools like Bootstrap, JQuery, Super CSS, and Tailwind CSS
          to create amazing user interfaces. Currently, I'm focused on working
          with the Asp .NET Core Framework and using C# for database
          manipulation.I also have a solid foundation in back-end development,
          particularly using Backend as a Service (BAAS) solutions like
          Firebase.
        </p>
        <p>
          I am a graduate of Lagos State University (LASU)🎓, where I majored in
          Electronic & Computer Engineering. Additionally, I have obtained
          certification as a React developer, showcasing my expertise in the
          field. My genuine eagerness lies in applying my skills to enhance
          software development initiatives for employers or tech startups.
          Together, let us collaborate to build advanced and innovative
          solutions that meet your unique needs!
        </p>
      </Fade>
    </blockquote>
  );
};

export default Intro;
