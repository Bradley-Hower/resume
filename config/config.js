
import profile from './profile.png';

export const hirenavigation = {
  name: "Hire BH",
  links: [
    {
      title: "Resume",
      link: "/resume",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/bradley-m-hower/",
    },
  ],
}

export const navigation = {
  name: "BH",
  links: [
    {
      title: "Business Card",
      link: "https://bhower.my.canva.site/",
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

export const hireintro = {
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

export const intro = {
  greeting: "Bradley Hower",
  title: "Mortgage Professional",
  description: "Exceptional results.",
  description2: "NMLS: 1810189",
  image: profile.src,
  buttons: [
    {
      title: "Business Card ↗",
      link: "https://bhower.my.canva.site/",
      isPrimary: false,
    },
  ],
}

export const hireabout = {
  title: "About",
  description: [
    'Seven plus years of experience in the mortgage industry, three years as a licensed Loan Officer Assistant. Passionate about maximizing outcomes and prepared to accept new challenges. Motivated by the joy of helping others succeed and creating value.',
  ],
}


export const about = {
  title: "About",
  description: [
    'Seven plus years of experience in the mortgage industry. Passionate about maximizing outcomes and prepared to accept new challenges. Motivated by the joy of helping others succeed and creating value.',
  ],
}



export const hirework = {
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



export const offerings = {
  title: "Highlighted Programs",
  buttons: [
    {
      title: "Apply ↗",
      link: "https://westcaplending.loanzify.io/register/bradley-hower",
      isPrimary: false,
    },
  ],
  cards: [
    {
      title: "FNMA",
      description: "Conventional loan with great terms. Down payment as low as 3%. Adjustable-Rate options available with down payment as low as 5%. Mortgage Insurance required for down payments less than 20%.",
      icons: [
        { icon: 'FaHome', link: [null] }
      ]
    },
    {
      title: "VA",
      description: "Veteran-focused loan with strong foreclosure protection and a 0% down payment option. VA funding fee rather than Mortgage Insurance. Utilize VA entitlements to significantly reduce closing costs.",
      icons: [
        { icon: 'MdMilitaryTech', link: [null] }
      ]
    },
    {
      title: "FHA",
      description: "Ideal for those targeting multi-unit properties (2-4 units) — a 3.5% down payment minimum. Requires refinancing to remove Mortgage Insurance.",
      icons: [
        { icon: 'FaBuilding', link: [null] }
      ]
    },
    {
      title: "No Income Verification",
      description: "Less hassle; ideal for self-employed individuals or those with non-traditional income sources. Maximum 80% Loan-To-Value; 75% for investment properteies. Reserves requirements to be met.",
      icons: [
        { icon: 'FaMoneyCheckAlt', link: [null] }
      ]
    },
    {
      title: "Low Credit Score",
      description: "Designed for buyers with lower credit scores — options available for FICOs as low as 550.",
      icons: [
        { icon: 'FaPiggyBank', link: [null] }
      ]
    },
    {
      title: "Expanded",
      description: 'Turn "Just Denied" to "Approved" with limits beyond typical mortgage guidelines.',
      icons: [
        { icon: 'MdLandscape', link: [null] }
      ]
    },
    {
      title: "HELOC",
      description: "Tap into home equity and get funds in as little as 10 days. Enjoy the added flexibility that comes with a line of credit. Typically requires 20% to 30% in equity.",
      icons: [
        { icon: 'GiReceiveMoney', link: [null] }
      ]
    },
    {
      title: "DSCR",
      description: "Investor-friendly loan — qualify based on rental property Cash Flow-to-Debt ratio. Maximum 85% Loan-To-Value ratio. Interest-only option available at 75% Loan-To-Value ratio.",
      icons: [
        { icon: 'MdShowChart', link: [null] }
      ]
    },
    {
      title: "Foreign National Investor",
      description: "Specialized loan program for non-U.S. citizens who are non-residents. Interest-only option available. Maximum 70% Loan-To-Value ratio. Requires 12 months in reserves and banking relationship documentation if no credit score.",
      icons: [
        { icon: 'MdPublic', link: [null] }
      ]
    },
  ],
  checkboxes: [
    "Non-Warrantable Condominiums",
    "Air BNBs",
    "Non-permanent Resident Aliens, Foreign Nationals, & EAD holders",
  ],
  program_notes: [
    "Most programs have a maximum Debt-To-Income limit of 45% — 50%.", 
    "For the best terms, middle to upper—700 FICO scores are recommended. Dependent on program.",
    "Interest-Only options are speculative in nature with potential for payment shock when interest-only period ends.",
    "Residency and nationality is not a limiter, with some exceptions.",
  ],
  };




// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Bradley Hower",
  description: "Mortgage Professional — Keen home financing.",
  image: profile.src,
}


// Hire Header
export const HireTitle = {
  // 50 - 60 char  
  title: "Bradley Hower",
  description: "Mortgage Professional  — Keen home financing.Strong ability to take ownership while working within a team to solve problems.",
  image: profile.src,
}