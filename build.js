
var fs = require("fs");
var handlebars = require("handlebars");

var storeTemplate = "./store.hbs";
var storeDestination = "./html/index.html";
var storeInfo = require('./storeinfo.json');

storeInfo.items = require('./items.json').reverse();

createStore(storeInfo, storeTemplate, storeDestination);

function createStore(data,template, destination) {
  fs.writeFileSync(destination, renderFromExternalTemplate(template, data));
}

function renderFromExternalTemplate(templateFile, data){
  var file = fs.readFileSync(templateFile, "utf8");
  var template = handlebars.compile(file);
  return template(data);
}
