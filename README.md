== Heroku Node Express Boilerplate ==
==========

This is a Heroku Node.js Express Boilerplate. It is practically a one button install to have a running Node.js application server running in the cloud. It includes ejs templates, a file system database and perpares files for the frontend by automatically bundles javascript and css files for delivery. It also includes a sweet frontend library that includes things like base styles, custom fonts, and responsive design.

== Heroku ==
------------

Includes all the setup files for a Node.js server running on Heroku. Run though the Heroku "Getting Started", then upload this git repository and run "heroku open." Bam, you have a server, with a URL, running on cloud servers.

== Node.js ==
------------

Application server the runs entirely on Javascript.

== Express ==
------------

A framework for Node.js that makes it easier to create server routes.

== Templates ==
------------

Comes with EJS and Jade template engines already installed. 

== Database ==
------------

Databases can be cumbersome on Node and Heroku. This boilerplate includes a simple file system database that is free and requires no additional libraries. A File System (FS) Database is fully appropriate for small amounts of data. All data is stored in the file system as json files, making it ideal for AJAX requests. Individual records are retrieved very quickly, but traditional searching and indexing of multiple records is much slower than relational databases.  

== Bundles ==
------------

Boilerplate includes a few helpers to create file bundles. /css on the server is a bundle of all the sites CSS files. /js is a bundle of all the sites base javascript files.

== Stylist.css ==
------------

Base.css is the HTML5 CSS Reset included in most boilerplates. Style.css is a more stylistic reset providing a wide array of object-oriented css styles. Forms.css is a basic form style. Lane/style.css is a custom font example. layout.css is a grid system for css that updates with the browser width.

These files are maintained as a separate repository: [https://github.com/bishopZ/Stylist.css](https://github.com/bishopZ/Stylist.css)





