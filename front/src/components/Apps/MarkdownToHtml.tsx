import ReactMarkdown from 'react-markdown';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { css } from '@emotion/react';
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight';
import { Color } from '@/components/util/Color';

// TODO propsの型を分からずに使っているため、コードをしっかり見る
const components = {
  code(props) {
    const match = /language-(\w+)/.exec(props.className || '');
    return !props.inline && match ? (
      <SyntaxHighlighter
        style={solarizedlight}
        language={match[1]}
        PreTag="div"
        children={String(props.children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={props.className} {...props} />
    );
  },
};

type Props = {
  markdown: string;
};

const markdownHtmlStyle = css({
  h2: {
    borderWidth: '4px 0',
    borderStyle: 'double',
    borderColor: Color.black,
  },
  h3: { backgroundColor: Color.gray.lighter },
  '.panel-primay': {},
});

const MarkdownToHtml: React.FC<Props> = ({ markdown }) => {
  return (
    <>
      <ReactMarkdown
        components={components}
        children={markdown}
        css={markdownHtmlStyle}
      />
    </>
  );
};

export default MarkdownToHtml;
