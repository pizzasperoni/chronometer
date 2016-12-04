# Chronometer
A simple chronometer to solve the rubiks cube

## Prerequisites

npm and bower are required to run the project
```
npm -v && bower -v
```

## Getting Started

Run the following command to install all libraries used.

```
npm install && bower install
```

### Usage

After installing all the node modules you are ready to run the server, the following command will make a build compiling all the pug, js and sass files using:

```
gulp serve
```
Once the server is running, go fullscreen and start/stop the chronometer using the space bar.
To restart the chronometer just hit enter.

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

##Colaborations

Albert González with the easytimer library


