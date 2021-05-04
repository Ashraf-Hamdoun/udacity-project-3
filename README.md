# Webpack Express Example App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack.

    #How to start :
        - after clone it
        - cd udacity-project-3
        - npm i
        - npm run build-prod to build /dist folder
        - npm run start to run the server

    #How to build :
        - install Webpack and CLI
        - md "src" folder and index.js
        - add ' "build": "webpack" ' to scripts in package.json
        - echo new file called 'webpack.config.js' at src (or anthor nested folder)
        - make the entry point in webpack.config
        - run 'npm run build'
        - then we found our "dist" distribution folder
        - add assets files to .html file and link them
        - install Babel => "npm i -D @babel/core @babel/preset-env babel-loader"
        - make file called .babelrc
        - config our webpack development | production files
        - add some loaders ane plugins like 'sass-loader' , 'html-webpack-plugin' ...
        - Install workbox-webpack-plugin for services workers
        - add .gitignore file to ignore some files and folders
        - md .env file to put the api key in it and using its plugin

        - Config #JavaScript files :
            * have API key from meaningcloud
            * set up the server on port 8081
            * add event listener to the Button
            * add url checker function and if it is true run next
            * fetch data from Api
            * post data to out server
            * run our function to update the UI
                - fetch data from our server
                - put the data from object to its innerHTML elements
            * resolve some broken javascript :
                - input dosen't respond so i make a globle scope 'Client'
                - button refresh the page so i change its type into 'button' in index.html
                - async function make error when i use babel so i add some 'presets' in babel options /.babelrc
            * add a /__test__ folder to test out functions 'jest supertest'
        - md files.scss to stylish our page
        - include sass files to index.js
        - run the app using :
            * 'npm run start' on port 8081
            * 'npm run build-dev' on port 8080
            * 'npm run build-prod' to init /dist folder

