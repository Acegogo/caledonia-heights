import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, ogImage }) {
  const siteName = 'Caledonia Heights Limited';
  const siteUrl = 'https://caledoniaheights.co.ke';
  const defaultDesc = 'Caledonia Heights Limited — smart water metering systems for landlords, developers, institutions, and utilities. STS prepaid meters, NB-IoT smart metering, and MajiGrid irrigation. Est. 2018, Nairobi.';
  const defaultImg = `${siteUrl}/assets/images/og-image.jpg`;

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || siteUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={ogImage || defaultImg} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={ogImage || defaultImg} />
    </Helmet>
  );
}
