require("dotenv").config();
var key = require("./keys");
var moment = require("moment");

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var action = process.argv[2];
var joinName = process.argv.slice(3).join(" ");


switch (action) {
    case "concert-this":
        concertThis(joinName);
        break;

    case "spotify-this-song":
        spotifyThis(joinName);
        break;

    case "movie-this":
        movieThis(joinName);
        break;

    case "do-what-it-says":
        doThis();
        break;

    default:
        console.log("No such value found.")
}

//#1
//#3 

function concertThis(Artist){

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "https://rest.bandsintown.com/artists/" + Artist + "/events?app_id=codingbootcamp";

axios.get(queryUrl).then(
        function(response){
            console.log("-----------------------------------------------------------------");
            console.log("Venue Name: "+response.data[0].venue.name);
            console.log("Venue Location: "+response.data[0].venue.city+", "+response.data[0].venue.country);
            var dateRev=moment(response.data[0].datetime).format("L");
            console.log("Date of Event: "+dateRev);
            console.log("-----------------------------------------------------------------");
        })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
}


//#3 

function movieThis(movieName){
    if(!movieName){
        movieName="Mr. Nobody"
    }

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

axios.get(queryUrl).then(
        function(response){
            console.log("-----------------------------------------------------------------");
            console.log("Movie Title: "+response.data.Title);
            console.log("Year: "+response.data.Year);
            console.log("IMDB Rating: "+response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: "+response.data.Ratings[1].Value);
            console.log("Country: "+response.data.Country);
            console.log("Language: "+response.data.Language);
            console.log("Plot: "+response.data.Plot);
            console.log("Actors: "+response.data.Actors);
            console.log("-----------------------------------------------------------------");
        })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
}