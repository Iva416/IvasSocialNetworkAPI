const { Schema, model } = require('mongoose');
const express = require('express');

const ReactionsSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    ref: 'ObjectId',
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

module.exports = Reactions.js;
