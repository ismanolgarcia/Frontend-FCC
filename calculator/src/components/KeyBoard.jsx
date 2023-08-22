import { calcData } from '../data/calcdata';
import { Button, Wrapper } from '../ui';

export const KeyBoard = ({ getValue, showResult, cleanDisplay }) => {
  return (
    <Wrapper>
      {calcData.map(({ id, content }) => (
        <Button
          key={id}
          id={id}
          onClick={() => {
            if (content === '=') {
              showResult();
            } else if (content === 'AC') {
              cleanDisplay();
            } else {
              getValue(content);
            }
          }}
        >
          {content === '/' ? '÷' : content && content === '*' ? 'x' : content}
        </Button>
      ))}
    </Wrapper>
  );
};
