var Hapi = require('hapi'),

    server = new Hapi.Server(3050);


server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './'
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
