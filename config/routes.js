var express = require('express');
var router = express.Router();

var votingSessionController = require('../controllers/votingSessionsController');

// Voting Sessions and Embedded Voting Options Routes
router.get('/signin', votingSessionController.findVotingSession)
router.get('/voting', votingSessionController.allVotingSessions)
router.get('/voting/:id',votingSessionController.showVotingSession)
router.delete('/voting/:id',votingSessionController.deleteVotingSession)
router.put('/voting/:id',votingSessionController.updateVotingSession)
router.put('/voting/:id/addOption',votingSessionController.addVotingOption)
router.put('/voting/:id/removeOption', votingSessionController.removeVotingOption)
router.post('/voting',votingSessionController.createVotingSession)

module.exports = router;
