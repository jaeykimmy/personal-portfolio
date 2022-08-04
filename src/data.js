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
import jestsvg from "./assets/jest-plain.svg";
import storybooksvg from "./assets/storybook-original.svg";
import muisvg from "./assets/materialui-plain.svg";
import homesvg from "./assets/Home-icon.svg";
import lyricfy from "./assets/lyricfy.gif";
import calculator from "./assets/calculator.png";
import todo from "./assets/todo.gif";
import typescriptsvg from "./assets/typescript-plain.svg";
export const webPortfolio = [
  {
    id: 1,
    icons: [expresssvg, nodejssvg, postgresqlsvg],
    stacks: ["postgresql", "express", "nodejs"],
    title: "Pokemon Black Market",
    img: pbm,
    desc: "A pair-programmed end-to-end e-commerce application where users can (legally) buy and sell Pokemon",
    github: "https://github.com/jaeykimmy/buy-sell-store-LHL",
  },
  {
    id: 2,
    icons: [expresssvg, nodejssvg],
    stacks: ["express", "nodejs"],
    title: "Tweeter",
    img: tweet_text_box,
    desc: "Tweeter is a simple, single-page Twitter clone.",
    github: "https://github.com/jaeykimmy/tweeter",
  },
  {
    id: 3,
    icons: [postgresqlsvg, rubysvg, railssvg],
    stacks: ["postgresql", "ruby", "rails"],
    title: "Jungle",
    img: jungle,
    desc: "A mini e-commerce application built with Rails 4.2 with PostgreSQL and Stripe API",
    github: "https://github.com/jaeykimmy/jungle-rails",
  },
];

export const reactPortfolio = [
  {
    id: "1",
    icons: [reactsvg, postgresqlsvg, expresssvg, nodejssvg],
    stacks: ["react", "postgresql", "express", "nodejs"],
    title: "Mentor Me",
    desc: "I completed a pair programming end-to-end React project using the PERN stack",
    img: "https://raw.githubusercontent.com/rosemaryku/mentor-me/main/docs/search.gif",
    github: "https://github.com/jaeykimmy/mentor_me",
  },
  {
    id: "2",
    icons: [reactsvg, expresssvg, jestsvg, storybooksvg],
    stacks: ["react", "postgresql", "jest", "storybook"],
    title: "Scheduler",
    desc: "An interview scheduling application where the user can book, delete and edit their appointments. Built with React, Cypress and Jest",
    img: schedulerDemoGif,
    github: "https://github.com/jaeykimmy/scheduler",
  },
  {
    id: "3",
    icons: [reactsvg, nodejssvg],
    stacks: ["react", "nodejs"],
    title: "Pokemon Speed Calculator",
    desc: "A handy tool when playing Pokemon Showdown to determine which Pokemon is faster at any level or stat distribution",
    img: speedCalcGif,
    github: "https://github.com/jaeykimmy/react-pokemon-calc",
    src: "https://jaeykimmy.github.io/react-pokemon-calc/",
  },
  {
    id: "4",
    icons: [reactsvg, muisvg, nodejssvg],
    stacks: ["react", "mui", "nodejs"],
    title: "Pokemon TCG Gallery",
    desc: "A real-time application to find your favourite Pokemon cards with high resolution images, prices and links to purchase from TCGplayer",
    img: pokemonTcg,
    github: "https://github.com/jaeykimmy/pokemontcg",
    src: "https://jaeykimmy.github.io/pokemontcg/",
  },
  {
    id: "5",
    icons: [reactsvg, nodejssvg, expresssvg],
    stacks: ["react", "nodejs", "express"],
    title: "Lyricfy",
    desc: "Lyricfy is a music app using Spotify's Developer API that instantaneously loads the lyrics to your favourite songs when playing",
    img: lyricfy,
    github: "https://github.com/jaeykimmy/spotify-clone",
  },
  {
    id: "6",
    icons: [reactsvg, nodejssvg],
    stacks: ["react", "nodejs"],
    title: "React Calculator",
    desc: "A simple calculator application using React hooks",
    img: calculator,
    github: "https://github.com/jaeykimmy/calc",
    src: "https://jaeykimmy.github.io/calc/",
  },
  {
    id: "7",
    icons: [reactsvg, nodejssvg],
    stacks: ["react", "nodejs"],
    title: "React ToDo List",
    desc: "A todo list to keep your daily tasks organized",
    img: todo,
    github: "https://github.com/jaeykimmy/todo",
    src: "https://jaeykimmy.github.io/todo/",
  },
];
export const iconimg = [
  {
    name: "all",
    src: homesvg,
  },
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
    src: jestsvg,
  },
  {
    name: "storybook",
    src: storybooksvg,
  },
  {
    name: "ruby",
    src: rubysvg,
  },
  {
    name: "rails",
    src: railssvg,
  },
  {
    name: "mui",
    src: muisvg,
  },
  {
    name: "typescript",
    src: typescriptsvg,
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
