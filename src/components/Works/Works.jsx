import {useState} from 'react'
import "./Works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      title: "React",
      desc:
        "I completed a pair programming end-to-end React project using the MERN stack and created a React app based on my own passion - Pokemon",
      img:
        "https://raw.githubusercontent.com/rosemaryku/mentor-me/main/docs/search.gif",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
                <span>Projects</span>
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
