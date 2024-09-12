
import profile from './profile.png';
import 'react-icons/si';

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
          icon: 'SiJavascript',
          link: [null]
        },
      ]
    },
    {
      title: " Python",
      description: "Data processing language of choice.",
      icons: [
        {
          icon: 'SiPython',
          link: [null]
        },
      ]
    },
    {
      title: " Git",
      description: "Distributed version control.",
      icons: [
        {
          icon: 'SiGit',
          link: [null]
        },
      ]
    },
    {
      title: " Bootstrap",
      description: "Front-end framework.",
      icons: [
        {
          icon: 'SiBootstrap',
          link: [null]
        },
      ]
    },
    {
      title: " React",
      description: "Front-end Javascript library.",
      icons: [
        {
          icon: 'SiReact',
          link: [null]
        },
      ]
    },
    {
      title: " Google Cloud Platform",
      description: "Worked with Google CLI and Google Translate API.",
      icons: [
        {
          icon: 'SiGoogle',
          link: [null]
        },
      ]
    },
    {
      title: " Docker",
      description: "Containerization for version specific dependecy issues or issue avoidance.",
      icons: [
        {
          icon: 'SiDocker',
          link: [null]
        },
      ]
    },
    {
      title: " ChatGPT",
      description: "Worked with ChatGPT API. Summary: caution needs to be applied when considering use case.",
      icons: [
        {
          link: [null]
        },
      ]
    },
    {
      title: " SQL & NoSQL",
      description: "Relational and non-relational databases. A couple of my projects use NoSQL.",
      icons: [
        {
          link: [null]
        },
      ]
    },
    {
      title: " Django",
      description: "Clever web framework for Python.",
      icons: [
        {
          icon: 'SiDjango',
          link: [null]
        },
      ]
    },
    {
      title: " Jupyter Notebook",
      description: "Present and run code in the same page. Useful tool for datascience.",
      icons: [
        {
          icon: 'SiJupyter',
          link: [null]
        },
      ]
    },
    {
      title: " NumPy & Seaborn",
      description: "Datascience library tools which offer a lot of flexibility to run analyses. Seaborn adds some additional features for data visualization",
      icons: [
        {
          icon: 'SiNumpy',
          link: [null]
        },
      ]
    },
    {
      title: " Pandas",
      description: "Python library which offers some tools for data analysis.",
      icons: [
        {
          icon: 'SiPandas',
          link: [null]
        },
      ]
    },
    {
      title: " Tailwind CSS",
      description: "CSS framework. Offers more flexability than predefined frameworks.",
      icons: [
        {
          icon: 'SiTailwindcss',
          link: [null]
        },
      ]
    },
    {
      title: " Sales",
      description: "Sold mortgages. Worked at tech startup helping build their sales development infrustructure.",
      icons: [
        {
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
      title: " Layout Evolution",
      description: "Keyboard layout generation via evolution selection algorithms.",
      icons: [
        {
          icon: 'SiGithub',
          link: ["https://github.com/Bradley-Hower/layout-evolution"],
        },
      ]
    },
    {
      title: " Leap the Wall",
      description: "Web app workaround to use the Baidu search engine, in English.",
      icons: [
        {
          icon: 'SiGithub',
          link: ["https://github.com/Bradley-Hower/leap-the-wall-frontend"],
        },
      ]
    },
    {
      title: " Rezzies",
      description: 'Rezzies is a collectible digital asset game targeted towards children. Composed of digital assets, they are limited to "go exploring" once per day to find fossils, or "Rezzies".',
      icons: [
        {
          icon: 'SiGithub',
          link: ["https://github.com/Bradley-Hower/rezzies"],
        },
      ]
    },
    {
      title: " Prismatic Puzzle",
      description: "Team project. Based on the game Chromacube, we developed a Python application using the Pygame library.",
      icons: [
        {
          icon: 'SiGithub',
          link: ["https://github.com/Alpha-Code-Collective/prismatic-puzzle"],
        },
      ]
    },
    {
      title: " Fragile Food",
      description: "A simply UX site demo I created in early coursework.",
      icons: [
        {
          icon: 'SiGithub',
          link: ["https://github.com/Bradley-Hower/fragile-food"],
        },
      ]
    },
    {
      title: " City Explorers",
      description: "An API web application which pulls location data for any input query. Includes location's weather, movies, and restuarants.",
      icons: [
        {
          icon: 'SiGithub',
          link: ["https://github.com/Bradley-Hower/city-explorer"],
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


