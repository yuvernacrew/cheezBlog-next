import { NextPage } from 'next';
import { css } from '@emotion/react';

const style = css({
  backgroundColor: '#888',
});

const Home: NextPage = () => {
  return <div css={style}>test</div>;
};

export default Home;
