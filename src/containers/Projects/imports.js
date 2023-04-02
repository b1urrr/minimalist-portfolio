import empire from '../../assets/projects/empire.png';
import robot from '../../assets/projects/robot.png';
import weather from '../../assets/projects/weather.png';


const projectCard = [
    {
        'imgurl': empire,
        'url': "http://restaurant-empire-demo.vercel.app/",
        'name': "Restaurant Empire",
        'desc': "Restaurant website template with user dashboard to update the menu as needed.",
        'stack': "React - Express - Node - MongoDB",
        'id': 1,
    },
    {
        'imgurl': robot,
        'url': "https://github.com/b1urrr/twitter-bot",
        'name': "Twitter Bot",
        'desc': "A bot checking the internet speed via speedtest.net and reporting outcomes to Twitter.",
        'stack': "Python - Selenium Web Driver",
        'id': 2,
    },
    {
        'imgurl': weather,
        'url': "https://weather-app-kg.web.app/",
        'name': "Weather App",
        'desc': "Making use of openweathermap's APIs to display the current weather in any city in Bulgaria.",
        'stack': "React",
        'id': 2,
    }
]

export default projectCard