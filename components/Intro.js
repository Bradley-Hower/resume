import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ greeting, title, description, licenses, endorsements, image, logo, companylink, companylicenses, equalhousinglogo, nmlslink, WAlink, buttons }) => {
	return (
		<div id="intro" className="bg-secondary py-2 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{greeting}</h1>
						<h1 className="fw-bold display-4">{title}</h1>
						<h3 className="text-warning mt-4">{licenses}</h3>
						<div className="row align-items-center mt-5">
							<div className="col-sm-6">
								<img
									className="img-fluid my-3" width="400"
									height="400" src={logo}
									alt="Company Logo"
								/>
							</div>
							<div className="col-sm-6">
								{companylink.map((value, index) => (
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
						</div>
						<h3 className="text-warning mt-1">{companylicenses}</h3>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="400"
							height="400" src={image}
							alt="profile of Bradley Hower"
						/>
						{/* <h3 className="text-info display-5 py-3">{description}</h3> */}
					</div>
				</div>

			</div>
			<div className="container">
				<div className=" row justify-content-center align-items-center">
					<div className="col-sm-1">
						<img
							className="img-fluid my-3" width="80"
							height="80" src={equalhousinglogo}
							alt="Equal Housing Logo"
						/>
					</div>
					<div className="col-sm-4">
						<h3 className="text-info mt-2 fs-5">{nmlslink}</h3>
						<h3 className="text-info mt-2 fs-5">{WAlink}</h3>
					</div>
				</div>
			</div>

		</div>
	);
}

export const HireIntro = ({ greeting, title, description, description2, image, buttons }) => {
	return (
		<div className="bg-secondary py-2 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{greeting}</h1>
						<h1 className="fw-bold display-4">{title}</h1>
						<h3 className="text-warning mt-4">{description2}</h3>
						<h3 className="text-info display-5 py-3">{description}</h3>

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
										<a className="btn btn-default btn-lg fw-bold">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-primary btn-lg my-3 fw-bold">{value.title}</a>
									</Link>
							))}
						</div>
		</div>
	);
}

export const HireAbout = ({ title, description, buttons }) => {
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
										<a className="btn btn-default btn-lg fw-bold">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-primary btn-lg my-3 fw-bold">{value.title}</a>
									</Link>
							))}
						</div>
		</div>
	);
}