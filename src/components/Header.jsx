import coverImage from '../assets/cover-image.jpg';

function Header(props) {

  return (
    <header className="d-flex flex-wrap justify-content-between px-5">
      <h1>Hamid Assaghli</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;