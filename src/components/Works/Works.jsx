import "./Works.scss";
import { motion } from "framer-motion";

export default function Works(props) {
  return (
    <div className="works" id="works">
      {/* we know from css that -100vw or 100vw changes the slide over left or right respectively */}

      <motion.div
        className="slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {props.filterTech.map((data) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="container"
            key={data.title}
            viewport={{ once: true }}
          >
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
                  <div className="links">
                    <a href={data.github}>
                      <p>Github</p>
                    </a>
                    <a href={data.src}>{data.src && <p>Link</p>}</a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
