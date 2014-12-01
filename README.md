Pretty-Logger
============

Pretty Logger for nodejs allows for color coded error, warning, info, debug and trace console messages with (or without) timestamp.
This is a modified version of the basic-logger found here: https://github.com/sbsoftware/node-basic-logger


Installation
------------

	npm install pretty-logger

Usage
-----

	var Logger = require('pretty-logger');
	// configure level one time, it will be set to every instance of the logger
	Logger.setLevel('warning'); // only warnings and errors will be shown
	Logger.setLevel('warning', true); // only warnings and errors will be shown and no message about the level change will be printed

	var customConfig = {
		showMillis: true;
		showTimestamp: true;
	};

	var log = new Logger(customConfig) // custom config parameters will be used, defaults will be used for the other parameters

	log.error('An error occurred'); //This will be displayed in red
	log.warn('Something isn't right); //This will be displayed in yellow
	log.info('Something just happened, thought you should know!'); //This will be displayed in green
	log.debug('Here are some notes to help you figure out whats going on'); //This will be displayed in blue
	log.trace('Heres some more stuff '); //This will be displayed in gray
	
Config options
--------------

* `showTimestamp` - Show the timestamp with every message.
* `showMillis` - Show milliseconds in the timestamp.
* `printObjFunc` - The function to apply objects to, if logged. Default is util.inspect.
* `prefix` - String that is prepended to every message logged with this instance.

Test
----

You'll need `vows`. Then just run `npm test`.

Future versions
---------------

* support for colored log messages
* log to file
