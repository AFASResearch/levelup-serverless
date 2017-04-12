# LevelUp
This is a bootstrap for the LevelUp Meetup about serverless architectures.

## Goals
The goal is to make a registration page for this Meetup (similar to meetup.com). 

- Store names and email-addresses in Firebase (under the 'users/' ref).
- Show a list of attendees on the page
- Bonus: send a 'welcome e-mail' for each successfull registration


## Technologies used
Bundling is done using [Webpack 2](https://webpack.js.org/): 

Authentication is done with [Firebase](https://firebase.google.com) and [FirebaseUI](https://github.com/firebase/firebaseui-web)


## Start the project
- `npm install`
- `npm run dev`
- Open [http://localhost:8080](http://localhost:8080) in Chrome

## Documentation
[Firebase database documentation](https://firebase.google.com/docs/database/web/read-and-write)