import {
  javascript,
  nextjs,
  html,
  css,
  aws,
  git,
  mongodb,
  nodejs,
  photoshop,
  react,
  reactnative,
  redux,
  tailwindcss,
  vercel,
  typescript,
  github,
  onlypans,
  minbao,
  rentit,
  tesla,
  honeycomb,
  web,
  layniesWord,
  computer
} from '../public/assets';

const services = [
  {
    title: "IT Technical Support",
    icon: computer,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: 'CSS',
    icon: css
  },
  {
    name: "TailwindCSS",
    icon: tailwindcss,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: "AWS-Amplify",
    icon: aws,
  },
  {
    name: "GitHub",
    icon: github
  },
  {
    name: 'Git',
    icon: git
  },
  {
    name: "Vercel",
    icon: vercel
  },
  {
    name: "Photoshop",
    icon: photoshop
  },
]

const projects = [
  {
    name: "Laynie's Word Adventure",
    description: "Laynie's Word Adventure is a mobile app built using React Native and Expo, created by me for my daughter's enjoyment.",
    tags: [
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: layniesWord,
    source_code_link: "https://github.com/patrickgip94/Laynies-Word-Adventure"
  },
  {
    name: "OnlyPans",
    description:
      "OnlyPans is a cutting-edge app designed specifically for chefs who want to sell their recipes and tutorial videos to a broader audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: onlypans,
    source_code_link: "https://github.com/patrickgip94/OnlyPans",
  },
  {
    name: "Minbao",
    description:
      "Minbao is a website that functions as a clone of IMDb, offering users information and reviews about movies, TV shows, and other forms of entertainment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: minbao,
    source_code_link: "https://github.com/patrickgip94/Minbao",
  },
  {
    name: "Rentit",
    description:
      "rentit is an online real estate and rental marketplace. It’s primary customers are people who want to buy and sell houses or rent houses and real estate agents.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: rentit,
    source_code_link: "https://github.com/patrickgip94/Rentit",
  },
  {
    name: "Tesla App - clone",
    description:
      "The Tesla App-clone was inspired by the original Tesla App, which is a mobile application designed by Tesla for its customers.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://github.com/patrickgip94/Tesla-app-clone",
  },
  {
    name: "Honey Comb",
    description:
      "Honey Comb is a book app that's similar to Goodreads that will allow users to search for books and keep track of the books that they have read.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: honeycomb,
    source_code_link: "https://github.com/patrickgip94/Honey-Comb",
  },
];

export { technologies, projects, services }
