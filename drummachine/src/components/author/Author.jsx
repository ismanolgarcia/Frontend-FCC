import github from '../../assets/GitHub_Logo_White.png';
import './author.css'
export const Author = () => {
  return (
    <a
      href="https://github.com/ismanolgarcia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={github} alt="" />
    </a>
  );
};
