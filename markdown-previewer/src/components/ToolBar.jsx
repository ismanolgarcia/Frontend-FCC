import ReactToPrint from 'react-to-print';
import { Button, Container, Title } from '../ui';
import disk from '../assets/floppy-disk-solid.svg';
import print from '../assets/print-solid.svg';

export const ToolBar = ({ saveData, componentRef }) => {
  return (
    <Container className="ToolBar">
      <Title>Markdown Previewer</Title>
      <div>
        <Button onClick={saveData}>
          <img src={disk} />
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button>
              <img src={print} />
            </Button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </Container>
  );
};
