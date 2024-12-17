module.exports = function (filename) {
    return filename.replace(/-/g, ' ').replace(/\.\w+/g, '').replace(/\b\w/gi, function(l){return l.toUpperCase()});
}