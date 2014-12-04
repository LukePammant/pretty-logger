Pretty-Logger
============

Pretty Logger for nodejs allows for color coded error, warning, info, debug and trace console messages with (or without) timestamp.
This is a modified version of the [basic-logger](https://github.com/sbsoftware/node-basic-logger) project to use [colors](https://github.com/marak/colors.js/). 

<img src="https://raw.githubusercontent.com/LukePammant/pretty-logger/master/screenshots/info.png" alt="Screenshot of pretty logger in action" />

Installation
------------

	npm install pretty-logger --save

Accepted Colors
---------------

black, red, green, yellow, blue, magenta, cyan, white, gray, grey

Usage
-----
```JavaScript
	var Logger = require('pretty-logger');
	// configure level one time, it will be set to every instance of the logger
	Logger.setLevel('warning'); // only warnings and errors will be shown
	Logger.setLevel('warning', true); // only warnings and errors will be shown and no message about the level change will be printed

	var customConfig = {
		showMillis: true,
		showTimestamp: true,
		info: "gray",
		error: "magenta",
		debug: "white"
	};

	var log = new Logger(customConfig) // custom config parameters will be used, defaults will be used for the other parameters
	//var log = new Logger(); // you can also do this to accept the defaults

	log.error("An error occurred"); // will be red
	log.warn("I've got a bad feeling about this!"); // will be yellow
	log.info('Something just happened, thought you should know!'); // will be green
	log.debug('The value of x is: ' + x); // will be blue
	log.trace('Heres some more stuff to help out.'); // will be gray
```

Config options
--------------

For the `error`, `info`, `warn`, `debug`, and `trace` properties you can find the accepted colors on the [colors](https://github.com/marak/colors.js/) repo.

* `showTimestamp` - Show the timestamp with every message.
* `showMillis` - Show milliseconds in the timestamp.
* `printObjFunc` - The function to apply objects to, if logged. Default is util.inspect.
* `prefix` - String that is prepended to every message logged with this instance.
* `error`- String that represents the color of the error text. Default is "red". 
* `info`- String that represents the color of the info text. Default is "green".
* `warn`- String that represents the color of the warning text. Default is "yellow".
* `debug`- String that represents the color of the debug text. Default is "cyan".
* `trace`- String that represents the color of the trace text. Default is "grey".

Future versions
---------------

* log to file
