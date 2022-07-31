import linguaImage from '../images/Lingua.gif';
import barHop from '../images/Bar-Hop.gif';
import techBlog from '../images/tech_blog.gif';
import budgetTracker from '../images/budget_tracker.gif';
import noteTacker from '../images/note_taker.gif';
import weatherDashboard from '../images/weather_dashboard.gif';


const portfolioData = [
    {
        image: linguaImage,
        link: 'https://protected-island-60101.herokuapp.com/',
        github_link: 'https://github.com/SamuelGa25/Project-2-Lingua.git',
        title: 'Lingua',
        summary: 'A website that offers a social platform to learn different languages and find a pen pal. Dynamically updates with all the content. Login/Sign Up pages with account settings and a chat.',
        tech: 'MongoBD'
    },
    {
        image: barHop,
        link: 'https://deromuald.github.io/bar-hop/',
        github_link: 'https://github.com/DeRomuald/bar-hop.git',
        title: 'Bar-Hop',
        summary: 'The current app will provide the ability to find a cocktail recipe by its name. As well, as the ability to get a random cocktail with a click of a button.',
        tech: 'JavaScript, Node.JS'
    },
    {
        image: techBlog,
        link: 'https://secret-springs-76339.herokuapp.com/',
        github_link: 'https://github.com/elfsvet/stepan-matysik-tech-blog.git',
        title: 'Tech Blog',
        summary: "The CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well.",
        tech: 'Node.JS'
    },
    {
        image: budgetTracker,
        link: 'https://shrouded-cove-70926.herokuapp.com/',
        github_link: 'https://github.com/elfsvet/sm-bud-track.git',
        title: 'Budget Tracker',
        summary: 'A fast and easy way to track their money. The Budget tracker with option to track withdrawals and deposits with or without a data/internet connection.',
        tech: 'JavaScript Node.JS npm MongoDB'
    },
    {
        image: noteTacker,
        link: 'https://sm-note-taker.herokuapp.com/',
        github_link: 'https://github.com/elfsvet/stepan-matysik-note-taker.git',
        title: 'Note Taker',
        summary: 'This project is a note taker. Uses back end to store variable notes and to do lists.',
        tech: 'JavaScript Node.JS npm Heroku'
    },
    {
        image: weatherDashboard,
        link: 'https://elfsvet.github.io/stepan-matysik-weather-dashboard/',
        github_link: 'https://github.com/elfsvet/stepan-matysik-weather-dashboard.git',
        title: 'Weather Dashboard',
        summary: 'This project is a readme file generator. It speeds up the time you spend to create a ReadMe file.',
        tech: 'HTML CSS JavaScript jQuery'
    },
];

export default portfolioData;