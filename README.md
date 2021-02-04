# Landis Dashboard

This is a simple crud app (deployed [here](https://landis-dashboard-dev.herokuapp.com/)) that allows users to see a dashboard of clients and a data summary of those clients. You may sign up with a valid email, or log in as an admin with the following credentials:

```
username- cody@email.com
pw- a7e!r3
```

## Setup

To run this project on your local machine, run the following commands. Note that you must have Postgres installed.

```
git clone https://github.com/jackiefeit94/landis-dashboard.git
createdb landis-dashboard
npm run seed
npm run start-dev
```

## Tech Stack

This app uses Express, Sequelize, and PostgreSQL on the backend, and React and Redux on the frontend.

## Views

Users can log in or sign up.

![login/sign-up](https://media.giphy.com/media/BYqmwQGGBPMTXKqonj/giphy.gif)

Users can see a home screen and navigate to various pages.

![home](https://media.giphy.com/media/A4xl0e3FTGwZHh7pbz/giphy.gif)

Users can view their client dashboard and make edits to client profiles, as well as delete clients.

![dash](https://media.giphy.com/media/cVCAXRE7zSnIy1vuoW/giphy.gif)

Users can add a new client from the add client page.

![add](https://media.giphy.com/media/JzayIfOTHxHCVRhNnT/giphy.gif)

Users can see a data overview of client credit scores, account balances, and region.

![data](https://media.giphy.com/media/G4nqUEiEYDjdC6HVU0/giphy.gif)

## Authors

* Jacqueline Feit
* Bootstrapped with boilerplate code from Fullstack Academy
