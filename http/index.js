const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);


    //Aqui é o express "A parte de get e post" feito na unha
    if (req.method === 'POST') {
        res.writeHead(201, {
            'Content-type': 'application/json'
        })

        res.write(`{"message": "Cadastrado com sucesso!"}`)
    }
    if (req.method === 'GET') {
        //msg de entrega
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });


        res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Http</h1>
            </body>
        </html>
    
    `)
    }

    //


    res.end()

});

srv.listen(3001, () => {
    console.log('Server funcionando');
});