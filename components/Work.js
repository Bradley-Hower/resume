import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";
import { GiDiamonds } from "react-icons/gi";
import { TbSquareLetterM } from "react-icons/tb";
import { SiDocusign } from "react-icons/si";
import { SlSpeedometer } from "react-icons/sl";
import { LuGraduationCap } from "react-icons/lu";


// Create a mapping object
const iconMapping = {
  FaHome, MdMilitaryTech, GiDiamonds,
  TbSquareLetterM, SiDocusign, SlSpeedometer, LuGraduationCap
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

export const Card = ({ title, description, icons }) => {
	return (
    <div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "22rem" }}>
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