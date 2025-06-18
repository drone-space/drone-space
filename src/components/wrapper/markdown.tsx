import Markdown from 'react-markdown';

interface MarkdownComponentProps {
  markdown: string;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  markdown,
}) => {
  return (
    <div className="markdown-wrapper">
      <Markdown className="markdown-content">{markdown}</Markdown>
    </div>
  );
};
