const GameSession = require("../models/gameSession"); // Assuming the model is in a file called GameSessionModel.js

// Function to create a new game session
exports.createGameSession = async (req, res) => {
  const { startTime, endTime, score, members } = req.body;
  try {
    const newGameSession = new GameSession({
      startTime,
      endTime,
      score,
      Members: members, // Saving user IDs in the Members array
    });

    await newGameSession.save();
    res.status(201).json(newGameSession);
  } catch (error) {
    console.error("Error creating game session:", error);
    res.status(500).json({ error: "Error creating game session" });
  }
};


// Function to get game session by user ID
exports.getGameSessionByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const gameSessions = await GameSession.find({ Members: userId });
    res.status(200).json(gameSessions);
  } catch (error) {
    console.error("Error getting game session by user ID:", error);
    res.status(500).json({ error: "Error getting game session by user ID" });
  }
};

// Function to update game session state
exports.updateGameSessionState = async (req, res) => {
  const gameSessionId = req.params.gameSessionId;
  const { newState } = req.body;
  try {
    const updatedGameSession = await GameSession.findByIdAndUpdate(
      gameSessionId,
      { $set: { state: newState } },
      { new: true }
    );
    res.status(200).json(updatedGameSession);
  } catch (error) {
    console.error("Error updating game session state:", error);
    res.status(500).json({ error: "Error updating game session state" });
  }
};

// Function to delete game session by user ID
exports.deleteGameSessionByGameId = async (req, res) => {
  const gameId = req.params.gameId; 
  try {
    await GameSession.deleteOne({ _id: gameId });
    res.status(200).json({ message: "Game session deleted successfully" });
  } catch (error) {
    console.error("Error deleting game session by game ID:", error);
    res.status(500).json({ error: "Error deleting game session by game ID" });
  }
};

