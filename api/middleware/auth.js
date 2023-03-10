const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../../utils/constants');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            status: "Error",
            message: "Unauthorized access"
        })
    }

}