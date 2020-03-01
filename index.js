const path = require('path')

module.exports = {
  extends: [
    path.join(__dirname, 'lib', 'common.js'),
    'eslint-config-josa'
  ],
}
