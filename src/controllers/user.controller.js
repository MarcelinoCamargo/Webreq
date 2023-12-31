const userService = require('../services/user.service')

const create = async(req, res, next) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "submit all fields for registration" })

    }

    const user = await userService.createService(req.body);
    
    if (!user) {
        return res.status(400).send({ message: "Error creating User" })
    };

    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },

    })
};

const findAll = async(req, res) => {
  const users = await userService.findAllservice();

  if (users.length === 0){
    return res.status(400).send({message:"there are no registered users"})
  }
   res.send (users)
};

module.exports = { create, findAll }