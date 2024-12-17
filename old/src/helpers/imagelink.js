const Handlebars = require('handlebars');

module.exports = function (data) {
    let filepath = require(`../images/${ data.filename }`);
    let expression = /\.(gif|jpg|jpeg|tiff|png|svg)$/i;
    let ext = data.filename.match(expression);
    let b4ext = data.filename.replace(expression, '');
    let title = b4ext.replace(/-/g, ' ').replace(/\b\w/gi, function(l){return l.toUpperCase()});
    
    let altname = data.alt || "Chris Murphy portfolio image.";

    if(data.widths){
      let srcStr = '';

      for(let i = 1; i < data.widths.length; i++){
        let elFilename = require(`../images/${b4ext}-${data.widths[i]}w${ext[0]}`);
        srcStr += elFilename + ' ' + data.widths[i] + 'w, ';
      }


      return new Handlebars.SafeString(`
        <img src="${filepath}" title="${title}" alt="${altname}"
        srcset="${srcStr}"
        sizes="(max-width:739px) ${data.mobileWidth}, ${data.defaultWidth}"
        >`);
    }else {
      return new Handlebars.SafeString(`<img src="${filepath}" title="${title}" alt="${altname}">`);
    }


}