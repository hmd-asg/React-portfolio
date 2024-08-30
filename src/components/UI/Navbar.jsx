export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-5">
      <div className="d-flex justify-content-between">
        <a className="navbar-brand" href="#">Hamid Assaghli</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto justify-content-end">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
