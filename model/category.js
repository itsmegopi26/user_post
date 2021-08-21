const { model, Schema } = require("mongoose")

let admin_img = new Schema ({
    img: {
        type:String
    },
    Write_caption: {
        type:String
    },
    Tag_People: {
        type:String
    }
})
module.exports = model("admin_img", admin_img)
