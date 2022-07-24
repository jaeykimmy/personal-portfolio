import { useState, useEffect } from "react";
import "./Works.scss";
import { reactPortfolio, webPortfolio } from "../../data";
import PortfolioList from "../PortfolioList/PortfolioList";

export default function Works(props) {
  // const [selected, setSelected] = useState("react");
  // const [data, setData] = useState([]);

  // const list = [
  //   {
  //     id: "react",
  //     title: "React",
  //   },
  //   {
  //     id: "web",
  //     title: "Web Apps",
  //   },
  // ];
  // useEffect(() => {
  //   switch (selected) {
  //     case "react":
  //       setData(reactPortfolio);
  //       break;
  //     case "web":
  //       setData(webPortfolio);
  //       break;
  //     default:
  //       setData(reactPortfolio);
  //   }
  // }, [selected]);
  return (
    <div className="works" id="works">
      {/* we know from css that -100vw or 100vw changes the slide over left or right respectively */}
      <h1>Works</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul> */}
      <div className="slider">
        {props.filterTech &&
          props.filterTech.map((data) => (
            <div className="container" key={data.title}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="icon-row">
                      {data.icons.map((icon) => (
                        <div className="imgContainer" key={Math.random()}>
                          <img src={icon} alt="" />
                        </div>
                      ))}
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
    </div>
  );
}
