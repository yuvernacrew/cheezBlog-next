import { css } from '@emotion/react';
import type { ArticleListItemType } from '@/@types/ArticleListItemType';
import ArticleList from '@/components/projects/ArticleList';
import Container from '@/components/Apps/Container';
import Card from '@/components/Apps/Card';

import { MediaQuery } from '@/components/util/MediaQuery';
const container = css({
  [MediaQuery['pc']]: {
    display: 'flex',
    justifyContent: 'center',
  },
});

type Props = {
  articleList: Array<ArticleListItemType>;
};

const IndexItem: React.FC<Props> = ({ articleList }) => {
  return (
    <Container>
      <div css={container}>
        <Container type="main">
          <Card>
            <ArticleList articleList={articleList} />
          </Card>
        </Container>
        <Container type="aside">
          <Card>
            <ArticleList articleList={articleList} />
          </Card>
        </Container>
      </div>
    </Container>
  );
};

export default IndexItem;
