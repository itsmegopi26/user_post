const mongoose = require('mongoose');

const URI = "mongodb+srv://Gopi:Gopi@26Koki@cluster0.cei44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
	await mongoose.connect(URI);
	console.log("db connected...!");
}

module.exports = connectDB;