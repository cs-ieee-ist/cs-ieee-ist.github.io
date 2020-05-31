import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getPages } from "../lib/content";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { search } from "../lib/stringSearch";
import SearchCard from "../components/cards/searchCard";

export default function Search({ pages }: { pages: string[] }) {
  const router = useRouter();
  let nColor = 0;
  const MAX_COLOR = 7;
  let resultPages: string[] = [];
  if (router.query.query !== undefined)
    resultPages = search(router.query.query as string, pages);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {resultPages.map((value) => {
        return (<SearchCard name={value} color={`backColor${(nColor = (nColor % MAX_COLOR) + 1)}`}/>);
      })}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getPages();
  return {
    props: {
      pages,
    },
  };
};
