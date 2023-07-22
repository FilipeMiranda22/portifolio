import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";

import Work1 from "./assets/MoviesLib.png";
import Work2 from "./assets/ProjetoCosts.png";
import Work3 from "./assets/AppsDiversos.png";
import Work4 from "./assets/SecretWord.png";
import Work5 from "./assets/MiniBlog.png";
import Work6 from "./assets/EmBreve.png";

import C1 from "./assets/C1.jpg";
import C2 from "./assets/C2.jpg";
import C3 from "./assets/C3.jpg";
import C4 from "./assets/C4.jpg";
import C5 from "./assets/C5.jpg";
import C6 from "./assets/C6.jpg";
import C7 from "./assets/C7.jpg";
import C8 from "./assets/C8.jpg";
import C9 from "./assets/C9.jpg";
import C10 from "./assets/C10.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "#home",
  },

  {
    id: 2,
    name: "Sobre",
    icon: <FaUser className="nav_icon" />,
    path: "#about",
  },

  {
    id: 3,
    name: "Portifólio",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "#portfolio",
  },

  {
    id: 4,
    name: "Contato",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "#contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Nome: ",
    description: "Filipe",
  },

  {
    id: 2,
    title: "Sobrenome: ",
    description: "Miranda",
  },

  {
    id: 3,
    title: "Idade: ",
    description: "22 anos",
  },

  {
    id: 4,
    title: "Nacionalidade: ",
    description: "Brasileiro",
  },

  {
    id: 5,
    title: "Freelance: ",
    description: "Disponível",
  },

  {
    id: 6,
    title: "Celular: ",
    description: "(83) 98872-9338",
  },

  {
    id: 10,
    title: "Linguagens: ",
    description: "Português (nativo), Inglês (Intermediário)",
  },
];

export const stats = [
  {
    id: 1,
    no: "4+",
    title:
      "Anos cursando <br /> Engenharia de Computação no IFPB - Campina Grande",
  },

  {
    id: 2,
    no: "6+",
    title:
      "Projetos Completos e alguns outros já em andamento. <br />Alguns estão disponíveis para demonstração na próxima sessão.",
  },

  {
    id: 3,
    no: "10+",
    title:
      "Tenho uma diversidade de certificados abrangendo diferentes áreas, incluindo postura profissional, análise de dados e desenvolvimento web.",
  },
];

export const resume = [
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2021",
    title: "Atendente de Telemarketing <span> Orbitall by Stefanini </span>",
    desc: "Neste trabalho, ganhei experiência em lidar com clientes e fornecer suporte eficiente, desenvolvendo habilidades de comunicação e resolução de problemas que são essenciais para interações com os usuários finais de aplicativos e sistemas.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019 - Cursando",
    title: "Engenharia da Computação <span> IFPB - Campina Grande</span>",
    desc: "Adquiri conhecimentos, e continuo no aprendizado, de fundamentos em algoritmos, estruturas de dados e programação, fornecendo uma base sólida para a resolução de problemas complexos no mundo Dev. ",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2006 - 2018",
    title: "Ensino Médio <span> Fundação Bradesco </span>",
    desc: "Base educacional sólida e ampla, que proporcionou uma formação geral abrangente. Através dessa experiência, desenvolvi habilidades de organização, pensamento crítico e resolução de problemas, que são essenciais para o campo da tecnologia.",
  },
];

export const certifieds = [
  {
    id: 1,
    title: "Scrum Fundamentals",
    img: C1,
  },

  {
    id: 2,
    title: "Microsoft Excel 2016 - Básico",
    img: C2,
  },

  {
    id: 3,
    title: "Postura e Imagem Profissional (PIP)",
    img: C5,
  },

  {
    id: 4,
    title: "Microsoft World 2016 - Básico",
    img: C6,
  },

  {
    id: 5,
    title: "Omnistack",
    img: C3,
  },

  {
    id: 6,
    title: "Accenture Academy - Tech's Cool: Oracle BRM",
    img: C4,
  },

  {
    id: 7,
    title: "Fundamentos: dados, dados, em todos os lugares",
    img: C7,
  },

  {
    id: 8,
    title: "Fazer perguntas para tomar decisões com base em dados",
    img: C8,
  },

  {
    id: 9,
    title: "Preparar os Dados para Exploração",
    img: C9,
  },

  {
    id: 10,
    title: "Processar os dados para limpá-los",
    img: C10,
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    icon: <FaHtml5 />,
    percentage: "80",
  },

  {
    id: 2,
    title: "JavaScript",
    icon: <BiLogoJavascript />,
    percentage: "70",
  },

  {
    id: 3,
    title: "CSS",
    icon: <FaCss3Alt />,
    percentage: "70",
  },

  {
    id: 4,
    title: "React",
    icon: <FaReact />,
    percentage: "75",
  },

  {
    id: 5,
    title: "Laravel",
    icon: <FaLaravel />,
    percentage: "35",
  },

  {
    id: 6,
    title: "PHP",
    icon: <FaPhp />,
    percentage: "40",
  },

  {
    id: 7,
    title: "MongoDB",
    icon: <BiLogoMongodb />,
    percentage: "50",
  },

  {
    id: 8,
    title: "Python",
    icon: <FaPython />,
    percentage: "68",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "MoviesLib",
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição: ",
        desc: "Este é um projeto que faz uso da API do TMDB para criar uma biblioteca de filmes. Eles são classificados de acordo com suas avaliações e além disso, é possível ver detalhes como sinopse, receita, orçamento e duração.",
      },
      {
        icon: <FaGithub />,
        title: "GitHub: ",
        desc: "github.com/FilipeMiranda22/MoviesLib",
      },
      {
        icon: <FaCode />,
        title: "Linguagem/Tecnologias : ",
        desc: "ReactJs, JavaScript, Css, Api (TMDB)",
      },
      {
        icon: <FiExternalLink />,
        title: "Acesse: ",
        desc: "movies-lib-alpha.vercel.app",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Projeto Costs",
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição: ",
        desc: "Este é um site desenvolvido em React com o objetivo de aplicar conceitos básicos de CRUD juntamente com algumas regras de negócio.",
      },
      {
        icon: <FaGithub />,
        title: "GitHub: ",
        desc: "github.com/FilipeMiranda22/projeto-costs-react",
      },
      {
        icon: <FaCode />,
        title: "Linguagens/Tecnologias: ",
        desc: "ReactJS, Css, json-server",
      },
      {
        icon: <FiExternalLink />,
        title: "Acesse: ",
        desc: "projeto-costs-react-theta.vercel.app",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Apps Diversos - 3 em 1",
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição: ",
        desc: "Aplicativos feitos para treinar React e lógica de programação. São eles: Conversor de números, Jogo da Vida (John Conway) e Conta de um restaurante.",
      },
      {
        icon: <FaGithub />,
        title: "GitHub: ",
        desc: "github.com/FilipeMiranda22/rota_das_oficinas-teste",
      },
      {
        icon: <FaCode />,
        title: "Linguagem: ",
        desc: "ReactJs",
      },
      {
        icon: <FiExternalLink />,
        title: "Acesse: ",
        desc: "rota-das-oficinas-teste.vercel.app",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Secret Word",
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição: ",
        desc: "O Secret Word é um jogo desenvolvido em React que desafia você a adivinhar uma palavra ao fornecer algumas letras e receber dicas.",
      },
      {
        icon: <FaGithub />,
        title: "GitHub: ",
        desc: "github.com/FilipeMiranda22/secret_word",
      },
      {
        icon: <FaCode />,
        title: "Linguagem/Tecnologias: ",
        desc: "ReactJs, JavaScript, CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Acesse: ",
        desc: "secret-word-amber-mu.vercel.app",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Mini Blog",
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição: ",
        desc: "Explore um Mini Blog dinâmico feito com Firebase e React, onde é possível realizar cadastro, login e publicações com imagens! Um CRUD também foi feito para manipular suas postagens na Dashboard.",
      },
      {
        icon: <FaGithub />,
        title: "GitHub: ",
        desc: "github.com/FilipeMiranda22/mini_blog",
      },
      {
        icon: <FaCode />,
        title: "Linguagem/Tecnologias: ",
        desc: "FireBase, ReactJs, JavaScript, CSS, ContextAPI, Autenticação",
      },
      {
        icon: <FiExternalLink />,
        title: "Acesse: ",
        desc: "mini-blog-reactjs.vercel.app",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Em breve...",
    details: [
      {
        icon: <FiFileText />,
        title: "Descrição: ",
        desc: "Em breve...",
      },
      {
        icon: <FaGithub />,
        title: "GitHub: ",
        desc: "Em breve...",
      },
      {
        icon: <FaCode />,
        title: "Linguagem/Tecnologias: ",
        desc: "Em breve...",
      },
      {
        icon: <FiExternalLink />,
        title: "Acesse: ",
        desc: "Em breve...",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
    darkColor: "hsl(252, 35%, 41%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
    darkColor: "hsl(4, 93%, 44%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
    darkColor: "hsl(271, 76%, 43%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
    darkColor: "hsl(225, 73%, 47%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
    darkColor: "hsl(43, 74%, 39%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
    darkColor: "hsl(339, 81%, 56%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
    darkColor: "hsl(80, 61%, 40%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
    darkColor: "hsl(19, 96%, 42%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
    darkColor: "hsl(88, 65%, 33%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
    darkColor: "hsl(42, 100%, 40%)",
  },
];
