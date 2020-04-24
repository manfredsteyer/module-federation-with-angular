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

        for (var rule of cfg.module.rules) {
          //  console.debug('rule', rule);
        }
        
        console.debug('options', cfg.module.rules[7].use[1].options);
        //console.debug('cfg', cfg);
        

        return cfg;
    },
    pre: function () {
        console.debug('pre');
    },
    post: function () {
        console.debug('post');
    }
};
