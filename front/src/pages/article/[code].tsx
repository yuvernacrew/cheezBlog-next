import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { graqhqlCliant } from '@/plugins/graphqlCliant';
import { Layout } from '@/layouts/default';

// queries
import articleByCode from '@/queries/articleByCode';
import articleCodes from '@/queries/articleCodes';

// type
import { ArticleType } from '@/@types/ArticleType';

// component
import ArticlePageItem from '@/components/projects/ArticlePageItem';

type PropsType = {
  article: ArticleType;
};

const ArticlePage: NextPage<PropsType> = ({ article }) => {
  const articleData: ArticleType = (() => {
    if (Object.keys(article).length) return article;

    const router = useRouter();
    const { code } = router.query;
    const { data } = useQuery(articleByCode, {
      variables: { code },
    });

    return data[process.env.contentfulCollectionName].items[0];
  })();

  return (
    <Layout title={`${articleData.title} | cheezBlog`}>
      <>
        <div>
          <ArticlePageItem article={articleData} />
        </div>
      </>
    </Layout>
  );
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
          code,
        },
      })
    ),
    fallback: false,
  };
};
