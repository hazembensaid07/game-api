const express = require("express");
const router = express.Router();
const {
  createGameSession,
  getGameSessionByUserId,
  updateGameSessionState,
  deleteGameSessionByGameId,
} = require("../controllers/gameSession");

const {
  
  loadUser,
} = require("../controllers/user");
const { isAuth } = require("../middleware/signIn");

// Create a new game session
router.post("/add", isAuth, createGameSession);

// Get game sessions by user ID
router.get(
  "/user/:userId",
  isAuth, 
  getGameSessionByUserId
);

// Update game session state by ID
router.put(
  "/update/:gameSessionId",
  isAuth, 
  updateGameSessionState
);

// Delete game sessions by user ID
router.delete("/delete/:gameId", isAuth, deleteGameSessionByGameId);

module.exports = router;
