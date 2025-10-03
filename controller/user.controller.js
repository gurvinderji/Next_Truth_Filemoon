const UserModel = require("../model/user.model.js");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    await UserModel.create(req.body);
    res.status(200).json({ message: "signup success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User doesn't exist" });

    const isRegister = bcrypt.compareSync(password, user.password);

    if (!isRegister)
      return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({ message: "Login success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { signup, login };
