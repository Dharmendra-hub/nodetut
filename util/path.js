const path = require('path');

//Accessing rooth path using the process object
module.exports = path.dirname(process.mainModule.filename);
