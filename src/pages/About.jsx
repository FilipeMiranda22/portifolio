import Info from "../components/Info";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import { FaDownload } from "react-icons/fa";
import "./About.css";
import { resume } from "../data";
import ResumeItem from "../components/ResumeItem";
import CertifiedItem from "../components/CertifiedItem";

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="about">
        <h2 className="section_title">
          Sobre <span>Mim</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Informações Pessoais</h3>

            <ul className="info_list grid">
              <Info />
            </ul>

            <a
              href="https://drive.google.com/file/d/1i_0iIIsIDuhDZH5vPQybBLF4uN0SQ8Ix/view?usp=sharing"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar Cv
              <span className="button_icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </div>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section_subtitle subtitle_center">Minhas Habilidades</h3>
        <div className="skills_container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section_subtitle subtitle_center">
          Experiência e Formação
        </h3>
        <div className="resume_container grid">
          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="certifieds">
        <h3 className="section_subtitle subtitle_center">Certificados</h3>
        <CertifiedItem />
      </section>
    </section>
  );
};

export default About;
