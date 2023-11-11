const User = require("../models/User")

const createService = (body) => User.create(body);
const findAllservice = ()=>User.find
module.exports = {
    createService,
    findAllservice,
};