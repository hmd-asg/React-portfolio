export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom ">
      <a className="navbar-brand" href="#">Hamid Assaghli</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {links.map((link) => link)}
        </ul>
      </div>
    </nav>
  );
}
