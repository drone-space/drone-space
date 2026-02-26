import { Typography } from '@mantine/core';
import Markdown from 'react-markdown';

interface MarkdownComponentProps {
  markdown: string;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  markdown,
}) => {
  return (
    <Typography>
      <div className="markdown-wrapper">
        <Markdown className="markdown-content">{markdown}</Markdown>
      </div>
    </Typography>
  );
};
