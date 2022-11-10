const { Schema, model } = require('mongoose');
const express = require('express');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {
    reactions: [reactionSchema],
  },
  toJSON: {
    getters: true,
  },
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions;
});

const Thought = model('Thought', UserSchema);

module.exports = Thought;
