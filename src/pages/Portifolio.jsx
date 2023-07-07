import PortifolioItem from '../components/PortifolioItem'
import { portfolio } from '../data'
import './Portifolio.css'

const Portifolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
        <h2 className="section_title">Meu <span>Portifólio</span></h2>
        <div className="portfolio_container container grid">
          {portfolio.map((item) => {
              return <PortifolioItem key={item.id} {...item}/>
          })}
        </div>
    </section>
  )
}

export default Portifolio