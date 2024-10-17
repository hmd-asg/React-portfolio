import Card from '../components/UI/Card/CardBody'
import * as projectsImg from '../assets';
export default function PortfolioPage() {
    const projects = [{
        id: 1,
        title: 'Code space',
        description: 'Space for tech',
        github: 'https://github.com/markjas0n/do-you-code',
        image: projectsImg.codeSpace
    }, {
        id: 2,
        title: 'Jate',
        description: 'Just another text editor',
        github: 'https://github.com/hmd-asg/pwa-jate',
        image: projectsImg.jate
    }, {
        id: 3,
        title: 'Weather forecast',
        description: '5 days weather forecast',
        github: 'https://github.com/hmd-asg/Weather-Forecast',
        image: projectsImg.weather
    }, {
        id: 4,
        title: 'Note taker',
        description: 'Web application for saving notes',
        github: 'https://github.com/hmd-asg/Note-Taker',
        image: projectsImg.note
    }];
    return (
        <div className="container w-75 mx-auto mt-5">
            <h2>Projects</h2>
            <div className="row">
                {
                    projects.map(project => (
                        <Card project={project} />
                    ))
                }

            </div>
        </div>
    );
}