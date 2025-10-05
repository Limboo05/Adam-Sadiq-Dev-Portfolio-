import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Adam Sadiq Ismail is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Adam Sadiq , Sadiq, Adam, web developer portfolio, Sadiq web developer, adam developer, mern stack, adam sadiq portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Adam Sadiq's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/a/l9aetjU" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Adam Sadiq Ismail',
};
