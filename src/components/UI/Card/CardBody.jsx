

export default function CardBody({ project }) {
  return (
    <div className="col-md-6 my-4" Key={project.id}>
      <div className="card">
        <img className="card-img-top" src={project.image} alt={project.title} />
        <div className="card-body">
          <div className='d-flex mx-auto'>
            <h5 className="card-title me-2">{project.title}</h5>
            <a href={project.github} target="_blank"><i className="fab fa-github"></i></a>
          </div>
          <p className="card-text">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
