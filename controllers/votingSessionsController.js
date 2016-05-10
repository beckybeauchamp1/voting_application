var express = require('express');
var Models = require('../db/schema.js');
var VotingSession =  Models.VotingSessionModel;
var router = express.Router();

var votingSessionController = {};

// Find one when login to voting session
votingSessionController.findVotingSession = function(req, res){
  return VotingSession.findOne({password: req}, function(err, results){
    if(err){
      console.log(err);
    }
    else{
      return results
    }
  });
};

// grabbing all voting sessions
votingSessionController.allVotingSessions = function(req,res){
  console.log('allVotingSessions');
  VotingSession.find(function(err,voting){
    if(voting){
      res.json(voting);
    } else {
      console.log(err);
    }
  });
};

// showing one voting session
votingSessionController.showVotingSession = function(req, res){
  console.log(req.params.password);
  VotingSession.findOne(req.params.password, function(err, results){
    if(err){
      console.log(err);
    }
    else{
      console.log(results);
      res.json(results);
    }
  });
};

// updating voting session
votingSessionController.updateVotingSession = function(req,res){
  VotingSession.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(results){
    console.log(results);
    res.json(results);
  });
};

// deleting voting session
votingSessionController.deleteVotingSession = function(req, res){
  VotingSession.findByIdAndRemove(req.params.id, function(err, results){
    if(err){
      console.log(err);
    }
    else{
      res.json(results);
    }
  });
};

// creating voting session
votingSessionController.createVotingSession = function(req, res){
  VotingSession.create(req.body, function(err, results){
    if(err){
      console.log(err);
    }
    else{
      res.json(results);
    }
  });
};

// adding voting option for voting session
votingSessionController.addVotingOption = function(req, res){
  VotingSession.findById(req.params.id, function(err, session){
    if(err){
      console.log(err);
    }
    else{
      session.votingOptions.push(req.body)
      session.save(function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log(session);
          res.json(session)
        }
      });
    }
  });
};

// removing voting option
votingSessionController.removeVotingOption = function(req, res){
  console.log(req.body)

  VotingSession.findByIdAndUpdate(req.params.id, {$pull: {votingOptions: {voteTitle: req.body.voteTitle}}}, {new: true}, function(err, results){
    if(err){
      console.log(err)
    }
    else{
      console.log(results);
      res.json(results)
    }
  })
};


module.exports = votingSessionController;
