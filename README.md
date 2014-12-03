Pretty-Logger
============

Pretty Logger for nodejs allows for color coded error, warning, info, debug and trace console messages with (or without) timestamp.
This is a modified version of the [basic-logger](https://github.com/sbsoftware/node-basic-logger) project to use [colors](https://github.com/marak/colors.js/). 

<img src="https://raw.githubusercontent.com/LukePammant/pretty-logger/master/screenshots/info.png" alt="Screenshot of info log" />

Installation
------------

	npm install pretty-logger --save

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
		error: "pink",
		info: "orange"
	};

	var log = new Logger(customConfig) // custom config parameters will be used, defaults will be used for the other parameters

	log.error('An error occurred'); //This will be displayed in red
	log.warn('Something isn't right); //This will be displayed in yellow
	log.info('Something just happened, thought you should know!'); //This will be displayed in green
	log.debug('Here are some notes to help you figure out whats going on'); //This will be displayed in blue
	log.trace('Heres some more stuff '); //This will be displayed in gray
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
* `debug`- String that represents the color of the debug text. Default is "blue".
* `trace`- String that represents the color of the trace text. Default is "gray".

Future versions
---------------

* log to file
