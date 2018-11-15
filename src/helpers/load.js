// let values = function(values){
//     if(values.length < 1){
//         return values = null;
//     }
//     else return values;
// };

module.exports = function (target, data, values) {
    var source = require(`../data/${ data }.js`);
    
    if (values != null) {
        source = source[values];
    }
    
    Object.assign(target, source);
}   