import { css } from '@emotion/react';
import { Color } from '@/components/util/Color';
import { Size } from '@/components/util/Size';

const container = css`
  background-color: ${Color.gray.darker};
  margin-top: ${Size.xxxlarge};
  text-align: center;
  padding: 12px 20px;
  font-size: 12px;
  color: #fff;
`;

const Footer: React.FC = () => {
  return (
    <>
      <footer css={container}>© 2020 CHEEZ All Rights Reserved.</footer>
    </>
  );
};

export default Footer;
