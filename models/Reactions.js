const { Schema, model } = require('mongoose');
const express = require('express');

const ReactionsSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    get: (v) => {
      const date = new Date(v);
      return date.toLocaleString();
    },
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
});

module.exports = ReactionsSchema;
