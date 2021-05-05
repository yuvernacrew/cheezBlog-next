import { ArticleSysType } from '@/@types/ArticleSysType';
import { ArticleTagType } from '@/@types/ArticleTagType';

export interface ArticleListItemType {
  sys: ArticleSysType;
  code: string;
  title: string;
  tagsCollection: {
    items: Array<ArticleTagType>;
  };
}
