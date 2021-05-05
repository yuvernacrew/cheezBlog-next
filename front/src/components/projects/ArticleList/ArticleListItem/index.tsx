import { ArticleListItemType } from '@/@types/ArticleListItemType';
import Link from 'next/link';

type Props = {
  article: ArticleListItemType;
};

const ArticleListItem: React.FC<Props> = ({ article }) => {
  return (
    <>
      <li>
        <Link
          href={{
            pathname: '/article/[slug]',
            query: { slug: article.code },
          }}
        >
          {article.title}
        </Link>
      </li>
    </>
  );
};

export default ArticleListItem;
