const mongoose = require('mongoose');

const SampleSchema = new mongoose.Schema({
  input1: {
    type: String,
    required: true,
  },
  input2: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
});

SampleSchema.index({ unique: true });

const Sample = mongoose.model('Sample', SampleSchema, 'samples');

module.exports = Sample;
