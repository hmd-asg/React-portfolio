function Footer() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/hmd-asg"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/hamidassaghli/"
        }
    ]

    return (
        <footer className="d-flex justify-content-center">
            {icons.map(icon =>
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            )
            )}
        </footer>
    );
}

export default Footer;
