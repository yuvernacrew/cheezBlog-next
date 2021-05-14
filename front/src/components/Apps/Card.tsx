import { css } from '@emotion/react';
import { MediaQuery } from '@/components/util/MediaQuery';

const container = css({
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: '3%',
  [MediaQuery['pc']]: {
    padding: 20,
  },
});

const Card: React.FC = ({ children }) => {
  return <div css={container}>{children}</div>;
};

export default Card;
