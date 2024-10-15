
import profile from './profile.png';

export const navigation = {
  name: "BH",
  links: [
    {
      title: "Resume",
      link: "/resume",
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
  greeting: "Bradley Hower",
  title: "Mortgage Professional",
  description: "Exceptional results.",
  description2: "NMLS: 1810189",
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
    'Seven plus years of experience in the mortgage industry, three years as a licensed Loan Officer Assistant. Passionate about maximizing outcomes and prepared to accept new challenges. Motivated by the joy of helping others succeed and creating value.',
  ],
}

export const work = {
  title: "Skills & Education",
  cards: [
    {
      title: " FNMA",
      description: "Well versed in FNMA guidelines.",
      icons: [
        {
          icon: 'FaHome',
          link: [null]
        },
      ]
    },
    {
      title: " VA",
      description: "Familiar with VA guidelines.",
      icons: [
        {
          icon: 'MdMilitaryTech',
          link: [null]
        },
      ]
    },
    {
      title: " Encompass",
      description: "Experience working with while at Penrith.",
      icons: [
        {
          icon: 'GiDiamonds',
          link: [null]
        },
      ]
    },
    {
      title: " MortgageFlex",
      description: "Multiple years of experience.",
      icons: [
        {
          icon: 'TbSquareLetterM',
          link: [null]
        },
      ]
    },
    {
      title: " Docusign",
      description: "A fan-favorite.",
      icons: [
        {
          icon: 'SiDocusign',
          link: [null]
        },
      ]
    },
    {
      title: " Revvin",
      description: "Application platform that offers flexibility.",
      icons: [
        {
          icon: 'SlSpeedometer',
          link: [null]
        },
      ]
    },
    {
      title: " University of Washington",
      description: "Bachelor of Science, Class of 2015.",
      icons: [
        {
          icon: 'LuGraduationCap',
          link: [null]
        },
      ]
    },
  ],
}



// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Bradley Hower",
  description: "Loan Officer Assistant — Making the mortgage process easy. Strong ability to take ownership while working within a team to solve problems.",
  image: profile.src,
}


