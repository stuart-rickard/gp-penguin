# PENGUIN PLANNER

## Purpose

The purpose of this project is to build a full-stack-web-application where users can easily find a time when a group of people can get together.
This site is built completely from scratch and is deployed to Heroku. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. It also utilizes SendGrid, a cloud-based SMTP (Simple Mail Transfer Protocol) provider that sends emails withoug having to maintain email servers.

## Requirements

MySQL server if installed locally, or JawsDB if deploying to Heroku

## Installation and Usage

1. Install node.js

2. Clone or download the source code from GitHub to your local machine:

```shell
git@github.com:stuart-rickard/gp-penguin.git
```

3. Navigate to the root of the downloaded code by typing:

```shell
cd gp-penguin
```

4. Install required dependencies by opening a terminal and on command line type:

```shell
npm init -y (set "main": "server.js", "start": "node server.js")
npm install express sequelize mysql2
npm install dotenv
```

5. Create the .env file and open the file by typing:

```shell
touch .env
code .env
```

6. Add the following to the .env file:

```shell
DB_NAME='penguin_db'
DB_USER=''
DB_PW=''
```

7. Navigate to the MySQL shell and enter:

```shell
mysql -u root -p
```

8. Enter the password for MySQL

9. Create the database, then exit MySQL by typing:

```shell
source db/schema.sql
exit
```

9. To test your routes in Insomnia, seed the database and start the server:

```shell
npm run seed
npm start
```

## Screenshot

![penguin planner](./public/images/penguin-planner.PNG)

## Deployed Demo

https://penguin-planner.herokuapp.com/

## Built With

HTML

CSS

Javascript

## Technologies

Node.js

npm

mysql2

Sequelize

SendGrid

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Contribution

Made with ❤️ by
Joanne Chun
Chance Crawford
Brian Esparza
Noah Fabric
VJ Mariano
David Reys Santoyo
Stuart Rickard
Kevin Rivera
