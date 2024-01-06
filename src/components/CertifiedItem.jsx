import { useState } from "react";
import { certifieds } from "../data";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import "./CertifiedItem.css";

const CertifiedItem = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [showButtons, setShowButtons] = useState(true);

  const nextSlide = () => {
    if (slideIndex !== certifieds.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === certifieds.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(certifieds.length);
    }
  };

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className={`container_slider ${showButtons ? "show-buttons" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {certifieds.map(({ id, title, img }) => (
        <div
          key={id}
          className={slideIndex === id ? "slide active_animation" : "slide"}
        >
          <h3>{title}</h3>
          <img src={img} alt={title} />
        </div>
      ))}
      <button onClick={nextSlide} className="btn_slide next">
        <BiRightArrowAlt />
      </button>
      <button onClick={prevSlide} className="btn_slide prev">
        <BiLeftArrowAlt />
      </button>

      <div className="container_dots">
        {Array.from({ length: certifieds.length }).map((item, index) => (
          <div
            key={index}
            className={`dot ${slideIndex === index + 1 && "active_dot"}`}
            onClick={() => moveDot(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CertifiedItem;
