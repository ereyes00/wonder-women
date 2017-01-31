# wonder-women

With our app, we hope to provide a resource to users who are searching for art-related activities in particular areas. The app will have several components: calendar featuring gallery openings (great way to know where there’s free wine and bites), listings of exhibitions at museums, local galleries and art schools, as well as an up-to-date look at what art films are showing at IFC or Angelika (among others).
We hope to utilize APIs from museums and scrape a lot of data from the bigger galleries. For smaller galleries, our team sees it as a crowdsourcing opportunity. Users have the option to bookmark events and showings they’re interested in, which will then populate the user’s account calendar. 
For the more spontaneous users, who happen to be in a specific neighborhood, they utilize the site to plan their day through geolocating. 

To Run:
Clone the repo
  `git clone https://github.com/ereyes00/wonder-women.git`

Install relevant packages
  `npm install`

Add a config folder and a config.json file and copy this into it:
  `{
  "development": {
    "username": "root",
    "password": null,
    "database": "art-gal",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
  }`
Make sure you make a database called 'art-gal' in Postgres, edit the 'username' field to the username registered on your computer.

Run Postgres on your computer and connect through Postico.

In your terminal run the command:
  `npm start`

Open a browser tab to and navigate to  'localhost:3000'


To run the seed files:
  In the terminal navigate into the seeders directory.
  Type:
    `node <file name>`
  for each seed file you want to run, in the corresponding order.

