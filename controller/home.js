const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../view/intdex.html`));
};

module.exports = {
  getHome: home
};