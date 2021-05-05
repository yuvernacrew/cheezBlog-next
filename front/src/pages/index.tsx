import { GetStaticProps, NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { graqhqlCliant } from '@/plugins/graphqlCliant';
import articles from '@/queries/articles';
import type { ArticleListItemType } from '@/@types/ArticleListItemType';
import { Layout } from '@/layouts/default';
import ArticleList from '@/components/projects/ArticleList';

type PropsType = {
  articleList: Array<ArticleListItemType>;
};

const Index: NextPage<PropsType> = (props) => {
  const articleList = (() => {
    if (Object.keys(props.articleList).length) return props.articleList;

    const { data } = useQuery(articles);
    return data[process.env.contentfulCollectionName].items;
  })();

  return (
    <>
      <Layout>
        <>
          <ArticleList articleList={articleList} />
        </>
      </Layout>
    </>
  );
};

export default Index;

/*
 * getStaticProps
 */

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await graqhqlCliant.query({
    query: articles,
  });

  const articleList = data[process.env.contentfulCollectionName].items;

  return {
    props: { articleList },
  };
};
