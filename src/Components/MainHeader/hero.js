import React from 'react'
import './styles/hero.css'
function Hero() {
  return (
    <header className="hero-content">
      <div className = "img-wrapper">
        <img className="logo-img" src="./home_harmony_logo.jpg" alt="./home_harmony_logo.jpg"></img>
      </div>
      <div className="textContainer">
        <h1 className="mainHeadingText">Home Harmony</h1>
        <span className="ptext">Keep track of your household items with ease.</span>
      </div>
    </header>
  )
}
export default Hero