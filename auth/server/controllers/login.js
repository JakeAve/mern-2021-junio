const { addTokenToRes } = require("../jwt");
const { UserModel } = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).exec();
    console.log({ user });

    if (!user) throw new Error("Could not login");

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log({ passwordMatch });

    if (!passwordMatch) throw new Error("Could not login");

    addTokenToRes(res, user);

    res.json({ email, id: user._id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

module.exports = login;
