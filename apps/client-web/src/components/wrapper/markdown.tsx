import { Typography } from '@mantine/core';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownComponentProps {
  markdown: string;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  markdown,
}) => {
  return (
    <Typography>
      <div className="markdown-wrapper">
        <Markdown className="markdown-content" remarkPlugins={[remarkGfm]}>
          {markdown}
        </Markdown>
      </div>
    </Typography>
  );
};
