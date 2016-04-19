var mongoose = require('../db/connection.js');
var Schema = mongoose.Schema;

var VotingOptionSchema = new Schema()
var VotingSessionSchema = new Schema()
var VoteSchema = new Schema()
var UserSchema = new Schema()

// options for voting
VotingOptionSchema.add({
  voteTitle:{
    type: String,
    required: true
  }
})

// voting sessions
VotingSessionSchema.add({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  votingDate:{
    type: Date,
    default: Date.now
  },
  startTime:{
    type: Date
  },
  votingOptions: [VotingOptionSchema],
  votes: [{
    type: Schema.ObjectId, ref: "Vote"
  }],
  users: [{
    type: Schema.ObjectId, ref: "User"
  }]
});

// votes
VoteSchema.add({
  vote:{
    type: Boolean,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  votingSessions: [{
    type: Schema.ObjectId, ref: "VotingSession"
  }],
  users: [{
    type: Schema.ObjectId, ref: "User"
  }]
});

// users
UserSchema.add({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },
  votingSessions: [{
    type: Schema.ObjectId, ref: "VotingSession"
  }],
  votes: [{
    type: Schema.ObjectId, ref: "Vote"
  }]
});

var VotingOptionModel = mongoose.model("VotingOption", VotingOptionSchema)
var VotingSessionModel = mongoose.model("VotingSession", VotingSessionSchema)
var VoteModel = mongoose.model("Vote", VoteSchema)
var UserModel = mongoose.model("User", UserSchema)

module.exports = {
  VotingOptionModel: VotingOptionModel,
  VotingSessionModel: VotingSessionModel,
  VoteModel: VoteModel,
  UserModel: UserModel
}
