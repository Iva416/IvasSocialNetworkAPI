const { Schema, model } = require('mongoose');
const express = require('express');
const ReactionsSchema = require('./Reactions');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (v) => {
        const date = new Date(v);
        return date.toLocaleString();
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      reactions: [ReactionsSchema],
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
