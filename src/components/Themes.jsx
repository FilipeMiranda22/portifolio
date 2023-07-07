import { themes } from '../data'
import ThemeItem from './ThemeItem'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import "./Themes.css"
import { useEffect, useState } from 'react'

const getStorageColor = () => {
    let color = 'hsl(252, 35%, 51%)';
    let darkColor = 'hsl(252, 35%, 41%)';
    if(localStorage.getItem('color') || localStorage.getItem('darkColor')) {
        color = localStorage.getItem('color');
        darkColor = localStorage.getItem('darkColor');
    }

    return [color,darkColor];
}

const getStorageTheme = () => {
    let theme = 'dark-theme';
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }

    return theme;
}

const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor()[0])
    const [darkColor, setDarkColor] = useState(getStorageColor()[1])
    const [theme, setTheme] = useState(getStorageTheme());

    const changeColor = (color, darkColor) => {
        setColor(color);
        setDarkColor(darkColor);
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color)        
        document.documentElement.style.setProperty('--first-color-dark', darkColor)
        localStorage.setItem('color', color)
        localStorage.setItem('darkColor', darkColor)
    }, [color, darkColor])

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style_switcher`}>
                <div className="style_switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}> 
                    <FaCog/>
                </div>
                <div className="theme_toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>
                <h3 className="style_switcher-title">
                    Style Switcher
                </h3>
                <div className="style_switcher-items">
                    {themes.map((theme, index) => {
                        return (
                            <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                        )
                    })}
                </div>

                <div className="style_switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
            </div> 
        </div>
    )
}

export default Themes