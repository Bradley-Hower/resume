import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const AdHook = ({ image, title, description, description2 }) => {
	return (
		<div className="bg-secondary py-2 px-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-sm-12 text-center">
						<img
							className="img-fluid mb-5 card-image" src={image}
							alt="Landing page ad graphic"
						/>
					</div>
				</div>
				<div className="row bg-light text-center">
						<h1 className="fw-bold display-2">{title}</h1>
						<h3 className="text-info display-5">{description}</h3>
						<h3 className="text-primary mt-2 mb-5">{description2}</h3>
				</div>
        
			</div>
		</div>
	);
}
