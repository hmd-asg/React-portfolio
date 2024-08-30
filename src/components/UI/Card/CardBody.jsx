

export default function CardBody({ project }) {
  return (
    <div className="card" style="width: 18rem;">
      <img className="card-img-top" src={project.image} alt={project.title} />
      <div className="card-body">
        <div className='d-flex'>
          <h5 className="card-title">{project.title}</h5>
          <a href={project.github} target="_blank"><i className="fab fa-github"></i></a>
        </div>
        <p className="card-text">{project.description}</p>
      </div>
    </div>
  );
}
