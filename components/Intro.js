import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ greeting, title, description, description2, image, buttons }) => {
	return (
		<div className="bg-secondary py-2 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{greeting}</h1>
						<h1 className="fw-bold display-4">{title}</h1>
						<h3 className="text-warning">{description2}</h3>
						<br></br>
						<h3 className="text-info display-5 py-5">{description}</h3>

					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="400"
							height="400" src={image}
							alt="profile of Bradley Hower"
						/>
					</div>
				</div>

			</div>
		</div>
	);
}

export const About = ({ title, description, buttons }) => {
	return (
		<div id="about" className="bg-light py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<h3 className="">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</h3>
			</div>
			<div className="text-center p-1">
						{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-default btn-lg">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-primary btn-lg my-3">{value.title}</a>
									</Link>
							))}
						</div>
		</div>
	);
}