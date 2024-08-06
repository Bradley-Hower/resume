import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const Resume = ({ link, title }) => {
	return (
    <iframe className="pdfcontainer" src={link} width="100%" ></iframe>
	);
}

