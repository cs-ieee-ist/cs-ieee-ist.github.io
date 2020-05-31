import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getAboutContent } from "../lib/content";
import ContentCard from "../components/cards/contentCard";
import { GetStaticProps } from "next";

export default function About({ aboutContent }: { aboutContent: string }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <ContentCard><div dangerouslySetInnerHTML={{ __html: aboutContent }} /></ContentCard>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutContent = await getAboutContent();
  return {
    props: {
      aboutContent,
    },
  };
};
