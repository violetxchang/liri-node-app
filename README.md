<h1>LIRI Node App</h1>
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


<h2>How The App Is Organized</h2>


<h2>Commands That Can Be Used in the App</h2>
<h3>1. node liri.js concert-this [artist/band name here]</h3>
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

• Name of the venue
<br>• Venue location
<br>• Date of the Event (use moment to format this as "MM/DD/YYYY")

<h3>2. node liri.js spotify-this-song [song name here]</h3>
This will show the following information about the song in your terminal/bash window


• Artist(s)
<br>• The song's name
<br>• A preview link of the song from Spotify
<br>• The album that the song is from


<p>If no song is provided then your program will default to "The Sign" by Ace of Base.</p>

<h3>3. node liri.js movie-this [movie name here]</h3>
This will output the following information to your terminal/bash window:

   <br>• Title of the movie.
   <br>• Year the movie came out.
   <br>• IMDB Rating of the movie.
   <br>• Rotten Tomatoes Rating of the movie.
   <br>• Country where the movie was produced.
   <br>• Language of the movie.
   <br>• Plot of the movie.
   <br>• Actors in the movie.

<h3>4. node liri.js do-what-it-says</h3>
Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. Edit the text in random.txt to test out the feature for movie-this and concert-this.

<h2>Include screenshots, gifs or videos of the app functioning
create video</h2>

<h2>Link to Deployed App</h2>


<h2>Technologies used in the app</h2>
• javaScript
<br>• node.JS
<br>• JSON

<h3>Violet Chang - Developer</h3>