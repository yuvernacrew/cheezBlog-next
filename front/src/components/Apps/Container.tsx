import { css } from '@emotion/react';

const container = css({
  maxWidth: 375,
  margin: '0 auto',
});

type Props = {
  addStyle?: React.CSSProperties;
};

const ContainerComponent: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div css={[container]}>{children}</div>
    </>
  );
};

export default ContainerComponent;
