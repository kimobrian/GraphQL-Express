# GraphQL-Express
An simple Express Server implemented using GraphQL and Apollo.
This repo is attached to a series of articles with detailed explanations of the implementations:

Part 1: [Implementing GraphQL using APollo on an Express Server](https://scotch.io/tutorials/implementing-graphql-using-apollo-on-an-express-server) - Use the `master` branch.

Part 2: [Creating GraphQL Subscriptions in Express](https://scotch.io/bar-talk/creating-graphql-subscriptions-in-express) - Use the `subscriptions` branch.

The repo is also linked to another [GraphQL-React-Apollo](https://github.com/kimobrian/GraphQL-React-Apollo) with front end implementations ing React using Apollo with corresponding articles.
## Setup and Installation.

> Note: Configure the port on the client code to match the CORs origin on this [line](https://github.com/kimobrian/GraphQL-Express/blob/f0ba47db3ae95c5b5f586f2870fa3e2c7cdb61cf/server.js#L13).

```sh
git clone git@github.com:kimobrian/GraphQL-Express.git  #for SSH

git clone https://github.com/kimobrian/GraphQL-Express.git #for HTTPS

cd GraphQL-Express

npm i #Alternatively yarn

npm start #Alternatively yarn start

```

For any issues with nodemon, install it globally.

```sh
npm install nodemon -g # Alternatively yarn global add nodemon

```

Navigate to [localhost](http://localhost:7700/graphiql) to experiment with different queries.

You can explore [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) to avoid global installation of modules.
