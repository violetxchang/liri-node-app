# LIRI Node App

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Commands That Can Be Used in the App

Before the app can be used, all NPMs must be installed with the following command:
> npm install all

### 1. node liri.js concert-this [artist/band name here]

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

![concert-this example](./images/1.png)

### 2. node liri.js spotify-this-song [song name here]

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

![concert-this example](./images/2.png)

### 3. node liri.js movie-this [movie name here]

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

![concert-this example](./images/3.png)

### 4. node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way, " as follows the text in random.txt. Edit the text in random.txt to test out the feature for movie-this and concert-this.

![concert-this example](./images/4.png)

## Link to GitHub

<https://github.com/violetxchang/liri-node-app>

## Technologies used in the app

- javaScript
- node.JS
- JSON

### Violet Chang - Developer
