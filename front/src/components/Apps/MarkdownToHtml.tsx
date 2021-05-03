import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

const MarkdownToHtml: React.FC<Props> = ({ markdown }) => {
  return (
    <>
      <ReactMarkdown components={components} children={markdown} />
    </>
  );
};

export default MarkdownToHtml;
