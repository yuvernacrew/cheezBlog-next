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
    borderColor: Color.gray.dark,
    margin: '2.4em 0 1.4em',
    padding: '0.25em',
    fontSize: '1.3em',
  },

  h3: {
    borderBottom: `2px solid ${Color.primary.default}`,
    margin: '2em 0 1.2em',
    padding: '0.2em',
    fontSize: '1.25em',
  },

  h4: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1em',
    margin: '1.6em 0 0.8em',

    '&::before': {
      content: '""',
      width: '0.8em',
      height: '0.8em',
      marginRight: '0.4em',
      backgroundColor: Color.primary.default,
    },
  },

  p: {
    fontSize: '1em',
    lineHeight: 1.6,
  },
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
