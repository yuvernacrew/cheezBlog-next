import { css } from '@emotion/react';
import MarkdownToHtml from '@/components/Apps/MarkdownToHtml';

// type
import { ArticleType } from '@/@types/ArticleType';

import Container from '@/components/Apps/Container';
import Card from '@/components/Apps/Card';

import { MediaQuery } from '@/components/util/MediaQuery';

const container = css({
  [MediaQuery['pc']]: {
    display: 'flex',
    justifyContent: 'center',
  },
});

type PropsType = {
  article: ArticleType;
};

const IndexItem: React.FC<PropsType> = ({ article }) => {
  return (
    <Container>
      <div css={container}>
        <Container type="main">
          <Card type="main">
            <MarkdownToHtml markdown={article.content} />
          </Card>
        </Container>
        <Container type="aside">
          <Card>てすてすてす</Card>
        </Container>
      </div>
    </Container>
  );
};

export default IndexItem;
