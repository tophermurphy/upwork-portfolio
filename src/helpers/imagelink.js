const Handlebars = require('handlebars');

module.exports = function (data) {
    let title = data.filename.replace(/-/g, ' ').replace(/\.\w+/g, '').replace(/\b\w/gi, function(l){return l.toUpperCase()});
    let filepath = require(`../images/${ data.filename }`);
    let altname = data.alt || "Chris Murphy portfolio image.";

  let string = new Handlebars.SafeString(`<img src="${filepath}" title="${title}" alt="${altname}">`);

  return string;
}