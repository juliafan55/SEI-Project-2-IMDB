# SEI-Project-2-IMDB 
## App Deployment link
https://sei-popcorn-time.herokuapp.com/movies

## App Description- PopCorn Time
This app is based off of IMDB, and is a place for people to post movies and make reviews on those movies. In order to post movies and make reviews, users will have to register an account with a unique username, unique email, and a password which will all be stored on our mongo db. The user's password information is encrypted using b crypt and is not seen by us or stored in our DB. We created one to many relationships between movies and reviews, users and movies, and users and reviews for our schemas. 

## MVP Goals
- Make a website where movies are posted with basic details about the movie (director, poster, release date, synopsis)
- Use user authentication to register new users and allow them to make full use of the app
- Allow users to make reviews for the movies they have posted
- Allow users to edit reviews and movies
- Allow users to delete movies

## USER STORIES:
* Ability to register and login
* Ability to only delete or edit movies the logged in user has made
* Ability to add new movies
* Ability to edit/update the movies
* Ability to delete movies
* Ability to add comments
* Ability to add ratings to movies 

## WireFrame
![Screen Shot 2022-04-25 at 4 52 16 PM](https://user-images.githubusercontent.com/100155199/165326356-376d569e-669a-4dd1-a288-61ff4c909406.png)

## ERD
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

## Screenshots of the app

Register Page. 
![Screen Shot 2022-05-02 at 11 25 06 AM](https://user-images.githubusercontent.com/101526418/166260993-4188f6f1-e4d3-464f-aeee-7eef12649c92.png)

Login page. 
![Screen Shot 2022-05-02 at 11 24 57 AM](https://user-images.githubusercontent.com/101526418/166261009-3ae34541-31e6-4a92-8fd2-b5378dc4eb5a.png)

Home page (/movies). 
![Screen Shot 2022-05-02 at 11 25 24 AM](https://user-images.githubusercontent.com/101526418/166261563-ff10fb45-1c4a-4336-ad9e-e407ba54f25d.png)

Show page for a specific movie. 
![Screen Shot 2022-05-02 at 11 28 38 AM](https://user-images.githubusercontent.com/101526418/166261577-d75f6c8e-780c-46c3-85b8-e8ae5ade7b4c.png)





## Stretch Goals
- Rate each movie based on the review avg.
- Slideshow of images for movie posters
- create a many to many relationship for cast (one actor can be in many movies, one movie can have many actors)
- An actor page to see which movies an actor starred in
- User favorites functionality
- Webscraping for movie info



