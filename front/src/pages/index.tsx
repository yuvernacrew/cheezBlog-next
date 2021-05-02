import { GetStaticProps } from 'next';
import { css } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { graqhqlCliant } from '@/plugins/graphqlCliant';
import articles from '@/queries/articles';
import { ArticleList } from '@/@types/ArticleList';

const style = css({
  backgroundColor: '#888',
});

const Index = ({ articleList }: { articleList: ArticleList }) => {
  const articleData = () => {
    if (Object.keys(articleList).length) return articleList;

    const { data } = useQuery(articles);
    return data[process.env.contentfulCollectionName].items;
  };

  return <div css={style}>{JSON.stringify(articleData(), null, 2)}</div>;
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
