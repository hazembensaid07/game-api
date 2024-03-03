const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const GameSessionSchema = new Schema({
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
    default: "not started",
  },
  Members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = GameSession = model("gameSession", GameSessionSchema);
