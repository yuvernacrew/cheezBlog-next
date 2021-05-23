import { Color } from '@/components/util/Color';
import { Size } from '@/components/util/Size';

const Footer: React.FC = () => {
  return (
    <>
      <footer
        css={{
          backgroundColor: Color.gray.darker,
          marginTop: Size.xxxlarge,
          textAlign: 'center',
          padding: '12px 20px',
          fontsize: 12,
          color: '#fff',
        }}
      >
        © 2020 CHEEZ All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
