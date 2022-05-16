import React from 'react'
import "./Intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Intro() {

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="http://artem.anmedio.ru/dev/planet/clouds.png" alt=""/>
        </div>
        {/* <div className="clouds"></div> */}
      </div>
      <div className="right">
        <div className="wrapper">
          <h4>{'<intro>'}</h4>
          <h2>Hi There, I'm</h2>
          <h1>Jaeyoung Kim</h1>
          <h3><span> Full Stack Developer</span></h3>
          <h4>{'</intro>'}</h4>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className={'arrow'}/>
        </a>
      </div>
    </div>
  )
}
