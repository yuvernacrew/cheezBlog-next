import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { css } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { graqhqlCliant } from '@/plugins/graphqlCliant';

// queries
import articleByCode from '@/queries/articleByCode';
import articleCodes from '@/queries/articleCodes';

// Article
import { Article } from '@/@types/Article';

const style = css({
  backgroundColor: '#888',
});

const ArticlePage = ({ article }: { article: Article }) => {
  const articleData = () => {
    if (Object.keys(article).length) return article;

    const router = useRouter();
    const { code } = router.query;
    const { data } = useQuery(articleByCode, {
      variables: { code },
    });

    return data[process.env.contentfulCollectionName].items[0];
  };

  return <div css={style}>{JSON.stringify(articleData(), null, 2)}</div>;
};

export default ArticlePage;

/*
 * getStaticProps
 */

type StaticPropsType = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async (
  context: StaticPropsType
) => {
  const { data } = await graqhqlCliant.query({
    query: articleByCode,
    variables: { code: context.params.code },
  });

  const [article] = data[process.env.contentfulCollectionName].items;

  return {
    props: { article },
  };
};

/*
 * getStaticPaths
 */

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await graqhqlCliant.query({
    query: articleCodes,
  });

  return {
    paths: data[process.env.contentfulCollectionName].items.map(
      ({ code }: { code: string }) => ({
        params: {
          code: code,
        },
      })
    ),
    fallback: false,
  };
};
