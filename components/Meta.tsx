import Head from "next/head";

interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta = ({ title, keywords, description }: MetaProps) => {
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
    "A web developer with good communication skills, and a strong work ethic. Like to solve problems in different ways, and challenge myself to do better.",
};

export default Meta;

