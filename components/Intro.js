import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ greeting, title, licensesNMLS, licensesDRE, endorsements, image, logo, companylink, reviews, companylicensesNMLS, companylicensesDRE, equalhousinglogo, nmlslink, WAlink, TXlink, buttons }) => {
	return (
		<div id="intro" className="bg-secondary py-2 px-5">
			<div className="container">
				<div className=" row align-items-center g-5">
					<div className="col-sm-6">
						<h1 className="name text-warning fw-bold display-3">{greeting}</h1>
						<h1 className="fw-bold display-4">{title}</h1>
						<div className="row align-items-center mt-3">
							<div className="col-auto">
								<h3 className="text-primary mt-1">{licensesNMLS}</h3>
							</div>
							<div className="col-auto">
								<h3 className="text-primary mt-1">{licensesDRE}</h3>
							</div>
						</div>
						<h3 className="text-primary mt-1">{endorsements}</h3>
						<div className="row align-items-center g-3 mt-5">
							<div className="col-auto">
								<img
									className="img-fluid" src={logo}
									alt="Company Logo"
								/>
							</div>
							<div className="col-auto text-wrap">
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
							<div className="row align-items-start mt-3">
								<img
									className="img-fluid" src={reviews}
									alt="Company Reviews"
								/>
							</div>
						</div>
						<div className="row align-items-center mt-3">
							<div className="col-auto">
								<h3 className="text-primary mt-1">{companylicensesNMLS}</h3>
							</div>
							<div className="col-auto">
								<h3 className="text-primary mt-1">{companylicensesDRE}</h3>
							</div>
						</div>

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
			<div className="container mt-4">
				<div className="row align-items-center g-3 justify-content-center">
					<div className="col-auto text-end">
						<img
							className="img-fluid" width="80"
							height="80" src={equalhousinglogo}
							alt="Equal Housing Logo"
						/>
					</div>
					<div className="col-auto text-wrap" >
						<h3 className="text-info fs-5">{nmlslink}</h3>
						<h3 className="text-info fs-5">{WAlink}</h3>
						<h3 className="text-info fs-5">{TXlink}</h3>
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

export const About = ({ title, slogan, slogan2, description, buttons }) => {
	return (
		<div id="about" className="bg-light py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<h3 className="text-warning mt-1 fw-bold display-6">{slogan}</h3>
				<h3 className="text-warning fst-italic mt-1">{slogan2}</h3>
				<h3 className="">{description}</h3>
			</div>
			<div className="text-center p-2">
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