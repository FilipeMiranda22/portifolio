import { useEffect, useState } from "react";
import PortifolioItem from "../components/PortifolioItem";
import { portfolio } from "../data";
import "./Portifolio.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Portifolio = () => {
  const itemsPerPage = 6;
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [showButtons, setShowButtons] = useState(true);
  const [slideDirection, setSlideDirection] = useState(""); // New state to track slide direction

  const nextSlide = () => {
    if (endIndex < portfolio.length) {
      setSlideDirection("slide-right");
      setStartIndex(startIndex + itemsPerPage);
      setEndIndex(endIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setSlideDirection("slide-left");
      setStartIndex(startIndex - itemsPerPage);
      setEndIndex(endIndex - itemsPerPage);
    }
  };

  useEffect(() => {
    // Atualizar os itens do portfólio após a classe de transição ser aplicada
    const timeout = setTimeout(() => {
      setPortfolioItems(portfolio.slice(startIndex, endIndex));
      setSlideDirection(""); // Limpar a direção do slide após a transição
    }, 300); // Tempo suficiente para a transição CSS completar (ajuste conforme necessário)

    return () => clearTimeout(timeout);
  }, [startIndex, endIndex]);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  // const handleMouseLeave = () => {
  //   setShowButtons(false);
  // };

  return (
    <section id="portfolio" className="portfolio section">
      <h2 className="section_title">
        Meu <span>Portfólio</span>
      </h2>
      <div
        className={`container_slider_portfolio ${
          showButtons && portfolio.length > 6 ? "show-buttons" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className={`portfolio_container grid ${slideDirection}`}>
          {portfolioItems &&
            portfolioItems.map((item) => {
              return <PortifolioItem key={item.id} {...item} />;
            })}
        </div>
        <button onClick={nextSlide} className="btn_slide next">
          <BiRightArrowAlt />
        </button>
        <button onClick={prevSlide} className="btn_slide prev">
          <BiLeftArrowAlt />
        </button>
      </div>
    </section>
  );
};

export default Portifolio;
