import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minLength: [3, "Name should have atleast 3 charcter"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
	},
	subject: {
		type: String,
		required: [true, "Subject is required is required"],
		minLength: [5, "Name should have atleast 3 charcter"],
	},
	message: {
		type: String,
		required: [true, "Message is required"],
		minLength: [10, "Name should have atleast 3 charcter"],
	},
});

export const Message = mongoose.model("Message", messageSchema);
