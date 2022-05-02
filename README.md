# SEI-Project-2-IMDB 
## App Deployment link
https://sei-popcorn-time.herokuapp.com/movies

## App Description- PopCorn Time
This app is based off of IMDB, and is a place for people to post movies and make reviews on those movies. In order to post movies and make reviews, users will have to register an account with a unique username, unique email, and a password which will all be stored on our mongo db. The user's password information is encrypted using b crypt and is not seen by us or stored in our DB. We created one to many relationships between movies and reviews, users and movies, and users and reviews for our schemas. 

## WireFrame and ERD
WireFrame
![Screen Shot 2022-04-25 at 4 52 16 PM](https://user-images.githubusercontent.com/100155199/165326356-376d569e-669a-4dd1-a288-61ff4c909406.png)

ERD
![Screen Shot 2022-05-02 at 11 19 40 AM](https://user-images.githubusercontent.com/101526418/166260028-c721211c-878b-4522-a2ba-6e4c24ba8255.png)



## Technologies used
- mongoose
- nodejs
- heroku
- express
- nodemon
- bcrypt
- ejs
- method-override
- express sessions



## USER STORIES:
* Ability to register and login
* Ability to only delete or edit movies the logged in user has made
* Ability to add new movies
* Ability to edit/update the movies
* Ability to delete movies
* Ability to add comments
* Ability to add ratings to movies 

Stretch Goals
Rate each movie based on the review avg.
Slideshow of images w/ movie posters
Cast- array of strings or array of refs.
User - favorites - track fave films
Try API for data




