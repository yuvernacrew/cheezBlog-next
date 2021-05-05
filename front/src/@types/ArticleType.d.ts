import { ArticleSysType } from '@/@types/ArticleSysType';
import { ArticleTagType } from '@/@types/ArticleTagType';
import { ArticleAssetType } from '@/@types/ArticleAssetType';

export interface ArticleType {
  sys: ArticleSysType;
  code: string;
  title: string;
  content: string;
  mainVisual?: ArticleAssetType;
  robots?: boolean;
  tagsCollection: {
    items: Array<ArticleTagType>;
  };
}
