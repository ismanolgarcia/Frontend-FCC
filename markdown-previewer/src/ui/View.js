import styled from 'styled-components';

export const View = styled.div`
  width: 50%;
  padding: 10px;
  background-color: #061826;
  color: white;
  border: 5px solid #0471a6;
  overflow: auto;

  @media (max-width: 900px) {
    width: 100%;
  }
  &.markdown-preview h1 {
    margin-bottom: 25px;
    border-bottom: 2px solid white;
  }

  &.markdown-preview h2 {
    margin-bottom: 25px;
    border-bottom: 1px solid white;
  }

  &.markdown-preview p {
    font-size: 16px;
  }
  &.markdown-preview a {
    color: #007bff;
    color: lightpink;
    text-decoration: none;
  }

  &.markdown-preview a:hover {
    text-decoration: underline;
  }

  &.markdown-preview ol li {
    margin-left: 20px;
    padding-left: 0;
    list-style-type: decimal;
  }

  &.markdown-preview ul li {
    padding-left: 0;
    margin-left: 20px;
    margin-bottom: 5px;
    list-style-type: disc;
  }
  &.markdown-preview img {
    width: 40%;
    margin: 15px 0;
  }

  &.markdown-preview pre {
    background-color: white;
    padding: 5px;
    margin: 15px 0;
  }
  &.markdown-preview code {
    color: black;
    font-family: monospace;
  }

  &.markdown-preview p code {
    background-color: white;
    color: black;
  }

  &.markdown-preview table {
    margin: 10px 0;
    border: 2px solid white;
  }

  &.markdown-preview table thead {
    background-color: white;
    color: black;
  }

  &.markdown-preview table,
  td {
    padding: 2px;
    border: 1px solid white;
  }

  .markdown-preview blockquote {
    padding: 10px 10px;
    margin: 10px 15px;
    border-left: 5px solid white;
  }

  @media print {
    width: 100%;
    height: 100vh;
    border: 5px solid #0471a6;
  }
`;
