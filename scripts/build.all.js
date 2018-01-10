const fs = require('fs');
const async = require('async');
const exec = require('child_process').exec;
const chalk = require('chalk');

let isDotBabelRCFile = true;
if (!fs.existsSync('./.babelrc')) {
  isDotBabelRCFile = false;
}

let isDotBabelRCJsFile = false;
if (fs.existsSync('./.babelrc.js')) {
  isDotBabelRCJsFile = true;
}

if (!(isDotBabelRCFile || isDotBabelRCJsFile)) {
  console.log('No babel rc file found');
  process.exit(0);
}

let babelrc;
if (isDotBabelRCFile) {
  babelrc = JSON.parse(fs.readFileSync('./.babelrc'));
} else if (isDotBabelRCJsFile) {
  babelrc = require('./.babelrc.js');
}

const plugin = babelrc.plugins.find((arr) => {
  if (arr[0] === 'variable-path-resolver') {
    return true;
  }
  return false;
});
if (!plugin) {
  console.error('babel-plugin-variable-path-resolver not found in babelrc file');
  process.exit(0);
}
const config = plugin[1];

// const currentSite = process.env[config.envName];
const sites = Object.keys(config.vars);

const fns = [];
sites.forEach((site) => {
  if (site !== 'default') {
    fns.push((callback) => {
      exec(`${config.envName}=${site} yarn build`, (err) => {
        if (!err) {
          console.log(chalk.green(`Successfully build ${site}\n`));
        }
        callback(err, site);
      });
    });
  }
});

async.parallel(fns, (err, data) => {
  if (err) {
    console.error(`Building failed. ${err}`);
  }
});
