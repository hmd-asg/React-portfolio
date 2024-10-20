
export default function ResumePage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <h3>Skills</h3></div>
                <div className="col-lg-9">
                    <h5>Front-end Proficiencies</h5 >
                    <ul className="skills">
                        <li>HTML  </li>
                        <li>CSS </li>
                        <li>JavaScript  </li>
                        <li>jquery  </li>
                        <li>React   </li>
                        <li>Bootstrap   </li>
                    </ul>
                    <h5>Back-end Proficiencies</h5>
                    <ul className="skills">
                        <li>APIs    </li>
                        <li>Java    </li>
                        <li>Node    </li>
                        <li>Express </li>
                        <li>postgreSql,Sequelize    </li>
                        <li>MongoDB,Mongoose    </li>
                        <li>REST    </li>
                        <li>GraphQL </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <h3>Experience</h3>
                </div>
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between">
                        <h5>Signia By Hilton </h5>
                        <small className="text-muted ms-auto">04-2017 - Present</small>
                    </div>
                    <h6>Banquet Server</h6>
                    <ul className="bullet-point">
                        Served events to the highest degree: setting up tables, serving
                        food and drink, and satisfying guests. Assisted staff in event
                        operations for the smooth execution of events in a very fast-
                        moving environment.
                        <li>    • Communicated effectively with guests while also liaising
                            with kitchen personnel for timely service.</li>
                        <li>    • Utilized critical thinking to anticipate guest needs and
                            resolve issues in a timely manner.</li>

                        <li>• Applied professionalism in a multi-tasking dynamic
                            environment.</li>
                        <li>• Contributed to team cohesiveness in order to provide
                            quality dining service.</li>
                        <li>• They also adapted to changing circumstances in order
                            to provide service in a timely manner with courtesy.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <h3>Education</h3>
                </div>
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between">
                        <h5>University of Central Florida </h5>
                        <small className="text-muted ms-auto">06-2024 - 10-2024</small>
                    </div>
                    <ul>
                        Completed an 18-week intensive program
                        focused on MERN stack web development.
                    </ul>
                </div>
            </div>

        </div>


    );
}