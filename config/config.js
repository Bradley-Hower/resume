
import profile from './profile.png';
import { faGithub, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "BH",
  links: [
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "GitHub",
      link: "https://github.com/Bradley-Hower"
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/bradley-m-hower/",
    },
    {
      title: "Blog",
      link: "/blog",
    }
  ],
}

export const resume = {
  title: "Resume",
  link: "/resume.pdf",
  isPrimary: false,
}

export const intro = {
  greeting: "Good day.",
  title: "I am Bradley Hower.",
  description: "Web applications developer.",
  description2: "A pragmatic programmer.",
  description3: "Your best employee.",
  image: profile.src,
  buttons: [
    {
      title: "Resume ↗",
      link: "/resume.pdf",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "About",
  description: [
    'During my previous work in mortgages, I used to get questions from clients and my friends asking "Should I invest in real estate?" or likewise, "Should I buy or rent?" And I did not know the answer. Being that I like numbers, I decided to build a calculator. This calculator would determine which path gave the best yield, and thus, which choice was objectively better. It was complicated. Yet, I really enjoyed this type of work. Moreover, I had previously given much thought concerning working in tech. This is what led me to make the leap into coding. Since then, I have built some fun projects. The project I am most proud of is Leap the Wall, a site that allows a user to search Baidu in English. The kind of company I am looking to work for is a company with a healthy culture and one which will allow me to showcase my creative skills.',
  ],
}

export const work = {
  title: "Skills",
  cards: [
    {
      title: " Javascript",
      description: " Full-stack Development. Creating novel applications with the latest technology.",
      icons: [
        {
          icon: faJs,
          link: [null]
        },
      ]
    },
    {
      title: " Python",
      description: "Data processing language of choice.",
      icons: [
        {
          icon: faPython,
          link: [null]
        },
      ]
    },
    {
      title: " Sales",
      description: "Sold mortgages. Worked at tech startup helping build their sales development infrustructure.",
      icons: [
        {
          icon: faSackDollar,
          link: [null]
        },
      ]
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: " Leap the Wall",
      description: "Web app workaround to use the Baidu search engine, in English.",
      icons: [
        {
          icon: faGithub,
          link: ["https://github.com/Bradley-Hower/leap-the-wall-frontend"],
        },
      ]
    },
    {
      title: " Rezzies",
      description: 'Rezzies is a collectible digital asset game targeted towards children. Composed of digital assets, they are limited to "go exploring" once per day to find fossils, or "Rezzies".',
      icons: [
        {
          icon: faGithub,
          link: ["https://github.com/Bradley-Hower/rezzies"],
        },
      ]
    },
    {
      title: " Prismatic Puzzle ",
      description: "Team project. Based on the game Chromacube, we developed a Python application using the Pygame library.",
      icons: [
        {
          icon: faGithub,
          link: ["https://github.com/Alpha-Code-Collective/prismatic-puzzle"],
        },
      ]
    },
  ],
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Bradley Hower",
  description: "Junior Software Developer — Creating novel applications with the latest technology. Technical background. Strong ability to take ownership while working within a team to solve technical problems via agile techniques.",
  image: profile.src,
}


