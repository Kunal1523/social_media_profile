const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullName: String,
  bio: String,
  followers: Number,
  following: Number,
  profilePic: String,
  fetchedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Profile', ProfileSchema);