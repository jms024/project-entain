# project-entain #

## About the application
### db
- mySql database
### api
- NodeJs application mainly built on ExpressJs for REST API services and Sequelize for Object Relational Mapping (ORM)
- There are 5 endpoints to GET movies, genres and image configuration settings
### app
- Single page application to allow browsing movie titles and filtering them by title and/or genre

## Dependencies
- Docker Desktop 4.3^

## How do I get set up?
- Clone repository
- For the first run, in root directory run 'docker-compose up -d --build'. Use command 'docker-compose up -d' ever after
- View the front-end app on http://localhost:3000/

## The setup
- Db, api and app will run on 3 separate containers on the same bridge network
- The database will be exposed on port 3306, api on port 8080 and front end app on 3000
- An sql script found in db/mySqlDump will run creating 3 tables on the database; movies, genres and movie_genres for 
  many-to-many associations.
- The script also adds all the necessary data for the application to run including all the genres, 100 movies and all 
  associations between movies and genres
- Visiting the front-end app the user will be able to browse through all the movies. 
- The movies may be filtered by title using the textbox at the top and/or by genre using the menu on the left
