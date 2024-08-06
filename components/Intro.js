import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ greeting, title, description, description2, description3, image, buttons }) => {
	return (
		<div className="bg-secondary py-2 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<div className="py-3">
							<h1 className="text-primary fw-bold display-3">{greeting}</h1>
							<h1 className="text-primary fw-bold display-3">{title}</h1>
						</div>
						<h3>{description}</h3>
						<h3>{description2}</h3>
						<h3>{description3}</h3>

					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="258"
							height="258" src={image}
							alt="profile of Bradley Hower"
						/>
					</div>
				</div>
				<div className="text-center py-3">
					{buttons.map((value, index) => (
						(value.isPrimary) ?
							<Link key={index} href={value.link}>
								<a className="btn btn-default my-3">{value.title}</a>
							</Link>
							:
							<Link key={index} href={value.link}>
								<a target="_blank" rel="noreferrer" className="btn btn-primary my-3">{value.title}</a>
							</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}