import { NextPage } from 'next';
import { css } from '@emotion/react';
import { useQuery } from '@apollo/client';

const style = css({
  backgroundColor: '#888',
});

import articles from '@/querys/articles';

const Index: NextPage = () => {
  const { data, loading, error } = useQuery(articles);

  if (loading) return `loading`;
  if (error) return `Error! ${error.message}`;

  return <div css={style}>{JSON.stringify(data, null, 2)}</div>;
};

export default Index;
