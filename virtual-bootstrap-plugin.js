const path = require("path");
const fs = require("fs");
const VirtualModulesPlugin = require("webpack-virtual-modules");

const getLogger = require('webpack-log');
const log = getLogger({ name: 'Logger' });

class VirtualBootstrapPlugin extends VirtualModulesPlugin {
  constructor(modules = {}) {
    super(modules);
  }

  apply(compiler) {
    const entry = compiler.options.entry.main.import[1];
    log.info('########## entry', entry);
    const resolvedEntryFile = require.resolve(entry);
    const originalEntrySource = fs.readFileSync(resolvedEntryFile, {
      encoding: "utf8",
    });
    const onlyPath = path.dirname(resolvedEntryFile);

    log.info('########## before', this._staticModules);

    Object.assign(this._staticModules, {
      [entry]: 'import("./bootstrap.ts")',
      ['./projects/mfe1/src/bootstrap.ts']: originalEntrySource,
    });

    log.info('########## after', this._staticModules);

    super.apply(compiler);
  }
}

module.exports = VirtualBootstrapPlugin;