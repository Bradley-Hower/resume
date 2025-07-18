import Head from 'next/head'

export const Header = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
    </Head>
  )
}

export const HireHeader = ({ hireheader }) => {
  return (
    <Head>
      <title>{hireheader.title}</title>
      <meta name="description" content={hireheader.description} />
      <meta property="og:title" content={hireheader.title} />
      <meta property="og:description" content={hireheader.description} />
      <meta property="og:image" content={hireheader.image} />
      <meta property="og:type" content="website" />
    </Head>
  )
}