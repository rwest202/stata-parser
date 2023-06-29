const koffi = require("koffi");

const libstata = koffi.load(__dirname + "/stata.so", {
  js_stata_read: ["string", ["string"]],
  js_stata_write: ["void", ["string", "string"]],
});

const stata_read = libstata.func("char * js_stata_read(char *)");
const stata_write = libstata.func("int js_stata_write(char *, char *)");

exports.read = function (filename) {
  return JSON.parse(stata_read(filename));
};

exports.write = function (filename, data) {
  return stata_write(filename, JSON.stringify(data));
};
