# Wall Of Fame

Wall of fame is a social media where you can do CRUD operation in it.

## About Wall Of Fame

the idea come from childhood memories where grafiti is booming back in the day. This application is trying to digitalize and mimic that experience, where anybody can write, read, erase and modified the grafiti itself from "the wall"

## Features

- **View Scribing:** view the scribe that already been made by other user
- **Write a Scribe:** Write the scribe, you can write anything you want on the wall -**Delete Scribe:** Delete scribe on the wall -**Edit Scribe:** Edit Scribe in the wall

## Getting Started

### Prerequisites

Before getting started, make sure you have met the following requirements:

- Node.js is installed on your computer.
- PostgreSQL database is configured and running. Update the database configuration in `knexfile.js` if necessary.
  you can see my knexfile.js for see my data base and you can change
- if you "change" data base don't forget to running migrations and seed

## How to Run Migration and Seed

1. run migration: npx knex migrate:latest
2. run Seed : npx knex seed:run

## Instalation

Terminal Bash:

1.  git clone https://github.com/syahinsyahryan/2300965_36_RKS_wall-of-fame_Challenge-Gold
2.  npm install

## Usage

1. npm run dev

The server will run on http://localhost:9000.
Open your browser and access the frontend at http://localhost:5500.
You can click "Get Start" for see scribe data's

## API Endpoints

The following API endpoints are available:\

1. GET /api/v1/home/feed/wall: Get a list of all scribe.
2. /api/v1/home/feed/add: Create a new scribe.
3. PUT /api/v1/home/feed/edit/:username : Update a scribe by username.
4. DELETE /api/v1/home/feed/delete/:username : Delete a scribe by username.
   You can use these endpoints to interact with the scribe data.

## Postman Documenter

https://documenter.getpostman.com/view/28440310/2s9YC32Zpj
