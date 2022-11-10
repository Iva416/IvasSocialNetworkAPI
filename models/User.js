const { Schema, model } = require('mongoose');
const express = require('express');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: 'thought',
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'thought',
  },
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
