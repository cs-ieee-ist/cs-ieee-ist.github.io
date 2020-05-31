import Layout from "../../../components/layout";
import { getAllContentIds, getContentData, getTopicPages } from "../../../lib/content";
import Head from "next/head";
import styles from "../content.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import ContentCard from "../../../components/cards/contentCard";
import ContentSidebar from "../../../components/contentSidebar";

export default function Content({
  contentData,
  topicPages
}: {
  contentData: {
    topic: string;
    id: string;
    contentHtml: string;
  },
  topicPages: {
    id: string,
    title: string
  }[]

}) {
  return (
    <Layout>
      <Head>
        <title>{createTitle(contentData.topic, contentData.id)}</title>
      </Head>
      <div className={styles.contentContainer}>
        <ContentSidebar topicPages={topicPages} activePage={contentData.id} />
        <ContentCard>
          <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
        </ContentCard>
        <div className={styles.dummySidebar}></div>
      </div>
    </Layout>
  );
}

const createTitle = (topic: string, id: string) => {
  const title = id.charAt(0).toUpperCase() + id.slice(1);

  return `${topic} - ${title}`;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const contentData = await getContentData(params.topic as string, params.id as string);
  const topicPages = await getTopicPages(params.topic as string);
  return {
    props: {
      contentData,
      topicPages
    },
  };
};
