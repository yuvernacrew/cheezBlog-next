import { NextPage } from 'next';
import { css } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const style = css({
  backgroundColor: '#888',
});

import articleByCode from '@/querys/articleByCode';

const Article: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const { data, loading, error } = useQuery(articleByCode, {
    variables: { code },
  });

  if (loading) return `loading`;
  if (error) return `Error! ${error.message}`;

  return <div css={style}>{JSON.stringify(data, null, 2)}</div>;
};

export default Article;
