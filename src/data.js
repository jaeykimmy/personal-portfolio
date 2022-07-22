import mentorMeImgSrc from "./assets/mentorme.png";
import speedCalc from "./assets/pokemoncalc.png";
import pbm from "./assets/pbm.png";
import interviewer from "./assets/interviewer.png";
import tweet_text_box from "./assets/tweet-text-box.png";
import pokemonTcg from "./assets/pokemontcg.gif";
import speedCalcGif from "./assets/speedcalc.gif";
import schedulerDemoGif from "./assets/demo.gif";
import reactsvg from "./assets/react-original.svg";
import expresssvg from "./assets/express-original.svg";
import resumesvg from "./assets/resume.svg";
import postgresqlsvg from "./assets/postgresql-plain.svg";
import nodejssvg from "./assets/nodejs-original.svg";
import rubysvg from "./assets/ruby-original.svg";
import railssvg from "./assets/rails-plain.svg";
import jungle from "./assets/jungle.png";

export const webPortfolio = [
  {
    id: 1,
    icons: [expresssvg, nodejssvg, postgresqlsvg],
    title: "Pokemon Black Market",
    img: pbm,
    desc: "A pair-programmed end-to-end e-commerce application where users can (legally) buy and sell Pokemon",
    src: "https://github.com/jaeykimmy/buy-sell-store-LHL",
  },
  {
    id: 2,
    icons: [expresssvg, nodejssvg],
    title: "Tweeter",
    img: tweet_text_box,
    desc: "Tweeter is a simple, single-page Twitter clone.",
    src: "https://github.com/jaeykimmy/tweeter",
  },
  {
    id: 3,
    icons: [postgresqlsvg, rubysvg, railssvg],
    title: "Jungle",
    img: jungle,
    desc: "A mini e-commerce application built with Rails 4.2 with PostgreSQL and Stripe API",
    src: "https://github.com/jaeykimmy/jungle-rails",
  },
];

export const reactPortfolio = [
  {
    id: "1",
    icons: [reactsvg, postgresqlsvg, expresssvg, nodejssvg],
    title: "Mentor Me",
    desc: "I completed a pair programming end-to-end React project using the PERN stack",
    img: "https://raw.githubusercontent.com/rosemaryku/mentor-me/main/docs/search.gif",
    src: "https://github.com/jaeykimmy/mentor_me",
  },
  {
    id: "2",
    icons: [
      reactsvg,
      expresssvg,
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
    ],
    title: "Scheduler",
    desc: "An interview scheduling application where the user can book, delete and edit their appointments. Built with React, Cypress and Jest",
    img: schedulerDemoGif,
    src: "https://github.com/jaeykimmy/scheduler",
  },
  {
    id: "3",
    icons: [reactsvg, nodejssvg],
    title: "Pokemon Speed Calculator",
    desc: "A handy tool when playing Pokemon Showdown to determine which Pokemon is faster at any level or stat distribution",
    img: speedCalcGif,
    src: "https://github.com/jaeykimmy/react-pokemon-calc",
  },
  {
    id: 4,
    icons: [
      reactsvg,
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-plain.svg",
      nodejssvg,
    ],
    title: "Pokemon TCG Gallery",
    desc: "A real-time application to find your favourite Pokemon cards with high resolution images, prices and links to purchase from TCGplayer",
    img: pokemonTcg,
    src: "https://jaeykimmy.github.io/pokemontcg/",
  },
];
export const iconimg = [
  {
    name: "react",
    src: reactsvg,
  },
  {
    name: "postgresql",
    src: postgresqlsvg,
  },
  {
    name: "express",
    src: expresssvg,
  },
  {
    name: "nodejs",
    src: nodejssvg,
  },
  {
    name: "jest",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
  },
  {
    name: "storybook",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
  },
];

export const socialLinks = [
  {
    name: "github",
    src: "https://github.com/jaeykimmy",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "linkedin",
    src: "https://www.linkedin.com/in/jjykim/",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg",
  },
  {
    name: "resume",
    src: "https://resume.creddle.io/resume/7i5eupblvtx",
    img: resumesvg,
  },
];
