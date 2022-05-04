import React from 'react'
import "./Intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Intro() {

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jaeyoung Kim</h1>
          <h3>Full Stack<span> Developer</span></h3>
        </div>
        <a href="portfolio">
          <KeyboardArrowDownIcon className={'arrow'}/>
        </a>
      </div>
    </div>
  )
}
