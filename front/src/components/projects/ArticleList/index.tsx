import { css } from '@emotion/react';
import { ArticleListItemType } from '@/@types/ArticleListItemType';
import ArticleListItem from '@/components/projects/ArticleList/ArticleListItem';

type Props = {
  articleList: Array<ArticleListItemType>;
};

const container = css({});

const ArticleList: React.FC<Props> = ({ articleList }) => {
  return (
    <ul css={container}>
      {articleList.map((article) => (
        <ArticleListItem article={article} key={article.code} />
      ))}
    </ul>
  );
};

export default ArticleList;
