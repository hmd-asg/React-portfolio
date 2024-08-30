import Card from '../components/UI/Card/CardBody'
export default function PortfolioPage() {
    const projects = [{
        id: 1,
        title: 'Code space',
        description: 'Space for tech',
        github: 'https://github.com/markjas0n/do-you-code',
        image: './src/assets/code-space.png'
    }, {
        id: 2,
        title: 'Jate',
        description: 'Just another text editor',
        github: 'https://github.com/hmd-asg/pwa-jate',
        image: './src/assets/jate.png'
    }, {
        id: 3,
        title: 'Weather forecast',
        description: '5 days weather forecast',
        github: 'https://github.com/hmd-asg/Weather-Forecast',
        image: './src/assets/weather.png'
    }, {
        id: 4,
        title: 'Note taker',
        description: 'Web application for saving notes',
        github: 'https://github.com/hmd-asg/Note-Taker',
        image: './src/assets/note.png'
    }];
    return (
        <div className="container w-50 mx-auto mt-5">
            <h2>Portfolio</h2>
            <div className="row">
                {
                    projects.map(proj => (
                        <Card project={proj} />
                    ))
                }

            </div>
        </div>
    );
}