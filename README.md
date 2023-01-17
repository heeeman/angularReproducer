# Reproducer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## mode of operation

I have an App in 2 operation modes. 
First as a normal Angular App for internal use. 
Second as a embedded App in a CMS system. In this case, the cms emulats the index.html of the Angular App.

## challange
In the cms mode, i haven't found a way to lazy load the chunks. 


## Build

Run `ng build --output-hashing none` to build the project. The build artifacts will be stored in the `dist/` directory.

## start test server

Run `npx http-server ./serverContent` to start the test server. The test server will run the angular app in 2 modes:
- default standalone app
- cms mode


## Links
(first start test server)

Normal mode for an Angular app by fix path: http://localhost:8080/standalone/other-page

Angular embedded in a CMS Page: http://localhost:8080/cms/dynamic/path/angularembedded/

Server root: http://localhost:8080



