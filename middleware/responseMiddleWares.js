const jwt = require("jsonwebtoken")

exports.responseMiddleWares = (msg, success, data, code) => {
    let obj = {}
    obj['data'] = data 
    obj['success'] = success
    obj['success_code'] = code
    obj['message'] = msg
    return obj; 
}

exports.routeMiddleWares = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];
        return jwt.verify(token, config.secret_key, (err, userData) => {
            if (err) {
                res.status(403).json({ success: false, message: "User is not authenticated" });
            }
            else {
                req.user = userData
                next()
            }
        })
    }
    else {
        res.status(401).json({ success: false, message: "token missing" })
    }
}

