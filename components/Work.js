import React from 'react';
import {
  SiGithub, SiPython, SiJavascript, SiBootstrap, SiGit, SiReact, SiGoogle, SiDjango,SiJupyter, SiNumpy, SiPandas, SiTailwindcss, SiDocker
} from 'react-icons/si';

// Create a mapping object
const iconMapping = {
  SiGithub, SiPython, SiJavascript,
  SiBootstrap, SiGit, SiReact, SiGoogle, SiDjango, SiJupyter, SiNumpy, SiPandas, SiTailwindcss, SiDocker
};

import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} 							
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
    <div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
      <div className="text-start">
        {icons && icons.map((value, index) => {
          const IconComponent = iconMapping[value.icon];
          
          return (
            value.link && value.link[0] ? (
              <Link key={index} href={value.link[0]}>
                <a target="_blank" rel="noreferrer">
                  <h4 className="text-primary">
                    {IconComponent && <IconComponent className="icon-style mx-1" size={35} />}
                    {title}
                  </h4>
                </a>
              </Link>
            ) : (
              <h4 className="text-primary" key={index}>
                {IconComponent && <IconComponent className="icon-style mx-1" size={35} />}
                {title}
              </h4>
            )
          );
        })}
      </div>
      <p className="text-dark">{description}</p>
    </div>
  );
};