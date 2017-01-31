# wonder-women

With our app, we hope to provide a resource to users who are searching for art-related activities in particular areas. The app will have several components: calendar featuring gallery openings (great way to know where there’s free wine and bites), listings of exhibitions at museums, local galleries and art schools, as well as an up-to-date look at what art films are showing at IFC or Angelika (among others).
We hope to utilize APIs from museums and scrape a lot of data from the bigger galleries. For smaller galleries, our team sees it as a crowdsourcing opportunity. Users have the option to bookmark events and showings they’re interested in, which will then populate the user’s account calendar. 
For the more spontaneous users, who happen to be in a specific neighborhood, they utilize the site to plan their day through geolocating. 

To Run: <br/>
Clone the repo <br/>
  `git clone https://github.com/ereyes00/wonder-women.git` <br/>

Install relevant packages <br/>
  `npm install` <br/>

Add a config folder and a config.json file and copy this into it: <br/>
  `{` <br/>
  `"development": {` <br/>
    `"username": "root",` <br/>
    `"password": null,` <br/>
    `"database": "art-gal",` <br/>
    `"host": "127.0.0.1",` <br/>
    `"dialect": "postgres"` <br/>
  `},` <br/>
  `"test": {` <br/>
    `"username": "root",` <br/>
    `"password": null,` <br/>
    `"database": "database_test",` <br/>
    `"host": "127.0.0.1",` <br/>
    `"dialect": "postgres"` <br/>
  `},` <br/>
  `"production": { `<br/>
    `"username": "root",` <br/>
    `"password": null,` <br/>
    `"database": "database_production",` <br/>
    `"host": "127.0.0.1",` <br/>
    `"dialect": "postgres"` <br/>
  `}` <br/>
  `}` <br/>
Make sure you make a database called 'art-gal' in Postgres, edit the 'username' field to the username registered on your computer. <br/>

Run Postgres on your computer and connect through Postico. <br/>

In your terminal run the command: <br/>
  `npm start` <br/>

Open a browser tab to and navigate to  'localhost:3000' <br/>


To run the seed files: <br/>
  In the terminal navigate into the seeders directory. <br/>
  Type: <br/>
    `node <file name>` <br/>
  for each seed file you want to run, in the corresponding order. <br/>

