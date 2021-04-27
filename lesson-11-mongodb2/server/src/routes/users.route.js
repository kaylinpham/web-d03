const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsers);

router.get("/:id", usersController.getUserById);

router.delete("/:id", usersController.deleteUserById);

router.post("/", usersController.createNewUser);

router.put("/:id", usersController.updateUserById);

module.exports = router;
