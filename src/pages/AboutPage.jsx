import profileImage from '../assets/hamid.png';
// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (

    <section className="about-section">
      <div className="container">
        <h2>Full stack web Developer</h2>
        <img src={profileImage} className="rounded-circle mb-4" alt="profile" />
        <p>
          Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages.<br />
          Knowledgeable of backend and frontend development requirements. Handles any part of process with ease.<br />
          Collaborative team player with excellent technical abilities offering 2 years of related experience.<br />
        </p>

      </div>
    </section>
  );
}
