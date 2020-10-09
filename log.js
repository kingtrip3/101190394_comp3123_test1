var fs = require("fs");
var Logger = (exports.Logger = {});
var infoStream = fs.createWriteStream("logs/info.txt");
//error
var errorStream = fs.createWriteStream("logs/error.txt");
//
Logger.info = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n";
  infoStream.write(message);
};
//
Logger.error = function(msg) {
  var message = new Date().toISOString() + " : " + msg + "\n";
  errorStream.write(message);
};