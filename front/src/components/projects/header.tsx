import { css } from '@emotion/react';
import Container from '@/components/Apps/Container';
import Image from 'next/image';
import { MediaQuery } from '@/components/util/MediaQuery';
import { Size } from '@/components/util/Size';

const container = css({
  backgroundColor: '#fff',
  padding: '10px',
  marginBottom: Size.xxxlarge,
});

const inner = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [MediaQuery['pc']]: {
    justifyContent: 'space-between',
  },
});

const logo = css({
  width: '60%',
  [MediaQuery['pc']]: {
    width: 232,
  },
});

const Header: React.FC = () => {
  return (
    <header css={container}>
      <Container>
        <div css={inner}>
          <div css={logo}>
            <Image src="/images/logo.svg" width={232} height={40} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
