const Team = require("../models/team.js");

const addUser = async (req, res) => {
  try {
    const { username, email, phone, img } = req.body;
    const newTeam = new Team({
      username,
      email,
      phone,
      img,
    });
    await newTeam.save();
    res
      .status(201)
      .json({ message: "Team created successfully", team: newTeam });
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ message: "Error creating team" });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await Team.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

const getUserByID = async (req, res) => {
  try {
    const users = await Team.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    console.error("error while fetching user by id", error);
    res.status(500).json({ message: "Error fetching users by id" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const users = await Team.findByIdAndDelete(userId);
    res.status(200).json(users);
  } catch (error) {
    console.error("user not deleted", error);
    res.status(500).json({ message: "user not deleted" });
  }
};

const editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, phone, img } = req.body;
    const updatedUser = await Team.findByIdAndUpdate(
      userId,
      { username, email, phone, img },
      { new: true }
    );
  } catch (error) {
    console.error("user cant update", error);
    res.status(500).json({ message: "user cant updated" });
  }
};

module.exports = { addUser, getUser, getUserByID, deleteUser, editUser };
