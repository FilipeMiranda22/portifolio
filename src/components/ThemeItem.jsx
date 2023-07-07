/* eslint-disable react/prop-types */

const ThemeItem = ( {color, darkColor, img, changeColor}) => {
  return (
    <img src={img} alt="" className="theme_img" onClick={() => {changeColor(color, darkColor)}}/>
  )
}

export default ThemeItem