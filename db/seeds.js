var mongoose = require('../db/connection.js');
var Models = require('../db/schema.js');
// grabbing module.exports from schema.js
var VotingOption =  Models.VotingOptionModel;
var VotingSession =  Models.VotingSessionModel;
var Vote =  Models.VoteModel;
var User =  Models.UserModel;


VotingOption.remove({}, function(err){
  console.log(err)
});
VotingSession.remove({}, function(err){
  console.log(err)
});

var option1 = new VotingOption({
  voteTitle: "Should we go out tonight?"
});
var option2 = new VotingOption({
  voteTitle: "Should I go for a run?"
});
var option3 = new VotingOption({
  voteTitle: "I should learn React"
});
var option4 = new VotingOption({
  voteTitle: "I should learn Python"
});
var option5 = new VotingOption({
  voteTitle: "I should learn Go"
});
var option6 = new VotingOption({
  voteTitle: "I should learn Angular 2"
});

var votingSession1 = new VotingSession({
  title: "Friday Night Vote Sess",
  description: "Deciding what we should do tonight",
  password: "cmb8214rb"
});

var votingSession2 = new VotingSession({
  title: "Programming Languages",
  description: "What should we learn?",
  password: "cmb8214rb"
});

var optionsArray1 = [option1, option2];
var optionsArray2 = [option3, option4, option5, option6];

optionsArray1.forEach(function(option){
  votingSession1.votingOptions.push(option);
});

votingSession1.save(function(err, results){
  if(err){
    throw err;
  }
  else{
    console.log(results +
      " was saved");
    }
  });

  optionsArray2.forEach(function(option){
    votingSession2.votingOptions.push(option);
  });

  votingSession2.save(function(err, results){
    if(err){
      throw err;
    }
    else{
      console.log(results +
        " was saved");
      }
    });
