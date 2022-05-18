import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Jennie Huang",
  keywords: "web development, programming",
  description:
    " Web developer with good communication skills, and a strong work ethic. I like to solve problems in different ways, and challenge myself to do better.",
};

export default Meta;
