import Profile from "../assets/my_photo.jpg";
import { Scrollchor, swing } from "react-scrollchor";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home section grid">
      <img src={Profile} alt="" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>Eu sou Filipe</span> <br />
            Front-End Dev
          </h1>

          <p className="home_description">
            Sou um estudante de Engenharia da Computação no Instituto Federal da
            Paraíba - Campina Grande e ao longo da minha jornada acadêmica e por
            meio de projetos pessoais, adquiri habilidades em várias linguagens
            de programação, desenvolvimento web e banco de dados. Tenho um forte
            interesse e foco no desenvolvimento front-end, no entanto, também
            estou empenhado em expandir meu conhecimento e me tornar um
            desenvolvedor Full-Stack.
          </p>

          <Scrollchor
            to="#about"
            animate={{ duration: 1000, easing: swing }}
            className="button"
          >
            Mais sobre mim{" "}
            <span className="button_icon">
              <FaArrowRight />
            </span>
          </Scrollchor>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  );
};

export default Home;
