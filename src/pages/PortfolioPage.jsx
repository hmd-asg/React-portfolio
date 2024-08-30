import Card from '../components/UI/Card/CardBody'
export default function PortfolioPage() {
    const projects = [{
        title: 'Code space',
        description: 'Space for tech',
        github: 'https://github.com/markjas0n/do-you-code',
        image: '../assets/code-space.png'
    }, {
        title: 'Jate',
        description: 'Just another text editor',
        github: 'https://github.com/hmd-asg/pwa-jate',
        image: '../assets/jate.png'
    }, {
        title: 'Weather forecast',
        description: '5 days weather forecast',
        github: 'https://github.com/hmd-asg/Weather-Forecast',
        image: '../assets/weather.png'
    }, {
        title: 'Note taker',
        description: 'Web application for saving notes',
        github: 'https://github.com/hmd-asg/Note-Taker',
        image: '../assets/note.png'
    }];
    return (
        <div className="container">
            <h2>Portfolio</h2>
            <div className="row">
                {
                    projects.map(proj => (
                        <div className="col-md-6">
                            <Card project={proj} />
                        </div>
                    ))
                }

            </div>
        </div>
    );
}