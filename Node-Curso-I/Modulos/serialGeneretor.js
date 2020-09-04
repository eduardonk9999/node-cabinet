// var max = 1000;

// module.exports.generete = function() {
//     return Math.floor(Math.random() * max);
// };

 var createSerialGeneretor = function() {
     var max = 10000;

     var generete = function () {
        return Math.floor(Math.random() * max);
     };

     return {
         generete: generete
     };
 };

 module.exports = createSerialGeneretor();