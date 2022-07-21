import { useState } from "react";
import "./Works.scss";
import { works } from "../../data"; 
import PortfolioList from "../PortfolioList/PortfolioList";

export default function Works() {
  const [selected, setSelected] = useState("react");
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "web",
      title: "Web Apps",
    },
  ];
  return (
    <div className="works" id="works">
      {/* we know from css that -100vw or 100vw changes the slide over left or right respectively */}
      <h1>Works</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div
        className="slider"
      >
        {works.map((data) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <a href={data.src}>
                    <span>Project</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      /> */}
    </div>
  );
}
