module.exports = app => {
    const bodyParser = require('body-parser');
    const groups = require("../controllers/group.controller");

    var router = require("express").Router();

    // Update a Group with joinCode
    router.put("/:joinCode/join", bodyParser.json(), groups.joinGroup);

    // Get all member in activity.
    router.get("/:id/members", groups.findMyMember);

    // Get group member.
    router.get("/:groupId/groupMember", groups.findMyGroupMember);

    // Get member's group.
    router.get("/:activityId/:userId", groups.findMyGroup);

    // Enter different group.
    router.get("/teacher/:joinCode/:userId", groups.EnterDifferentGroup);

    // Update a Group with id.
    router.put("/:groupId", groups.updateGroup);

    // Delete a Group with id
    router.delete("/:groupId", groups.delete);

    app.use('/api/groups', router);
}