/*
 * This file defines additional webpack configuration for this plugin.
 * It will be bundled into the webpack configuration at build time.
 */

module.exports = {
  resolve: {
    alias: {
      underscore: 'perseus/lib/underscore'
    }
  }
};
