import { useFetchQuoute } from './hook/useFetchQuote.';
import { getColor } from './style/getColor';
import { Author, Card, Quote, Button, Container, Icon, Wrapper } from './ui/';
import logo from './assets/icon.png';

export const App = () => {
  const { author, quote, getFetchQuote } = useFetchQuoute();
  const color = getColor();

  return (
      <Container bgcolor={color}>
        <Card id="quote-box">
          <Wrapper direction="column" content="center">
            <Quote id="text" color={color}>
              {quote}
            </Quote>
            <Author id="author" color={color}>
              - {author}
            </Author>
          </Wrapper>
          <Wrapper direction="row" content="space-between">
            <a
              id="tweet-quote"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${
                quote + '  Author: - ' + author
              }`}
            >
              <Icon src={logo} />
            </a>
            <Button
              id="new-quote"
              bgcolor={color}
              onClick={() => getFetchQuote()}
            >
              New quote
            </Button>
          </Wrapper>
        </Card>
      </Container>
  );
};
