(function () {
    var pkginfo = require('pkginfo')(module, 'version'),
        colors = require('colors'),
        BasicLogger = require('basic-logger'),
        _ = require('underscore'),
        PrettyLogger;

    exports.defaultConfig = {
        error: "red",
        info: "green",
        warn: "yellow",
        debug: "cyan",
        trace: "grey"
    };

    module.exports = PrettyLogger = (function () {

        function formatForConfig (msg, config) {
            return Array.isArray(config)
                ? config.reduce(function (m, c) { return m[c]; }, msg)
                : msg[config];
        }
        
        PrettyLogger.setLevel = BasicLogger.setLevel;
        function PrettyLogger(config) {
            if (config == null) config = {};
            this.config = _.defaults(config, exports.defaultConfig);
            var logger = new BasicLogger(config);

            BasicLogger.prototype.error = function () {
                var args, msg;
                msg = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                args.unshift(formatForConfig(msg, this.config.error), 'error');
                return this.log.apply(this, args);
            };

            BasicLogger.prototype.info = function () {
                var args, msg;
                msg = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                args.unshift(formatForConfig(msg, this.config.info), 'info');
                return this.log.apply(this, args);
            };

            BasicLogger.prototype.warn = function () {
                var args, msg;
                msg = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                args.unshift(formatForConfig(msg, this.config.warn), 'warning');
                return this.log.apply(this, args);
            };

            BasicLogger.prototype.warning = function () {
                var args, msg;
                msg = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                args.unshift(formatForConfig(msg, this.config.warn), 'warning');
                return this.log.apply(this, args);
            };

            BasicLogger.prototype.debug = function () {
                var args, msg;
                msg = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                args.unshift(formatForConfig(msg, this.config.debug), 'debug');
                return this.log.apply(this, args);
            };

            BasicLogger.prototype.trace = function () {
                var args, msg;
                msg = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                args.unshift(formatForConfig(msg, this.config.trace), 'trace');
                return this.log.apply(this, args);
            };

            return logger;
        }

        return PrettyLogger;
    })();
}).call(this);
