import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary py-2">
				<div className="container text-muted">
					<small>{" "}
						Forked from
						<Link href="https://github.com/hashirshoaeb">
							<a> hashirshoaeb</a>
						</Link>
						. Open sourced under {" "}
						<Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
							<a>MIT</a>
						</Link>
						{" "} License
					</small>
				</div>
		</footer>
	);
}

export const HireContact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const HireFooter = () => {
	return (
		<footer className="bg-secondary py-2">
				<div className="container text-muted">
					<small>{" "}
						Forked from
						<Link href="https://github.com/hashirshoaeb">
							<a> hashirshoaeb</a>
						</Link>
						. Open sourced under {" "}
						<Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
							<a>MIT</a>
						</Link>
						{" "} License
					</small>
				</div>
		</footer>
	);
}