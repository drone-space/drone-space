import { useAppSelector } from '@/hooks/redux';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Markdown from 'react-markdown';

interface MarkdownComponentProps {
  markdown: string;
  animate: boolean;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  markdown,
  animate,
}) => {
  const markdownRef = useRef<HTMLDivElement | null>(null);
  const hiddenMarkdownRef = useRef<HTMLDivElement | null>(null);
  const typedRef = useRef<Typed | null>(null);
  const conversation = useAppSelector((state) => state.claude.value);

  useEffect(() => {
    if (hiddenMarkdownRef.current && markdownRef.current) {
      const renderedHTML = hiddenMarkdownRef.current.innerHTML;

      // Ensure the target element is cleared before initializing Typed.js
      markdownRef.current.innerHTML = '';

      typedRef.current = new Typed(markdownRef.current, {
        strings: [renderedHTML],
        typeSpeed: 0,
        showCursor: false,
        contentType: 'html', // Keeps HTML formatting intact
      });

      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, [markdown, conversation]);

  return (
    <div className="markdown-wrapper">
      {animate ? (
        <div ref={markdownRef} className="markdown-content" />
      ) : (
        <Markdown className="markdown-content">{markdown}</Markdown>
      )}

      {/* Hidden pre-rendered markdown */}
      <div ref={hiddenMarkdownRef} style={{ display: 'none' }}>
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
};
