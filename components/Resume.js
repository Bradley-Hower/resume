import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const Resume = ({ link }) => {
	return (
    <iframe className="pdfcontainer" src={link} width="100%" ></iframe>
	);
}

