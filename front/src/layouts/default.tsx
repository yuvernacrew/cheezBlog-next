import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  children: React.ReactElement;
};

export const Layout: React.FC<Props> = ({
  children,
  title = 'cheezBlog',
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </>
  );
};
