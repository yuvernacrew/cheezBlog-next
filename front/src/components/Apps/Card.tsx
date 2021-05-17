import { css } from '@emotion/react';
import { MediaQuery } from '@/components/util/MediaQuery';

const baseStyle = css({
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: '3%',
  [MediaQuery['pc']]: {
    padding: 20,
  },
});

const container = {
  base: baseStyle,
  main: css(baseStyle, {
    padding: '3%',
    [MediaQuery['pc']]: {
      padding: 40,
    },
  }),
};

type Props = {
  type?: string;
};

const Card: React.FC<Props> = ({ children, type = 'base' }) => {
  return <div css={container[type]}>{children}</div>;
};

export default Card;
