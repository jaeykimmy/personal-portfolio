import React from 'react'
import "./Works.scss"

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" />
                </div>
                <h2>React</h2>
                <p>I completed a pair programming end-to-end React project using the MERN stack and created a React app based on my own passion - Pokemon</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://raw.githubusercontent.com/rosemaryku/mentor-me/main/docs/search.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />

    </div>
  )
}
