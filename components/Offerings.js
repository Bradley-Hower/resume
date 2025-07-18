import React from 'react';
import { FaGlobe, FaHome, FaMoneyCheckAlt, FaPiggyBank, FaBuilding } from "react-icons/fa";
import { MdPublic, MdShowChart, MdApartment, MdMilitaryTech } from "react-icons/md";
import { GiDiamonds, GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { TbSquareLetterM } from "react-icons/tb";
import { SiDocusign } from "react-icons/si";
import { SlSpeedometer, SlChartLine } from "react-icons/sl";
import { LuGraduationCap, LuBanknote } from "react-icons/lu";



// Create a mapping object
const iconMapping = {
  FaGlobe, FaHome, FaBuilding, FaMoneyCheckAlt, FaPiggyBank, MdPublic, MdShowChart, MdApartment, MdMilitaryTech, GiDiamonds, GiReceiveMoney, GiPayMoney,
  TbSquareLetterM, SiDocusign, SlChartLine, SlSpeedometer, LuGraduationCap, LuBanknote
};

import Link from 'next/link'

export const Programs = ({ title, subtitle, buttons, cards }) => {
	return (
		<div id="programs" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
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
							link={value.link} 							
							icons={value.icons} />
					))}
				</div>
        <h4 className="program-subtitle">{subtitle}</h4>
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