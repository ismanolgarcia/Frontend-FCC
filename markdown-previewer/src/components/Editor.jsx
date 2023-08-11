import { TextTarea } from '../ui';

export const Editor = ({ markdownContent, handleMarkdown }) => {
  return (
    <>
      <TextTarea
        id="editor"
        onChange={handleMarkdown}
        value={markdownContent}
      />
    </>
  );
};
