import {useState} from 'react'
import "./Works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      title: "Mentor Me",
      desc:
        "I completed a pair programming end-to-end React project using the MERN stack and created a React app based on my own passion - Pokemon",
      img:
        "https://raw.githubusercontent.com/rosemaryku/mentor-me/main/docs/search.gif",
      src: "https://github.com/jaeykimmy/mentor_me"
    },
    {
      id: "2",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      title: "Scheduler",
      desc:
        "An interview scheduling application where the user can book, delete and edit their appointments. Built with React, Cypress and Jest",
      img:
        "assets/demo.gif",
      src: "https://github.com/jaeykimmy/scheduler"
    },
    {
      id: "3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      title: "Pokemon Speed Calculator",
      desc:
        "A handy tool when playing Pokemon Showdown to determine which Pokemon is faster at any level or stat distribution",
      img:
        "assets/speedcalc.gif",
      src: "https://github.com/jaeykimmy/react-pokemon-calc"
    },
  ];

  const handleClick = (direction) => {
    direction === "left" ?
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      {/* we know from css that -100vw or 100vw changes the slide over left or right respectively */}
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}> 
        {data.map((data) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={data.icon} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <a href={data.src}><span>Project</span></a>
              </div>
            </div>
            <div className="right">
              <img src={data.img} alt="" />
            </div>
          </div>
        </div>
          
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>

    </div>
  )
}
