var stringify = require('json-stringify');

exports.default  = {
    config: function (cfg) {

        for(var entry of cfg.module.rules) {
            // delete entry.parser;
            // delete entry.sockPath;
        }

        delete cfg.node;
        delete cfg.sockPath;
        // delete cfg.optimization;

        for (var plugin of cfg.plugins) {
            console.debug('loader', plugin.constructor.name);
        }
        
        

        console.debug('config', cfg);
        return cfg;
    },
    pre: function () {
        console.debug('pre');
    },
    post: function () {
        console.debug('post');
    }
};
