import movieApp from "../../assets/project_images/movie-app/movie-app.gif";
import FaceDetection from "../../assets/project_images/Face-Detection/FaceDetection.png";
import JobListing from "../../assets/project_images/Job-Listing/Job-Listing.png";
import IpTracker from "../../assets/project_images/Ip-Tracker/ip-tracker.png";
import RestCountry from "../../assets/project_images/Rest-Countries/Rest-country.gif";
import RPS from "../../assets/project_images/RPS-Game/RPS.gif";

const projectContents = [
    {
        id: "p1",
        Image: movieApp,
        title: "The Movie App",
        description: "A movie web application built with ReactJs, TMDB API and Firebase. Some features include: Users authentication and authorization, search functionality that allows users search for movie/tvshow/series of any kind, user profile to manage account and favourites movies, Review Section for users to add, reply, delete and update comments, e.t.c.",
        liveUrl: "https://movie-app-eta-beige.vercel.app",
        repositoryUrl: "https://github.com/Moses-George/Movie-Recommendation"
    },
    {
        id: "p2",
        Image: FaceDetection,
        title: "Face Detection",
        description: "A Face Detection web application that uses an AI model to detect faces on any image entered by users. Built with ReactJs, Javascript and Clarifai API",
        liveUrl: "https://face-recognition-nine.vercel.app/",
        repositoryUrl: "https://github.com/Moses-George/Face-Recognition"
    },
    {
        id: "p3",
        Image: JobListing,
        title: "Job Listing",
        description: "A web application for Job Listing, built with ReactJs, Javascript and JSON. It uses Javascript to filter out Jobs based on selected categories.",
        liveUrl: "https://job-listing-lemon.vercel.app/",
        repositoryUrl: "https://github.com/Moses-George/Job-Listing"
    },
    {
        id: "p4",
        Image: IpTracker,
        title: "Ip Address Tracker",
        description: "Ip Address/domain tracker built built with ReactJs, Javascript, Ipify API, LeafletJs. It tracks its user Ip Address on the map on initial page load and allows users search for any Ip addresses or domains and see the key information and location.",
        liveUrl: "https://ip-address-tracker-moses-george.vercel.app/",
        repositoryUrl: "https://github.com/Moses-George/Ip-Address-Tracker"
    },
    {
        id: "p5",
        Image: RestCountry,
        title: "Rest Countries",
        description: "A web application that pulls data from the rest-countries api and display information on every country in grid. Users can filter countries by region and also search for any country based on any filtered category.",
        liveUrl: "https://rest-countries-silk-gamma.vercel.app/",
        repositoryUrl: "https://github.com/Moses-George/Resr-Country"
    },
    {
        id: "p6",
        Image: RPS,
        title: "Rock, Paper, Scissors",
        description: "A fairly advanced Rock-Paper-Scissors game, that includes lizard and spock version. Built with vanilla Javascript. ",
        liveUrl: "https://moses-george.github.io/Rock-Paper-Scissors-Game/",
        repositoryUrl: "https://github.com/Moses-George/Rock-Paper-Scissors-Game"
    }

]

export default projectContents;