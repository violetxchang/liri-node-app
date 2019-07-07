require("dotenv").config();
var keys = require("./keys");
var moment = require("moment");
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var input = process.argv[3];


switch (action) {
    case "concert-this":
        concertThis(input);
        break;

    case "spotify-this-song":
        spotifyThis(input);
        break;

    case "movie-this":
        movieThis(input);
        break;

    case "do-what-it-says":
        doThis();
        break;

    default:
        console.log("No such value found.")
}

//#1
function concertThis(Artist) {

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + Artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
            function (response) {
                console.log("-----------------------------------------------------------------");
                console.log("Venue Name: " + response.data[0].venue.name);
                console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
                var dateRev = moment(response.data[0].datetime).format("L");
                console.log("Date of Event: " + dateRev);
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

//#2
function spotifyThis(songName) {
    if (!songName) {
        songName = "The Sign Ace of Base";
    }
    spotify.search({
        type: "track",
        query: songName
    }, function (err, data) {
        if (err) {
            return console.log("Error: " + err);
        }
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
        console.log("Track Name: " + data.trackstracks.items[0].name);
        console.log("Track Preview: " + data.tracks.items[0].album.external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
    })
}



//#3 
function movieThis(movieName) {
    if (!movieName) {
        movieName = "Mr. Nobody"
    }

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                console.log("-----------------------------------------------------------------");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
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

//#4
function doThis(){


// This block of code will read from the "random.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }

  // Break the string down by comma separation and store the contents into the output array.
  var dataArray = data.split(",");

var command = dataArray[0];
var input = dataArray[1];

    // Print each element (item) of the array
    console.log(output[i]);

});
}