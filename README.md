# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[GitHub repo](https://github.com/karkir0003/DSGTBootcampWebpage/)

Redesigned in February 2022 by [Faris Durrani](https://github.com/farisdurrani/). :)

Documentation can be found in `DSGTBootcampWebpage_Docs.md` or `DSGTBootcampWebpage_Docs.pdf` files

## Setup
1. Install Node using `nvm` (Node Version Manager) using this [guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/). Aim to get Node v20 and NPM v10

2. Verify that `node` and `npm` are installed by running `node -v` and `npm -v` to see that the Node version is v20 and npm version is v10

3. Install `yarn` by running `npm install -g yarn` in the project directory

## How to Run
In the project directory, run these commands:
```
yarn install
yarn run build
yarn start
```
>"yarn install" (install node package manager) <br/>
>"yarn run build" (this command essentially compiles the React.js web app) <br/>
>"yarn start" (this will start up localhost:3000)


## CI/CD
The CI/CD pipeline is powered by CircleCI and Netlify. CircleCI helps with running automated build checks to ensure that the frontend unit tests pass + the app builds fine. Netlify handles automated deployment of the `DSGTBootcampWebpage` (which triggers on webhook Circle CI passes to Netlify). 

Some links that might be helpful include the following:
* Circle CI Node image: [Here](https://circleci.com/developer/images/image/cimg/node)
* React Netlify Deploy: [Here](https://circleci.com/blog/react-netlify-deploy/)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



