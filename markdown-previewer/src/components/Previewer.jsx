import React from 'react';
import { View } from '../ui/';
import { marked } from 'marked';

export const Previewer = React.forwardRef(({ markdownContent }, ref) => {
  const renderMarkdown = () => {
    return { __html: marked(markdownContent) };
  };
  return (
    <View
      id="preview"
      className="markdown-preview"
      ref={ref}
      dangerouslySetInnerHTML={renderMarkdown()}
    ></View>
  );
});
