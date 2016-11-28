# gulp-tasks
Automatized tasks with gulp.js to set up your development environment

## Prerequisites

nodejs is required to run this file, yo can check out your node and npm version using

```
npm -v && node -v
```

## Getting Started

After downloading the gulpfile you will need to run the following command to install all the gulp libraries.

```
npm install && bower install
```

### Usage

After installing all the node modules you are ready to run the server, the following command will make a build compiling all the pug, js and sass files using:

```
gulp serve
```

### Compiling all files

Also for js files.
```
gulp build
```

### Compiling only Sass files

The next command will only compile sass files and put them into the .tmp folder
```
gulp sasss
```
### Compiling only JS files

Also for js files.
```
gulp js
```

### Compiling only pug files

And for .pug files.
```
gulp pug
```
# Production commands
To deploy your files on your ftp server you may run the following command after executing a build:
```
gulp upload
```

## Built With

* [gulpJS](http://gulpjs.com/) - The framework used
* [PugJs](https://pugjs.org/api/getting-started.html) - Template Engine
* [Sass](http://sass-lang.com/) - Styles Engine




