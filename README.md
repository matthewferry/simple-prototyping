Simple prototyping is essentially a static site generator using gulp and swig
for templating HTML. There is a simple server and livereload built in so you can
quickly add HTML files. Data is handled in swig through YAML front matter.

## Getting started
Clone the repo, cd into the directory and run:
```shell
$ npm install
$ npm start
```

This will install all the dependencies and fire up the server with a default
Hello world index page.

## How to add pages
All the html files you want to add should be added in `src/templates`. When you
run the server, the entire src directory is compiled and copied to a public
server directory. To add a page, simply add a new html file, and the server will
automatically parse the file and add it to the public server directory.

By default, only an index.html file is included which shows you a very basic
page. You can use swig for templating and front-matter for adding data to your
pages.
