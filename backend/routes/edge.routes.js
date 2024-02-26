module.exports = app => {
    const bodyParser = require('body-parser');
    const edges = require("../controllers/edge.controller");
    
    var router = require("express").Router();

    // Create an edge.
    router.post('/create', bodyParser.json(), edges.create);

    // Find all edges in a group.
    router.get('/all/:groupId', edges.findAllEdge);

    // // Get one node.
    // router.get('/:id', nodes.findOneNode);

    // // Update one node.
    // router.put('/:nodeId', nodes.updateNode);

    app.use('/api/edges', router);
}