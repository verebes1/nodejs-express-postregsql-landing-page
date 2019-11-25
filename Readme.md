Readme.md


# Sales lead collecting Landing Page project using Node.js.

Simple landing page for a new product using Node.js, Express.js and PostregSQL database.

It allows to submit email addresses as sales leads. The user is also allowed to sign up if there are no users in the database the first one will get admin privileges and will be able to manipulate the sales leads from the menu.

## Technologies used:
Node.js, Express.js, PostregSQL
Templating engine for the frontend used: PUG, Bootstrap

## How to use.

Clone the repository and use the set of commands below to set your environment up:


To install node.js version 10.16.3 use below

>nvm install 10.16.3 

To switch to a different version of node installed

>nvm use 12.1.0

Install ExpressJS express generator -g stands for global

>npm install express-generator -g

To generate an express project
--view=pug - use the pug templating engine
myapp is the projects name

>express --view=pug myapp

install dependencies

>cd APPNAME
>npm install

run the app 

>DEBUG=myapp:* npm start
>or use startnode.sh APPNAME script that I have created

Install nodemon and then edit package.json start script.

>npm install nodemon --save-dev

by replacing the scripts part of file with this:

```
  "scripts": {
    "start": "if [[ $NODE_ENV == 'production' ]]; then node ./bin/www; else nodemon ./bin/www; fi"
  },
```

It's good to create a folder called controllers to controll routes better
in routes for example use to get index.js:

```
let index = require('../controllers/index')

router.get('/', index.getIndex)
```
Add a .gitignore file and include the node_modules in it: 
>node_modules

Install postgresql

>brew install postgresql

Start postgresql once (remember that you need to restart it once you restart your computer or just use the start script: 'startnode_and_db.sh')

>pg_ctl -D /usr/local/var/postgres start

Get into postgress to setup database:

>psql postgres

Create user to delete use DROP instead of CREATE

>CREATE ROLE "express-mvp-dbuser" WITH LOGIN PASSWORD '123.456';

Creater a database:

>CREATE DATABASE "express-mvp-db";

Install sequelize

>npm install sequelize
>npm install sequelize --save

Install PG

>npm install pg --save

Install sequelize-cli

>npm install sequelize-cli -g

In the root app folder create a .sequelizerc file

>touch .sequelizerc

add the content to .sequelizerc :
```
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('', 'models'),
  'seeders-path': path.resolve('', 'seeders'),
  'migrations-path': path.resolve('', 'migrations')
}
```

Initialize sequelize

>sequelize init

In the config/package.json file edit the database details and add "module.exports = " at the very begining
actually the module.exports causes error 

>const path = require('path');
>EXAMPLE 
```
module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('', 'models'),
  'seeders-path': path.resolve('', 'seeders'),
  'migrations-path': path.resolve('', 'migrations')
}
```

Once created a DB model and a migration file it is needed to initialize the migration
We normally create migration files with todays date and time and the migration name for example:

>201911250916-AddIsAdminFieldToUsers.js

Then use command below to perform the migration:

>sequelize db:migrate

Install passport.js for authentication www.passportjs.org

>npm install passport passport-local bcrypt validator express-session connect-flash --save

Install lodash and validator

>npm install lodash validator --save

## DEMO:

![alt text](https://github.com/verebes1/nodejs-express-postregsql-landing-page/raw/master/demo.png "Demo of the page")

