import profileImage from '../assets/hamid.png';
// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (

    <section className="about-section">
      <div className="container">
        <h2>Full stack web Developer</h2>
        <img src={profileImage} className="rounded-circle mb-4" alt="profile" />
        <p>
          I am a proficient Full Stack Developer with expertise in both frontend and backend technologies. Skilled in a variety of programming languages and tools, I excel at managing the entire development process, from creating responsive user interfaces to building robust backend systems. I prioritize writing clean, maintainable code and following best practices to ensure application performance and scalability. A collaborative team player, I thrive in diverse environments and approach problem-solving with creativity. I am committed to delivering high-quality, innovative solutions that meet both client and business needs, continuously seeking to enhance my skills and stay updated with industry trends.<br />

        </p>
      </div>
    </section>
  );
}
