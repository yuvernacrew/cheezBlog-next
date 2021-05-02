import ArticleSys from '@/@types/ArticleSys';
import ArticleTag from '@/@types/ArticleTag';
import ArticleAsset from '@/@types/ArticleAsset';

export interface Article {
  sys: ArticleSys;
  code: string;
  title: string;
  content: string;
  mainVisual?: ArticleAsset;
  robots?: boolean;
  tagsCollection: {
    items: Array<ArticleTag>;
  };
}
