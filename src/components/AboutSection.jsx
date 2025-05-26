import React from "react";
import AboutImg from "../assets/images/about-img.jpg";
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img
              className="img-fluid w-75 shadow"
              src={AboutImg}
              alt="about img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">About me</h2>
            <p className="text-start">
              Hi! I’m harday dwivedi, a 1st year Computer Science student at vaishnav
              Indore with a strong passion for programming.</p>
            <p className="text-start">I enjoy
              building responsive, user-friendly websites and applications that
              solve real-world problems. I’ve worked on several personal and
              academic projects using HTML, CSS, JavaScript, and frameworks like
              React and Node.js.</p>
            <p className="text-start"> Recently, I built a basic-ecoomarce website as personal project, which taught me the importance of companie standerds,
               and clean code practices.</p>
            <p className="text-start">  I'm currently exploring
              backend development and learning about APIs and databases. I'm
              eager to gain more real-world experience through internships or
              freelance opportunities.</p>
               <p className="text-start mb-5"> When I’m not coding, you’ll probably find
              me in gym, with friends, or learning new stuff or studying. I'm always open to new opportunities and
              collaborations—let's connect! </p>
          
            <ViewMyWorkBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
