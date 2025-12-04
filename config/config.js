
import profile from './profile.png';
import WCLlogo from './WCLlogo.png';
import EqualHousingLogo from './EqualHousingLogo.png';

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
      link: "/Bradley_Hower_Mortgage_Broker.png",
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
  title: "Mortgage Broker",
  description: "Exceptional results.",
  licenses: "NMLS: 1810189",
  endorsements: "Licensed in WA",
  image: profile.src,
  buttons: [
    {
      title: "Business Card ↗",
      link: "/Bradley_Hower_Mortgage_Broker.png",
      isPrimary: false,
    },
  ],
  logo: WCLlogo.src,
  companylicensesNMLS: "NMLS 1566096",
  companylicensesDRE: "DRE 02022356",
  companylink: [
    {
      title: "Company Site ↗",
      link: "https://westcapitallending.com/",
      isPrimary: false,
    },
  ],
  equalhousinglogo: EqualHousingLogo.src,
  nmlslink: "https://nmlsconsumeraccess.org/",
  WAlink: "https://westcapitallending.com/licensing/",
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
    'Located on the Eastside, specializing in serving clients living in the Seattle and Bellevue areas seeking to invest in residential real estate.',
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
  subtitle: "Over 150 lender partners. Giving buyers options that other originators can’t offer.",
  notice: "Programs and program details are subject to change. Sometimes for the better! Contact me to discuss the latest and best terms for you.",
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
      description: "Less hassle; ideal for self-employed individuals or those with non-traditional income sources. Higher reserves requirement to be met.",
      icons: [
        { icon: 'FaMoneyCheckAlt', link: [null] }
      ]
    },
    {
      title: "Alternative Documentation",
      description: "Eliminates the need for tax returns. Less restrictive and problematic. Best suited for self-employed borrowers with varrying income history.",
      icons: [
        { icon: 'MdDescription', link: [null] }
      ]
    },
    {
      title: "Low Credit Score",
      description: "A loan designed for buyers with lower credit scores — options available for FICOs as low as 500.",
      icons: [
        { icon: 'FaPiggyBank', link: [null] }
      ]
    },
    {
      title: "HELOC",
      description: "Tap into home equity and get funds in 5 to 10 days. Enjoy the added flexibility that comes with a line of credit.",
      icons: [
        { icon: 'GiReceiveMoney', link: [null] }
      ]
    },
    {
      title: "DSCR",
      description: "Investor-friendly loan — qualify based on rental property Cash Flow-to-Debt ratio. Interest-only option available.",
      icons: [
        { icon: 'MdShowChart', link: [null] }
      ]
    },
    {
      title: "Foreign National Investor",
      description: "Specialized loan program for non-U.S. citizens who are non-residents. Interest-only option available. Credit score or proof of banking relationship required.",
      icons: [
        { icon: 'MdPublic', link: [null] }
      ]
    },
  ],
  checkboxes: [
    "Non-Warrantable Condominiums",
    "Air BNBs",
    "Non-permanent Resident Aliens and Foreign Nationals",
  ],
  program_notes: [
    "Most programs have a maximum Debt-To-Income limit of 45% — 50%.", 
    "For the best terms, middle to upper—700 FICO scores are recommended. Dependent on program.",
    "Interest-only options are speculative in nature with potential for payment shock when interest-only period ends.",
    "Residency and nationality is not a limiter, with some exceptions.",
  ],
  };




// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Bradley Hower | Mortgage Broker",
  description: "Keen home loan financing. Located on the Eastside. Specializing in serving clients living in the Seattle and Bellevue areas seeking to invest in residential real estate.",
  image: profile.src,
}


// Hire Header
export const HireTitle = {
  // 50 - 60 char  
  title: "Bradley Hower",
  description: "Mortgage Professional  — Keen home loan financing. Strong ability to take ownership while working within a team to solve problems.",
  image: profile.src,
}