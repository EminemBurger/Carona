
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function(req, res, next)
{
    try {
        const token = req.header('x-auth-token');
        const verifiedUser = jwt.verify(
            token,
            process.env.jwtSecret
        )
        req.user = verifiedUser.user;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Server Error..."});
    }
}