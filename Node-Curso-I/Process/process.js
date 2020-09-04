/*
process
Um processo é uma instância de um determinado programa em execução no sistema operacional.

STD
São canais de comunicação, utilizados para realizar operações de entrada e saída, entre o programa e o ambiente onde ele está sendo executado.

*/

var help = require('./help');

//Para ter acesso a linha de comando
var options = process.argv.slice(2);
if(options.length < 1) {
    return;
}
switch(options[0]){
    case 'a':
        console.log('pid' + process.pid);
        break;
}