import React, { useEffect } from 'react'
import PortfolioList from '../PortfolioList/PortfolioList'
import "./Portfolio.scss"
import { useState } from 'react'
import { featuredPortfolio, reactPortfolio, webPortfolio } from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "react",
      title: "React"
    },
    {
      id: "web",
      title: "Web"
    },
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          
          <div className="item">
            <img src={data.img} alt=""/>
          <h3>{data.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
