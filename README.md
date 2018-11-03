# Art Gal

Visit https://artgal2.herokuapp.com/

With our app, we hope to provide a resource for those who are searching for art-related activities in New York City. The app will allow users to create events for museums, galleries and schools and also give them the opportunity to bookmark the ones that interest them. <br/><br/>
Art Gal allows site visitors to discover events through three channels: Art Gal's curated list of featured events on the home page, the 'Openings This Month' link that will offer a broader take on the newest events, and also through our search bar which users can refine their searches by zip code, date range and location type.
<br/>

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

Open a browser tab to and navigate to  'localhost:8888' <br/>


To run the seed files: <br/>
  In the terminal type: <br/>
    `node seed/index.js` <br/>

