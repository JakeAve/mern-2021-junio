const { UserModel } = require("../models/User");

module.exports = {
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const cookies = req.cookies;
      console.log({ cookies });
      const user = await UserModel.findById(id).exec();
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ firstName: user.firstName });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  },
};
