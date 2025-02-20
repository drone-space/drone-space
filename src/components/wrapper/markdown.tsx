import { useAppSelector } from '@/hooks/redux';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

interface MarkdownComponentProps {
  markdown: string;
  animate: boolean;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  markdown,
  animate,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const conversation = useAppSelector((state) => state.claude.value);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(markdown);
      return;
    }

    setDisplayedText(''); // Reset before animating
    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (index <= markdown.length) {
        setDisplayedText(markdown.slice(0, index)); // Use `slice()` to avoid appending `undefined`
      } else {
        clearInterval(interval);
      }
    }, 5); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [markdown, conversation, animate]);

  return (
    <div className="markdown-wrapper">
      <Markdown className="markdown-content">{displayedText}</Markdown>
    </div>
  );
};
