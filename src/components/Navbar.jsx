import { useEffect, useState } from 'react';
import { links } from '../data'
import { Scrollchor, swing } from 'react-scrollchor';


import "./Navbar.css"

const Navbar = () => {

  const [isActive, setIsActive] = useState('#home')
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleThreshold = 0.35; // Ajuste a porcentagem de visibilidade aqui
  
      // Verificar se pelo menos 50% da seção está visível
      if (rect.bottom >= windowHeight * visibleThreshold && rect.top <= windowHeight * (1 - visibleThreshold)) {
        currentSection = section;
        break;
      }
    }

    if (currentSection && currentSection.id) {
      setIsActive(`#${currentSection.id}`);
    } else {
      setIsActive(''); // Define como vazio se nenhuma seção estiver visível
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Limpar o evento de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive]); 

  return (
    <>
        <nav className="nav">
            <div className={`${showMenu ? 'nav_menu show-menu' : 'nav_menu'}`}>
                <ul className="nav_list">
                    {links.map(({name, icon, path}, index) => {
                        return (
                            <li className="nav_item" key={index}>
                                <Scrollchor 
                                    to={path} 
                                    animate={{ duration: 1000, easing: swing }} 
                                    className={isActive === path ? 'nav_link active-nav' : 'nav_link'}
                                    onClickCapture={() => setShowMenu(!showMenu)}
                                >
                                    {icon}
                                    <h3 className="nav_name">{name}</h3>
                                </Scrollchor>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div 
              className={`${showMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`} 
              onClick={() => setShowMenu(!showMenu)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </>
  )
}

export default Navbar