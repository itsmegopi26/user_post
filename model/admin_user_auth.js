const { model, Schema } = require("mongoose")

let user= new Schema ({
    user_name: {
        type:String
    },
    user_id: {
        type:String
    },
    user_password: {
        type:String
    },
    user_type: {
        type:String
    }

})

module.exports = model("user_Roll", user);
