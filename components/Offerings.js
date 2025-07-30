import React from 'react';
import { FaGlobe, FaHome, FaMoneyCheckAlt, FaPiggyBank, FaBuilding } from "react-icons/fa";
import { MdDescription, MdPublic, MdShowChart, MdApartment, MdMilitaryTech } from "react-icons/md";
import { GiDiamonds, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { TbSquareLetterM } from "react-icons/tb";
import { SiDocusign } from "react-icons/si";
import { SlSpeedometer } from "react-icons/sl";
import { LuGraduationCap, LuBanknote } from "react-icons/lu";



// Create a mapping object
const iconMapping = {
   FaGlobe, FaHome, FaBuilding, FaMoneyCheckAlt, FaPiggyBank, MdDescription, MdPublic, MdShowChart, MdApartment, MdMilitaryTech, GiDiamonds, GiReceiveMoney, GiPayMoney,
  TbSquareLetterM, SiDocusign, SlSpeedometer, LuGraduationCap, LuBanknote
};

import Link from 'next/link'

export const Programs = ({ title, subtitle, notice, checkboxes, program_notes, buttons, cards }) => {
	return (
		<div id="programs" className="bg-secondary py-5 px-5">
			<div className="container align-items-center">
				<h1 className="text-primary fw-bold">{title}</h1>
        <h3 className="text-warning py-3">{subtitle}</h3>
        <p className="text-dark fs-5">{notice}</p>
        <div className="text-center p-1">
              {buttons.map((value, index) => (
                  (value.isPrimary) ?
                    <Link key={index} href={value.link}>
                      <a className="btn btn-default btn-lg fw-bold">{value.title}</a>
                    </Link>
                    :
                    <Link key={index} href={value.link}>
                      <a target="_blank" rel="noreferrer" className="btn btn-primary btn-lg my-3 fw-bold">{value.title}</a>
                    </Link>
                ))}
              </div>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}					
							icons={value.icons} />
					))}
				</div>
        <br></br>
				<div className="program-checkboxes text-dark fs-2 d-flex flex-row flex-wrap justify-content-center">
          <ul>
            {checkboxes.map((text, index) => (
              <li key={index} >
                  {text}
              </li>
            ))}
          </ul>
        </div>
        <br></br>
				<div className="program-notes text-dark fs-4 d-flex flex-row flex-wrap justify-content-center">
          <ul>
            {program_notes.map((text, index) => (
              <li key={index} >
                  {text}
              </li>
            ))}
          </ul>
        </div>
       </div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
    <div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "24rem" }}>
      <div className="text-start">
        {icons && icons.map((value, index) => {
          const IconComponent = iconMapping[value.icon];
          
          return (
            value.link && value.link[0] ? (
              <Link key={index} href={value.link[0]}>
                <a target="_blank" rel="noreferrer">
                  <h4 className="text-primary fw-bold">
                    {IconComponent && <IconComponent className="icon-style mx-1" size={35} />}
                    {title}
                  </h4>
                </a>
              </Link>
            ) : (
              <h4 className="text-primary fw-bold" key={index}>
                {IconComponent && <IconComponent className="icon-style mx-1" size={35} />}
                {title}
              </h4>
            )
          );
        })}
      </div>
      <p className="text-dark fs-5">{description}</p>
    </div>
  );
};