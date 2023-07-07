
import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portifolio from './pages/Portifolio'

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Themes/>
        <Home/>
        <About/>
        <Portifolio/>
        <Contact/>
    </div>
  )
}

export default App
