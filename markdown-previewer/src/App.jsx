import { Editor, Previewer, ToolBar } from './components';
import { useMarkdown } from './hook/useMarkdown';
import { Container } from './ui';

export const App = () => {
  const { handleMarkdown, markdownContent, componentRef, saveData } =
    useMarkdown();

  return (
    <Container bgcolor="#0471A6" direction="column">
      <ToolBar saveData={saveData} componentRef={componentRef} />
      <Container bgcolor="blue" className="column">
        <Editor
          markdownContent={markdownContent}
          handleMarkdown={handleMarkdown}
        />
        <Previewer markdownContent={markdownContent} ref={componentRef} />
      </Container>
    </Container>
  );
};
