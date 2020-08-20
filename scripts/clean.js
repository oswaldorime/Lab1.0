const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../vistas');

sh.rm('-rf', `${destPath}/*`)

