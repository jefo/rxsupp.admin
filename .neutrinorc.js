const path = require('path');
const react = require('neutrino-preset-react');

module.exports = (neutrino) => {
  neutrino.use(react);
  neutrino.config.output.publicPath('/');
};
