import { css } from '@emotion/react';
import { MediaQuery } from '@/components/util/MediaQuery';

const baseStyle = css({
  margin: '0 auto',
  maxWidth: '94%',
  width: '94%',

  [MediaQuery['pc']]: {
    width: 960,
    maxWidth: 960,
  },
});

const container = {
  base: baseStyle,
  main: css(baseStyle, {
    [MediaQuery['pc']]: {
      maxWidth: 700,
    },
  }),
  aside: css(baseStyle, {
    [MediaQuery['pc']]: {
      maxWidth: 235,
    },
  }),
};

type Props = {
  type?: string;
  addStyle?: any;
};

const Container: React.FC<Props> = ({ children, type = 'base', addStyle }) => {
  return (
    <>
      <div css={(container[type], addStyle)}>{children}</div>
    </>
  );
};

export default Container;
