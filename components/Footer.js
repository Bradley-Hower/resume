import React from 'react';
import Link from 'next/link'



export const Footer = ({ title, links }) => {
	return (
		<footer className="bg-secondary py-2">
				<nav className="navbar navbar-expand navbar-light bg-gray-200">
					<div className="container">

							<div className="navbar-nav fs-3">
								{links.map((value, index) => (
									<Link key={index} href={value.link} >
										<a className="nav-link">{value.title}</a>
									</Link>
								))}
							</div>

					</div>
				</nav>
				<div className="container text-muted">
					<div className="container text-center">
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
				</div>
		</footer>
	);
}


