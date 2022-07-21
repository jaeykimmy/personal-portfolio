import mentorMeImgSrc from "./assets/mentorme.png";
import speedCalc from "./assets/pokemoncalc.png";
import pbm from "./assets/pbm.png";
import interviewer from "./assets/interviewer.png";
import tweet_text_box from "./assets/tweet-text-box.png";
import pokemonTcg from "./assets/pokemontcg.gif";
import speedCalcGif from "./assets/speedcalc.gif";
import schedulerDemoGif from "./assets/demo.gif";

export const reactPortfolio = [
  {
    id: 1,
    title: "Mentor Me",
    img: mentorMeImgSrc,
    src: "https://github.com/jaeykimmy/personal-portfolio",
  },
  {
    id: 2,
    title: "Pokemon Speed Calculator",
    img: speedCalc,
    src: "https://jaeykimmy.github.io/react-pokemon-calc/",
  },
  {
    id: 3,
    title: "Pokemon TCG Gallery",
    img: pokemonTcg,
    src: "https://jaeykimmy.github.io/pokemontcg/",
  },
];

export const webPortfolio = [
  {
    id: 1,
    title: "Pokemon Black Market",
    img: pbm,
    src: "https://github.com/jaeykimmy/buy-sell-store-LHL",
  },
  {
    id: 2,
    title: "Scheduler",
    img: interviewer,
    src: "https://github.com/jaeykimmy/scheduler",
  },
  {
    id: 3,
    title: "Tweeter",
    img: tweet_text_box,
    src: "https://github.com/jaeykimmy/tweeter",
  },
];

export const works = [
  {
    id: "1",
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg",
    ],
    title: "Mentor Me",
    desc: "I completed a pair programming end-to-end React project using the MERN stack",
    img: "https://raw.githubusercontent.com/rosemaryku/mentor-me/main/docs/search.gif",
    src: "https://github.com/jaeykimmy/mentor_me",
  },
  {
    id: "2",
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    ],
    title: "Scheduler",
    desc: "An interview scheduling application where the user can book, delete and edit their appointments. Built with React, Cypress and Jest",
    img: schedulerDemoGif,
    src: "https://github.com/jaeykimmy/scheduler",
  },
  {
    id: "3",
    icons: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    ],
    title: "Pokemon Speed Calculator",
    desc: "A handy tool when playing Pokemon Showdown to determine which Pokemon is faster at any level or stat distribution",
    img: speedCalcGif,
    src: "https://github.com/jaeykimmy/react-pokemon-calc",
  },
];
